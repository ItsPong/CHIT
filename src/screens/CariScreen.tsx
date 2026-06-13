import { Ionicons } from '@expo/vector-icons';
import { useCallback, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AppHeader from '@/components/AppHeader';
import Colors from '@/constants/colors';
import {
  searchLegalMaterials,
  type LegalMaterial,
} from '@/data/legalMaterials';
import useCollection from '@/hooks/useCollection';
import useVoiceSearch from '@/hooks/useVoiceSearch';
import { speak } from '@/services/speech';

const SUGGESTIONS = [
  'Apa hak tunanetra?',
  'Aksesibilitas fasilitas umum',
  'Cara melapor diskriminasi',
];

type ResultCardProps = {
  material: LegalMaterial;
  expanded: boolean;
  saved: boolean;
  onListen: () => void;
  onToggleDetails: () => void;
  onSave: () => void;
};

function ResultCard({
  material,
  expanded,
  saved,
  onListen,
  onToggleDetails,
  onSave,
}: ResultCardProps) {
  return (
    <View style={styles.resultCard}>
      <Text style={styles.resultTopic}>{material.topic.toUpperCase()}</Text>
      <Text style={styles.resultTitle} accessibilityRole="header">
        {material.shortTitle}
      </Text>
      <Text style={styles.resultSummary}>{material.summary}</Text>

      <TouchableOpacity
        style={styles.primaryAction}
        onPress={onListen}
        accessibilityRole="button"
        accessibilityLabel={`Dengarkan ${material.shortTitle}`}
      >
        <Ionicons name="volume-high" size={19} color={Colors.textBlack} />
        <Text style={styles.primaryActionText}>Dengarkan</Text>
      </TouchableOpacity>

      <View style={styles.actionRow}>
        <TouchableOpacity
          style={styles.outlineAction}
          onPress={onToggleDetails}
          accessibilityRole="button"
          accessibilityLabel={`${expanded ? 'Tutup' : 'Lihat'} materi ${material.shortTitle}`}
          accessibilityState={{ expanded }}
        >
          <Ionicons
            name={expanded ? 'chevron-up' : 'book-outline'}
            size={18}
            color={Colors.textWhite}
          />
          <Text style={styles.outlineActionText}>
            {expanded ? 'Tutup' : 'Lihat Materi'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.outlineAction, saved && styles.savedAction]}
          onPress={onSave}
          disabled={saved}
          accessibilityRole="button"
          accessibilityLabel={
            saved
              ? `${material.shortTitle} sudah tersimpan`
              : `Simpan ${material.shortTitle}`
          }
          accessibilityState={{ disabled: saved }}
        >
          <Ionicons
            name={saved ? 'bookmark' : 'bookmark-outline'}
            size={18}
            color={saved ? Colors.textBlack : Colors.textWhite}
          />
          <Text
            style={[
              styles.outlineActionText,
              saved && styles.savedActionText,
            ]}
          >
            {saved ? 'Tersimpan' : 'Simpan'}
          </Text>
        </TouchableOpacity>
      </View>

      {expanded && (
        <View style={styles.materialDetails}>
          <Text style={styles.materialHeading}>Materi terkait</Text>
          {material.articles.map((article) => (
            <View key={article.title} style={styles.article}>
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleContent}>{article.content}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

export default function CariScreen() {
  const [query, setQuery] = useState('');
  const [searchedQuery, setSearchedQuery] = useState('');
  const [results, setResults] = useState<LegalMaterial[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [status, setStatus] = useState(
    'Ketik pertanyaan atau gunakan tombol mikrofon untuk mulai mencari.'
  );
  const { isSaved, save } = useCollection();

  const announceStatus = useCallback((message: string) => {
    setStatus(message);
  }, []);

  const runSearch = useCallback((searchQuery: string) => {
    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      setResults([]);
      setSearchedQuery('');
      setStatus('Masukkan nomor undang-undang atau pertanyaan hukum.');
      speak('Masukkan nomor undang-undang atau pertanyaan hukum.');
      return;
    }

    const matches = searchLegalMaterials(trimmedQuery);
    setQuery(trimmedQuery);
    setSearchedQuery(trimmedQuery);
    setResults(matches);
    setExpandedId(null);

    const message =
      matches.length > 0
        ? `Ditemukan ${matches.length} materi hukum terkait.`
        : 'Materi yang sesuai belum ditemukan. Coba gunakan kata kunci lain.';
    setStatus(message);
    speak(message);
  }, []);

  const handleVoiceResult = useCallback(
    (transcript: string) => {
      setQuery(transcript);
      runSearch(transcript);
    },
    [runSearch]
  );

  const { isListening, isSupported, startListening } = useVoiceSearch({
    onResult: handleVoiceResult,
    onStatusChange: announceStatus,
  });

  const listenToMaterial = (material: LegalMaterial) => {
    speak(`${material.title}. ${material.summary}`);
    setStatus(`Sedang membacakan ${material.shortTitle}.`);
  };

  const saveMaterial = (material: LegalMaterial) => {
    const saved = save(material);
    const message = saved
      ? `${material.shortTitle} berhasil disimpan ke koleksi.`
      : `${material.shortTitle} sudah ada di koleksi.`;
    setStatus(message);
    speak(message);
  };

  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.backgroundWarm}
      />
      <AppHeader />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title} accessibilityRole="header">
          Cari Hukum
        </Text>
        <Text style={styles.subtitle}>
          Cari berdasarkan nomor UU, topik, atau pertanyaan sehari-hari.
        </Text>

        <View style={styles.voiceSection}>
          <TouchableOpacity
            style={[styles.micButton, isListening && styles.micButtonActive]}
            onPress={startListening}
            disabled={isListening}
            accessibilityRole="button"
            accessibilityLabel={
              isListening ? 'Mikrofon sedang mendengarkan' : 'Cari dengan suara'
            }
            accessibilityHint="Ucapkan pertanyaan hukum setelah mikrofon aktif"
            accessibilityState={{ disabled: isListening }}
          >
            <Ionicons
              name={isListening ? 'radio' : 'mic'}
              size={54}
              color={Colors.textBlack}
            />
          </TouchableOpacity>
          <Text style={styles.voiceLabel}>
            {isListening ? 'Sedang mendengarkan...' : 'Tekan untuk mencari dengan suara'}
          </Text>
          {!isSupported && (
            <Text style={styles.unsupportedText}>
              Voice search belum tersedia di browser ini. Pencarian keyboard
              tetap dapat digunakan.
            </Text>
          )}
        </View>

        <Text style={styles.inputLabel}>CARI DENGAN KEYBOARD</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={() => runSearch(query)}
            placeholder="Contoh: Apa hak tunanetra?"
            placeholderTextColor="#969184"
            returnKeyType="search"
            accessibilityLabel="Pertanyaan atau nomor undang-undang"
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => runSearch(query)}
            accessibilityRole="button"
            accessibilityLabel="Jalankan pencarian"
          >
            <Ionicons name="search" size={22} color={Colors.textBlack} />
          </TouchableOpacity>
        </View>

        <View
          style={styles.statusBox}
          accessibilityLiveRegion="polite"
          accessible
          accessibilityLabel={status}
        >
          <Ionicons name="information-circle-outline" size={19} color={Colors.primaryBright} />
          <Text style={styles.statusText}>{status}</Text>
        </View>

        {!searchedQuery && (
          <View style={styles.suggestions}>
            <Text style={styles.sectionTitle}>Contoh pencarian</Text>
            {SUGGESTIONS.map((suggestion) => (
              <TouchableOpacity
                key={suggestion}
                style={styles.suggestion}
                onPress={() => runSearch(suggestion)}
                accessibilityRole="button"
                accessibilityLabel={`Cari ${suggestion}`}
              >
                <Text style={styles.suggestionText}>{suggestion}</Text>
                <Ionicons name="arrow-forward" size={18} color={Colors.primaryBright} />
              </TouchableOpacity>
            ))}
          </View>
        )}

        {searchedQuery && (
          <View style={styles.results}>
            <Text style={styles.sectionTitle} accessibilityRole="header">
              Hasil untuk “{searchedQuery}”
            </Text>
            {results.map((material) => (
              <ResultCard
                key={material.id}
                material={material}
                expanded={expandedId === material.id}
                saved={isSaved(material.id)}
                onListen={() => listenToMaterial(material)}
                onToggleDetails={() =>
                  setExpandedId((current) =>
                    current === material.id ? null : material.id
                  )
                }
                onSave={() => saveMaterial(material)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgroundWarm,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 6,
    paddingBottom: 48,
  },
  title: {
    color: Colors.textWhite,
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    color: Colors.backgroundSand,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 26,
  },
  voiceSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  micButton: {
    width: 144,
    height: 144,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryBright,
    borderRadius: 72,
    borderWidth: 6,
    borderColor: Colors.surfaceWarm,
    marginBottom: 14,
  },
  micButtonActive: {
    borderColor: Colors.textWhite,
  },
  voiceLabel: {
    color: Colors.textWhite,
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
  unsupportedText: {
    color: Colors.backgroundSand,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
    maxWidth: 300,
    textAlign: 'center',
  },
  inputLabel: {
    color: Colors.primaryBright,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 9,
  },
  inputRow: {
    minHeight: 56,
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: Colors.borderLight,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 14,
  },
  input: {
    flex: 1,
    color: Colors.textWhite,
    fontSize: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchButton: {
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryBright,
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 9,
    backgroundColor: Colors.surfaceWarm,
    borderRadius: 10,
    padding: 12,
    marginBottom: 28,
  },
  statusText: {
    flex: 1,
    color: Colors.backgroundCream,
    fontSize: 13,
    lineHeight: 19,
  },
  suggestions: {
    gap: 10,
  },
  sectionTitle: {
    color: Colors.textWhite,
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 4,
  },
  suggestion: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    backgroundColor: Colors.surfaceWarm,
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  suggestionText: {
    flex: 1,
    color: Colors.textWhite,
    fontSize: 14,
    fontWeight: '600',
  },
  results: {
    gap: 14,
  },
  resultCard: {
    backgroundColor: Colors.surfaceWarm,
    borderWidth: 1.5,
    borderColor: Colors.borderLight,
    borderRadius: 14,
    padding: 16,
  },
  resultTopic: {
    color: Colors.primaryBright,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  resultTitle: {
    color: Colors.textWhite,
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 27,
    marginBottom: 9,
  },
  resultSummary: {
    color: Colors.backgroundCream,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
  },
  primaryAction: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: Colors.primaryBright,
    borderRadius: 10,
    marginBottom: 10,
  },
  primaryActionText: {
    color: Colors.textBlack,
    fontSize: 14,
    fontWeight: '800',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 10,
  },
  outlineAction: {
    minHeight: 48,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    borderWidth: 1.5,
    borderColor: Colors.borderLight,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  outlineActionText: {
    color: Colors.textWhite,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  savedAction: {
    backgroundColor: Colors.primaryBright,
    borderColor: Colors.primaryBright,
  },
  savedActionText: {
    color: Colors.textBlack,
  },
  materialDetails: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    marginTop: 16,
    paddingTop: 16,
  },
  materialHeading: {
    color: Colors.primaryBright,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 12,
  },
  article: {
    marginBottom: 16,
  },
  articleTitle: {
    color: Colors.textWhite,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 5,
  },
  articleContent: {
    color: Colors.backgroundSand,
    fontSize: 13,
    lineHeight: 20,
  },
});
