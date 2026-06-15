type SpeakOptions = {
  onEnd?: () => void;
};

const activeUtterances = new Set<SpeechSynthesisUtterance>();
let audioContext: AudioContext | null = null;

export function speak(text: string, options: SpeakOptions = {}) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  const synthesis = window.speechSynthesis;
  synthesis.cancel();
  synthesis.resume();

  const utterance = new SpeechSynthesisUtterance(text);
  const indonesianVoice = synthesis
    .getVoices()
    .find((voice) => voice.lang.toLocaleLowerCase().startsWith('id'));

  utterance.lang = 'id-ID';
  utterance.rate = 0.95;
  utterance.pitch = 1;
  utterance.volume = 1;
  if (indonesianVoice) utterance.voice = indonesianVoice;

  let completed = false;
  const complete = () => {
    if (completed) return;
    completed = true;
    activeUtterances.delete(utterance);
    options.onEnd?.();
  };

  utterance.onend = complete;
  utterance.onerror = complete;
  activeUtterances.add(utterance);
  synthesis.speak(utterance);

  return true;
}

export function unlockSpeech() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  const utterance = new SpeechSynthesisUtterance(' ');
  utterance.volume = 0;
  activeUtterances.add(utterance);
  utterance.onend = () => activeUtterances.delete(utterance);
  utterance.onerror = () => activeUtterances.delete(utterance);
  window.speechSynthesis.speak(utterance);
  return true;
}

export function playActivationTone() {
  if (typeof window === 'undefined') return false;

  const AudioContextConstructor =
    window.AudioContext ??
    (
      window as typeof window & {
        webkitAudioContext?: typeof AudioContext;
      }
    ).webkitAudioContext;

  if (!AudioContextConstructor) return false;

  audioContext ??= new AudioContextConstructor();
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const now = context.currentTime;

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(740, now);
  oscillator.frequency.exponentialRampToValueAtTime(980, now + 0.12);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.17);
  void context.resume();
  return true;
}

export async function requestMicrophonePermission() {
  if (
    typeof navigator === 'undefined' ||
    !navigator.mediaDevices?.getUserMedia
  ) {
    return true;
  }

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  stream.getTracks().forEach((track) => track.stop());
  return true;
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    activeUtterances.clear();
    window.speechSynthesis.cancel();
  }
}
