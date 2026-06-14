import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
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
import { speak } from '@/services/speech';

const PAGE_INTRO =
  'Selamat datang di CHIT. CHIT adalah aplikasi informasi hukum yang membantu pengguna tunanetra mencari, mendengarkan, dan menyimpan materi hukum dengan lebih mudah.';

type FeatureItemProps = {
  icon: 'volume-high-outline' | 'search-outline';
  title: string;
  description: string;
};

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <View
      style={styles.featureCard}
      accessible
      accessibilityLabel={`${title}. ${description}`}
    >
      <View style={styles.featureIcon}>
        <Ionicons name={icon} size={24} color={Colors.textBlack} />
      </View>
      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    </View>
  );
}

export default function BerandaScreen() {
  const router = useRouter();

  const openSearch = () => {
    speak('Membuka halaman pencarian hukum.');
    router.push('/cari');
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
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>INFORMASI HUKUM INKLUSIF</Text>
          <Text style={styles.title} accessibilityRole="header">
            Selamat datang di CHIT
          </Text>
          <Text style={styles.description}>
            CHIT adalah aplikasi informasi hukum yang membantu pengguna
            tunanetra mencari, mendengarkan, dan menyimpan materi hukum dengan
            lebih mudah.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={openSearch}
          accessibilityRole="button"
          accessibilityLabel="Cari informasi hukum"
          accessibilityHint="Membuka halaman pencarian hukum"
        >
          <Ionicons name="search" size={22} color={Colors.textBlack} />
          <Text style={styles.primaryButtonText}>Cari Informasi Hukum</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => speak(PAGE_INTRO)}
          accessibilityRole="button"
          accessibilityLabel="Bacakan pengenalan CHIT"
        >
          <Ionicons name="volume-high-outline" size={21} color={Colors.textWhite} />
          <Text style={styles.secondaryButtonText}>Bacakan Halaman</Text>
        </TouchableOpacity>

        <View style={styles.features}>
          <Text style={styles.sectionTitle} accessibilityRole="header">
            Fitur CHIT
          </Text>

          <FeatureItem
            icon="volume-high-outline"
            title="Umpan Balik Suara"
            description="Memberikan informasi suara saat pengguna menjalankan tindakan penting."
          />
          <FeatureItem
            icon="search-outline"
            title="Pencarian Hukum yang Mudah"
            description="Membantu pengguna memahami hukum melalui pencarian teks, suara, dan materi yang dapat didengarkan."
          />
        </View>
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
    paddingTop: 8,
    paddingBottom: 40,
  },
  hero: {
    marginBottom: 28,
  },
  eyebrow: {
    color: Colors.primaryBright,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  title: {
    color: Colors.textWhite,
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 38,
    marginBottom: 14,
  },
  description: {
    color: Colors.backgroundCream,
    fontSize: 16,
    lineHeight: 26,
  },
  primaryButton: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: Colors.primaryBright,
    borderRadius: 14,
    marginBottom: 12,
    paddingHorizontal: 18,
  },
  primaryButtonText: {
    color: Colors.textBlack,
    fontSize: 16,
    fontWeight: '800',
  },
  secondaryButton: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1.5,
    borderColor: Colors.borderLight,
    borderRadius: 14,
    marginBottom: 38,
    paddingHorizontal: 18,
  },
  secondaryButtonText: {
    color: Colors.textWhite,
    fontSize: 15,
    fontWeight: '700',
  },
  features: {
    gap: 12,
  },
  sectionTitle: {
    color: Colors.primaryBright,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  featureCard: {
    flexDirection: 'row',
    gap: 14,
    backgroundColor: Colors.surfaceWarm,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
    borderRadius: 14,
    padding: 16,
  },
  featureIcon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryBright,
    borderRadius: 24,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    color: Colors.textWhite,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  featureDescription: {
    color: Colors.backgroundSand,
    fontSize: 14,
    lineHeight: 21,
  },
});
