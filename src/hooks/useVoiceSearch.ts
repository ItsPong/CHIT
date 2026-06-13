type VoiceSearchOptions = {
  onResult: (transcript: string) => void;
  onStatusChange: (status: string) => void;
};

export default function useVoiceSearch(_options: VoiceSearchOptions) {
  return {
    isListening: false,
    isSupported: false,
    startListening: () => {},
  };
}
