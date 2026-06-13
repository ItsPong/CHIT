import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';

type VoiceSearchOptions = {
  onResult: (transcript: string) => void;
  onStatusChange: (status: string) => void;
};

type SpeechRecognitionEventLike = {
  results: {
    0: {
      0: {
        transcript: string;
      };
    };
  };
};

type SpeechRecognitionErrorLike = {
  error: string;
};

type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: SpeechRecognitionErrorLike) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

function getSpeechRecognition() {
  if (typeof window === 'undefined') return null;

  const speechWindow = window as typeof window & {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  };

  return speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition ?? null;
}

function subscribeToBrowserSupport() {
  return () => {};
}

function getBrowserSupport() {
  return getSpeechRecognition() !== null;
}

function getServerSupport() {
  return false;
}

export default function useVoiceSearch({
  onResult,
  onStatusChange,
}: VoiceSearchOptions) {
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const [isListening, setIsListening] = useState(false);
  const isSupported = useSyncExternalStore(
    subscribeToBrowserSupport,
    getBrowserSupport,
    getServerSupport
  );

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
    };
  }, []);

  const startListening = useCallback(() => {
    const Recognition = getSpeechRecognition();

    if (!Recognition) {
      onStatusChange(
        'Pencarian suara belum didukung browser ini. Gunakan kolom pencarian dengan keyboard.'
      );
      return;
    }

    const recognition = new Recognition();
    recognition.lang = 'id-ID';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      onStatusChange(`Ucapan dikenali: ${transcript}`);
      onResult(transcript);
    };

    recognition.onerror = (event) => {
      const message =
        event.error === 'not-allowed'
          ? 'Izin mikrofon ditolak. Aktifkan izin mikrofon atau gunakan keyboard.'
          : 'Ucapan belum berhasil dikenali. Silakan coba lagi.';
      onStatusChange(message);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    setIsListening(true);
    onStatusChange('Mikrofon aktif. Silakan ucapkan pertanyaan hukum.');
    recognition.start();
  }, [onResult, onStatusChange]);

  return {
    isListening,
    isSupported,
    startListening,
  };
}
