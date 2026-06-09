import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/colors";

const BG = "#FFFFFF";
const SURFACE = "#F2F0EC";
const BORDER = "#E0DDD6";
const TEXT_PRIMARY = "#000000";
const TEXT_SECONDARY = "#666666";
const LABEL_COLOR = "#8A7000";

function SuggestionCard({ category, question, onPress }) {
  return (
    <TouchableOpacity
      style={styles.suggestionCard}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${category}. ${question}. Ketuk dua kali untuk mencari.`}
    >
      <Text style={styles.suggestionCategory}>{category}</Text>
      <Text style={styles.suggestionQuestion}>"{question}"</Text>
    </TouchableOpacity>
  );
}

export default function CariScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={BG} />

      <View style={styles.header}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Kembali, tombol"
        >
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.headerTitle} accessibilityRole="header">
          CHIT
        </Text>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Profil, tombol"
        >
          <Ionicons name="person-circle-outline" size={28} color={TEXT_PRIMARY} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heroTitle} accessibilityRole="header">
          Cari Hukum
        </Text>
        <Text style={styles.heroSubtitle}>
          Gunakan suara atau teks untuk menemukan keadilan.
        </Text>

        <View style={styles.micWrapper}>
          <TouchableOpacity
            style={styles.micButton}
            accessibilityRole="button"
            accessibilityLabel="Cari dengan suara, tombol"
          >
            <Ionicons name="mic" size={52} color={Colors.textWhite} />
          </TouchableOpacity>
        </View>

        <Text style={styles.inputLabel}>INPUT PERTANYAAN</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.textInput}
            placeholder="Ketik atau ucapkan pertanyaan hukum"
            placeholderTextColor={TEXT_SECONDARY}
            accessibilityLabel="Input pertanyaan hukum, bidang teks"
          />
          <TouchableOpacity
            style={styles.searchButton}
            accessibilityRole="button"
            accessibilityLabel="Cari, tombol"
          >
            <Ionicons name="search" size={20} color={Colors.textBlack} />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle} accessibilityRole="header">
          Mungkin Anda Mencari:
        </Text>
        <SuggestionCard
          category="FASILITAS UMUM"
          question="Apa hak tunanetra di fasilitas umum?"
        />
        <SuggestionCard
          category="LAPORAN"
          question="Bagaimana cara melapor diskriminasi?"
        />

        <View style={styles.aiCard}>
          <View
            style={styles.aiHeader}
            accessible={true}
            accessibilityLabel="Apa hak tunanetra, Hasil Ringkasan AI"
          >
            <View style={styles.aiIcon}>
              <Ionicons name="hammer" size={20} color={Colors.textWhite} />
            </View>
            <View style={styles.aiTitleGroup}>
              <Text style={styles.aiQuestion}>Apa hak tunanetra?</Text>
              <Text style={styles.aiSubtitle}>Hasil Ringkasan AI</Text>
            </View>
          </View>
          <Text style={styles.aiBody}>
            Berdasarkan{" "}
            <Text style={styles.aiBold}>
              UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas
            </Text>
            , hak tunanetra mencakup aksesibilitas penuh terhadap infrastruktur
            publik, informasi dalam format braille atau audio, serta perlindungan
            dari segala bentuk diskriminasi dalam pelayanan publik dan pekerjaan.
          </Text>
          <TouchableOpacity
            style={styles.aiButtonPrimary}
            accessibilityRole="button"
            accessibilityLabel="Dengarkan jawaban, tombol"
          >
            <Ionicons name="volume-medium" size={16} color={Colors.textWhite} />
            <Text style={styles.aiButtonPrimaryText}>DENGARKAN JAWABAN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.aiButtonOutline}
            accessibilityRole="button"
            accessibilityLabel="Lihat materi, tombol"
          >
            <Ionicons name="book-outline" size={16} color={TEXT_PRIMARY} />
            <Text style={styles.aiButtonOutlineText}>LIHAT MATERI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.aiButtonOutline, { marginBottom: 0 }]}
            accessibilityRole="button"
            accessibilityLabel="Simpan, tombol"
          >
            <Ionicons name="bookmark-outline" size={16} color={TEXT_PRIMARY} />
            <Text style={styles.aiButtonOutlineText}>SIMPAN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BG },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 12,
    backgroundColor: BG,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    letterSpacing: 1.5,
  },

  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 40,
  },

  heroTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: TEXT_PRIMARY,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 15,
    color: TEXT_SECONDARY,
    lineHeight: 22,
    marginBottom: 28,
  },

  micWrapper: {
    alignItems: "center",
    marginBottom: 28,
  },
  micButton: {
    width: 160,
    height: 160,
    backgroundColor: "#000000",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: Colors.primaryBright,
  },

  inputLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 8,
    marginBottom: 24,
    overflow: "hidden",
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 14,
    color: TEXT_PRIMARY,
  },
  searchButton: {
    backgroundColor: Colors.primaryBright,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    marginBottom: 14,
  },
  suggestionCard: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  suggestionCategory: {
    fontSize: 11,
    fontWeight: "700",
    color: LABEL_COLOR,
    letterSpacing: 1,
    marginBottom: 6,
  },
  suggestionQuestion: {
    fontSize: 16,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    lineHeight: 24,
  },

  aiCard: {
    borderWidth: 2,
    borderColor: Colors.primaryBright,
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  aiHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 12,
  },
  aiIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  aiTitleGroup: { flex: 1 },
  aiQuestion: {
    fontSize: 16,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    marginBottom: 2,
  },
  aiSubtitle: {
    fontSize: 12,
    color: TEXT_SECONDARY,
  },
  aiBody: {
    fontSize: 14,
    color: TEXT_PRIMARY,
    lineHeight: 22,
    marginBottom: 16,
  },
  aiBold: {
    fontWeight: "700",
  },
  aiButtonPrimary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#000000",
    borderRadius: 8,
    paddingVertical: 14,
    marginBottom: 10,
  },
  aiButtonPrimaryText: {
    fontSize: 13,
    fontWeight: "700",
    color: Colors.textWhite,
    letterSpacing: 0.5,
  },
  aiButtonOutline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1.5,
    borderColor: TEXT_PRIMARY,
    borderRadius: 8,
    paddingVertical: 14,
    marginBottom: 10,
  },
  aiButtonOutlineText: {
    fontSize: 13,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    letterSpacing: 0.5,
  },
});
