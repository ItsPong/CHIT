import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Colors from "../constants/colors";

// -------------------------------------------
// Komponen kecil: satu fitur di "Kenapa CHIT?"
// -------------------------------------------
function FeatureItem({ title, desc }) {
  return (
    <View
      style={styles.featureItem}
      accessible={true}
      accessibilityLabel={`${title}. ${desc}`}
    >
      <View style={styles.featureDot} />
      <View style={styles.featureText}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDesc}>{desc}</Text>
      </View>
    </View>
  );
}

// -------------------------------------------
// Screen utama: Beranda
// -------------------------------------------
export default function BerandaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.backgroundWarm}
      />

      {/* ── Header ── */}
      <View style={styles.header} accessibilityRole="header">
        <View
          style={styles.logo}
          accessible={true}
          accessibilityLabel="Logo CHIT"
        >
          <Text style={styles.logoText}>C</Text>
        </View>
        <Text style={styles.headerTitle}>CHIT</Text>
      </View>

      {/* ── Konten scrollable ── */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle} accessibilityRole="header">
            Selamat Datang di CHIT
          </Text>
          <Text style={styles.heroSubtitle}>
            Akses Hukum yang Adil dan Setara untuk Semua Teman Netra.
          </Text>
        </View>

        {/* Kenapa CHIT? */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle} accessibilityRole="header">
            Kenapa CHIT?
          </Text>

          <FeatureItem
            title="Akses Suara Penuh"
            desc="Seluruh informasi hukum dibacakan dengan artikulasi jernih dan kecepatan yang dapat diatur."
          />
          <FeatureItem
            title="Kontrol Gesture"
            desc="Navigasi tanpa melihat dengan gestur usap dan ketuk yang dapat disesuaikan untuk aksesibilitas."
          />
          <FeatureItem
            title="Navigasi Mudah"
            desc="Struktur menu liner yang sederhana, memudahkan pencarian pasal hukum tanpa kebingungan."
          />
        </View>

        {/* Tombol CTA */}
        <TouchableOpacity
          style={styles.ctaButton}
          accessibilityRole="button"
          accessibilityLabel="Lanjutkan Mendengar, tombol. Ketuk dua kali untuk mengaktifkan."
        >
          <Text style={styles.ctaText}>Lanjutkan Mendengar</Text>
        </TouchableOpacity>

        {/* Undang-Undang Terbaru */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle} accessibilityRole="header">
            Undang-Undang Terbaru
          </Text>

          <TouchableOpacity
            style={styles.uuCard}
            accessibilityRole="button"
            accessibilityLabel="UUD 1945 - Pasal 1. Kedaulatan berada di tangan rakyat. Ketuk dua kali untuk membuka."
          >
            <View style={styles.uuCardInner}>
              <Text style={styles.uuCardTag}>UUD 1945</Text>
              <Text style={styles.uuCardTitle}>UUD 1945 - Pasal 1</Text>
              <Text style={styles.uuCardDesc}>
                Kedaulatan berada di tangan rakyat dan dilaksanakan menurut
                Undang-Undang Dasar.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.uuCard}
            accessibilityRole="button"
            accessibilityLabel="UU No. 1 Tahun 2024. Informasi dan Transaksi Elektronik. Ketuk dua kali untuk membuka."
          >
            <View style={styles.uuCardInner}>
              <Text style={styles.uuCardTag}>UU TERBARU</Text>
              <Text style={styles.uuCardTitle}>UU No. 1 Tahun 2024</Text>
              <Text style={styles.uuCardDesc}>
                Informasi dan Transaksi Elektronik — trending di waktu ini.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// -------------------------------------------
// Styles
// -------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWarm, // #161309
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 16,
    backgroundColor: Colors.backgroundWarm,
  },
  logo: {
    width: 28,
    height: 28,
    backgroundColor: Colors.primaryBright, // #FFD600
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: 13,
    fontWeight: "800",
    color: Colors.textBlack,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.textWhite,
    letterSpacing: 1.5,
  },

  // Scroll
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 40,
  },

  // Hero
  heroSection: { marginBottom: 36 },
  heroTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.textWhite,
    marginBottom: 12,
    lineHeight: 36,
  },
  heroSubtitle: {
    fontSize: 15,
    color: Colors.backgroundCream, // #EAE2CF
    lineHeight: 24,
  },

  // Section
  section: { marginBottom: 28 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.primaryBright, // #FFD600
    marginBottom: 16,
  },

  // Feature items
  featureItem: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 18,
  },
  featureDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primaryBright,
    marginTop: 5,
    flexShrink: 0,
  },
  featureText: { flex: 1 },
  featureTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.textWhite,
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 13,
    color: Colors.backgroundSand, // #D0C6AB
    lineHeight: 20,
  },

  // CTA Button
  ctaButton: {
    backgroundColor: Colors.primaryBright, // #FFD600
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 36,
  },
  ctaText: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.textBlack, // #000000
  },

  // UU Card
  uuCard: {
    backgroundColor: Colors.surfaceWarm, // #272418
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden",
  },
  uuCardInner: {
    padding: 16,
  },
  uuCardTag: {
    fontSize: 10,
    fontWeight: "700",
    color: Colors.primaryBright,
    letterSpacing: 1,
    marginBottom: 4,
  },
  uuCardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textWhite,
    marginBottom: 6,
  },
  uuCardDesc: {
    fontSize: 12,
    color: Colors.backgroundSand,
    lineHeight: 18,
  },
});
