'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

import Icon from '@/components/Icon';
import {
  playActivationTone,
  requestMicrophonePermission,
  speak,
  stopSpeaking,
  unlockSpeech,
} from '@/services/speech';

type SpeechRecognitionEventLike = {
  results: {
    0: ArrayLike<{ transcript: string }>;
  };
};

type SpeechRecognitionErrorLike = {
  error: string;
};

type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: SpeechRecognitionErrorLike) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

function getSpeechRecognition() {
  const speechWindow = window as typeof window & {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  };

  return speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition;
}

function commandDestination(transcript: string) {
  const normalized = transcript
    .toLocaleLowerCase('id-ID')
    .replace(/[.,!?]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (
    normalized.includes('pencarian') ||
    normalized.includes('cari') ||
    normalized.includes('search')
  ) {
    return '/pencarian';
  }
  if (
    normalized.includes('home') ||
    normalized.includes('beranda') ||
    normalized.includes('halaman utama')
  ) {
    return '/';
  }
  if (
    normalized.includes('koleksi') ||
    normalized.includes('koleksiku') ||
    normalized.includes('tersimpan')
  ) {
    return '/koleksi';
  }
  if (
    normalized.includes('bantuan') ||
    normalized.includes('tolong') ||
    normalized.includes('help')
  ) {
    return '/bantuan';
  }
  return null;
}

function destinationName(destination: string) {
  if (destination === '/') return 'beranda';
  return destination.replace('/', '');
}

function subscribeToBrowserSupport() {
  return () => {};
}

function getBrowserSupport() {
  return Boolean(getSpeechRecognition());
}

export default function VoiceNavigationButton() {
  const router = useRouter();
  const pathname = usePathname();
  const isSupported = useSyncExternalStore(
    subscribeToBrowserSupport,
    getBrowserSupport,
    () => true
  );
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState('');
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const promptTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      if (promptTimerRef.current) clearTimeout(promptTimerRef.current);
    };
  }, []);

  const startListening = async () => {
    const Recognition = getSpeechRecognition();

    if (!Recognition) {
      const response = 'Browser ini belum mendukung perintah suara.';
      setMessage(response);
      speak(response);
      return;
    }

    stopSpeaking();
    setIsListening(true);
    setMessage('Mikrofon aktif. Silakan sebutkan halaman tujuan.');
    unlockSpeech();
    playActivationTone();

    try {
      await requestMicrophonePermission();
    } catch {
      const response =
        'Izin mikrofon ditolak. Aktifkan izin mikrofon pada pengaturan browser lalu coba lagi.';
      setMessage(response);
      setIsListening(false);
      speak(response);
      return;
    }

    const recognition = new Recognition();
    recognition.lang = 'id-ID';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;
    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      const alternatives = Array.from(event.results[0])
        .map((result) => result.transcript.toLowerCase().trim())
        .filter(Boolean);
      const matchedCommand = alternatives
        .map((transcript) => ({
          transcript,
          destination: commandDestination(transcript),
        }))
        .find((command) => command.destination);

      if (matchedCommand?.destination) {
        setMessage(`Perintah dikenali: ${matchedCommand.transcript}.`);
        if (matchedCommand.destination === pathname) {
          speak(`Anda sudah berada di halaman ${destinationName(pathname)}.`);
        } else {
          const destination = matchedCommand.destination;
          let navigated = false;
          const navigate = () => {
            if (navigated) return;
            navigated = true;
            router.push(destination);
          };

          const announced = speak(
            `Menuju halaman ${destinationName(destination)}.`,
            { onEnd: navigate }
          );

          if (announced) {
            window.setTimeout(navigate, 1800);
          } else {
            navigate();
          }
        }
      } else {
        const response =
          'Perintah tidak dikenali. Coba sebutkan beranda, cari, koleksi, atau bantuan.';
        setMessage(response);
        speak(response);
      }
    };

    recognition.onerror = (event) => {
      const response =
        event.error === 'not-allowed'
          ? 'Izin mikrofon ditolak. Aktifkan izin lalu coba lagi.'
          : event.error === 'no-speech'
            ? 'Tidak ada suara yang terdengar. Tekan tombol mikrofon lalu coba lagi.'
            : 'Suara belum berhasil dikenali. Silakan coba lagi.';
      setMessage(response);
      setIsListening(false);
      speak(response);
    };

    recognition.onend = () => {
      recognitionRef.current = null;
      setIsListening(false);
    };

    try {
      recognition.start();
    } catch {
      const response =
        'Mikrofon belum dapat dinyalakan. Tutup aplikasi lain yang memakai mikrofon lalu coba lagi.';
      setMessage(response);
      setIsListening(false);
      speak(response);
    }
  };

  return (
    <div className="voice-navigation">
      <button
        className={`voice-navigation__button ${isListening ? 'is-listening' : ''}`}
        disabled={isListening || !isSupported}
        onClick={startListening}
        type="button"
        aria-label="Navigasi dengan perintah suara"
      >
        <Icon name={isListening ? 'radio' : 'mic'} width={20} height={20} />
        <span>{isListening ? 'Mendengarkan...' : 'Navigasi Suara'}</span>
      </button>
      {!isSupported && (
        <p className="voice-navigation__status" role="status">
          Browser ini belum mendukung voice command.
        </p>
      )}
      {message && isSupported && (
        <p className="sr-only" aria-live="polite">
          {message}
        </p>
      )}
    </div>
  );
}
