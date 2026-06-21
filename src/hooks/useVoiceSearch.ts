'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';

import { requestMicrophonePermission, speak } from '@/services/speech';

type VoiceSearchOptions = {
  onResult: (transcript: string) => void;
  onStatusChange: (status: string) => void;
};

type SpeechRecognitionEventLike = {
  results: { 0: { 0: { transcript: string } } };
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

export default function useVoiceSearch({
  onResult,
  onStatusChange,
}: VoiceSearchOptions) {
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const promptTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isListening, setIsListening] = useState(false);
  const isSupported = useSyncExternalStore(
    subscribeToBrowserSupport,
    () => Boolean(getSpeechRecognition()),
    () => true
  );

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      if (promptTimerRef.current) clearTimeout(promptTimerRef.current);
    };
  }, []);

  const startListening = useCallback(async () => {
    const Recognition = getSpeechRecognition();

    if (!Recognition) {
      onStatusChange(
        'Pencarian suara belum didukung browser ini. Gunakan kolom pencarian dengan keyboard.'
      );
      return;
    }

    setIsListening(true);
    const prompt = 'Perintah suara aktif. Setelah bunyi selesai, silakan bicara.';
    onStatusChange(prompt);

    let recognitionStarted = false;
    let permissionReady = false;
    let promptFinished = false;

    const beginRecognition = () => {
      if (recognitionStarted || !permissionReady || !promptFinished) return;
      recognitionStarted = true;
      if (promptTimerRef.current) clearTimeout(promptTimerRef.current);

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
            : event.error === 'no-speech'
              ? 'Tidak ada suara yang terdengar. Tekan mikrofon lalu coba lagi.'
            : 'Ucapan belum berhasil dikenali. Silakan coba lagi.';
        onStatusChange(message);
        setIsListening(false);
        speak(message);
      };

      recognition.onend = () => {
        recognitionRef.current = null;
        setIsListening(false);
      };

      try {
        onStatusChange(
          'Mikrofon aktif. Ucapkan materi yang dicari, bacakan, atau simpan.'
        );
        recognition.start();
      } catch {
        const message =
          'Mikrofon belum dapat dinyalakan. Tutup aplikasi lain yang memakai mikrofon lalu coba lagi.';
        onStatusChange(message);
        setIsListening(false);
        speak(message);
      }
    };

    const announced = speak(prompt, {
      onEnd: () => {
        setTimeout(() => {
          promptFinished = true;
          beginRecognition();
        }, 3000);
      },
    });

    if (announced) {
      promptTimerRef.current = setTimeout(() => {
        promptFinished = true;
        beginRecognition();
      }, 6500);
    } else {
      promptFinished = true;
    }

    try {
      await requestMicrophonePermission();
      permissionReady = true;
      beginRecognition();
    } catch {
      if (promptTimerRef.current) clearTimeout(promptTimerRef.current);
      const message =
        'Izin mikrofon ditolak. Aktifkan izin mikrofon pada pengaturan browser atau gunakan keyboard.';
      onStatusChange(message);
      setIsListening(false);
      speak(message);
    }
  }, [onResult, onStatusChange]);

  return { isListening, isSupported, startListening };
}
