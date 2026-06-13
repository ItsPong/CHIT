import { Ionicons } from '@expo/vector-icons';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AppHeader from '@/components/AppHeader';
import Colors from '@/constants/colors';
import { legalMaterials, type LegalMaterial } from '@/data/legalMaterials';
import useCollection from '@/hooks/useCollection';
import { speak } from '@/services/speech';

type SavedItemProps = {
  material: LegalMaterial;
  onListen: () => void;
  onRemove: () => void;
};

function SavedItem({ material, onListen, onRemove }: SavedItemProps) {
  return (
    <View style={styles.savedCard}>
      <Text style={styles.savedTopic}>{material.topic.toUpperCase()}</Text>
      <Text style={styles.savedTitle}>{material.shortTitle}</Text>
      <Text style={styles.savedSummary}>{material.summary}</Text>
      <View style={styles.actionRow}>
        <TouchableOpacity
          style={styles.listenButton}
          onPress={onListen}
          accessibilityRole="button"
          accessibilityLabel={`Dengarkan ${material.shortTitle}`}
        >
          <Ionicons name="play" size={19} color={Colors.textBlack} />
          <Text style={styles.listenButtonText}>Dengarkan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={onRemove}
          accessibilityRole="button"
          accessibilityLabel={`Hapus ${material.shortTitle} dari koleksi`}
        >
          <Ionicons name="trash-outline" size={19} color={Colors.textWhite} />
          <Text style={styles.removeButtonText}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function KoleksikuScreen() {
  const { savedMaterials, remove } = useCollection();

  const removeMaterial = (material: LegalMaterial) => {
    remove(material.id);
    speak(`${material.shortTitle} dihapus dari koleksi.`);
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
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title} accessibilityRole="header">
          Koleksiku
        </Text>
        <Text style={styles.subtitle}>
          Materi hukum yang Anda simpan tersedia di sini.
        </Text>

        {savedMaterials.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons
              name="bookmark-outline"
              size={42}
              color={Colors.primaryBright}
            />
            <Text style={styles.emptyTitle}>Belum ada materi tersimpan</Text>
            <Text style={styles.emptyDescription}>
              Gunakan tombol Simpan pada hasil pencarian agar materi mudah
              ditemukan kembali.
            </Text>
          </View>
        ) : (
          <View style={styles.savedList}>
            {savedMaterials.map((material) => (
              <SavedItem
                key={material.id}
                material={material}
                onListen={() =>
                  speak(`${material.title}. ${material.summary}`)
                }
                onRemove={() => removeMaterial(material)}
              />
            ))}
          </View>
        )}

        <Text style={styles.sectionTitle} accessibilityRole="header">
          Materi yang sering dicari
        </Text>
        {legalMaterials.slice(0, 3).map((material, index) => (
          <View
            key={material.id}
            style={styles.popularItem}
            accessible
            accessibilityLabel={`${index + 1}. ${material.shortTitle}. ${material.topic}`}
          >
            <Text style={styles.rank}>0{index + 1}</Text>
            <View style={styles.popularContent}>
              <Text style={styles.popularTitle}>{material.shortTitle}</Text>
              <Text style={styles.popularTopic}>{material.topic}</Text>
            </View>
          </View>
        ))}
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
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    color: Colors.backgroundSand,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 26,
  },
  savedList: {
    gap: 14,
    marginBottom: 36,
  },
  savedCard: {
    backgroundColor: Colors.surfaceWarm,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderRadius: 14,
    padding: 16,
  },
  savedTopic: {
    color: Colors.primaryBright,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.1,
    marginBottom: 5,
  },
  savedTitle: {
    color: Colors.textWhite,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 7,
  },
  savedSummary: {
    color: Colors.backgroundSand,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 14,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 10,
  },
  listenButton: {
    minHeight: 48,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    backgroundColor: Colors.primaryBright,
    borderRadius: 10,
  },
  listenButtonText: {
    color: Colors.textBlack,
    fontSize: 13,
    fontWeight: '800',
  },
  removeButton: {
    minHeight: 48,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    borderWidth: 1.5,
    borderColor: Colors.borderLight,
    borderRadius: 10,
  },
  removeButtonText: {
    color: Colors.textWhite,
    fontSize: 13,
    fontWeight: '700',
  },
  emptyState: {
    alignItems: 'center',
    backgroundColor: Colors.surfaceWarm,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    padding: 24,
    marginBottom: 36,
  },
  emptyTitle: {
    color: Colors.textWhite,
    fontSize: 17,
    fontWeight: '800',
    marginTop: 12,
    marginBottom: 7,
  },
  emptyDescription: {
    color: Colors.backgroundSand,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    color: Colors.primaryBright,
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 14,
  },
  popularItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: Colors.surfaceWarm,
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  rank: {
    width: 42,
    color: Colors.textSecondary,
    fontSize: 26,
    fontWeight: '800',
  },
  popularContent: {
    flex: 1,
  },
  popularTitle: {
    color: Colors.textWhite,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 3,
  },
  popularTopic: {
    color: Colors.textSecondary,
    fontSize: 12,
  },
});
