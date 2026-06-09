import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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

function ContactCard({ category, name, iconName }) {
  return (
    <View style={styles.contactCard}>
      <View style={styles.contactHeader}>
        <View style={styles.contactHeaderLeft}>
          <Text style={styles.contactCategory}>{category}</Text>
          <Text style={styles.contactName}>{name}</Text>
        </View>
        <Ionicons
          name={iconName}
          size={24}
          color={Colors.primaryBright}
          accessibilityLabel={`${category} ikon`}
        />
      </View>
      <TouchableOpacity
        style={styles.callButton}
        accessibilityRole="button"
        accessibilityLabel={`Hubungi ${name}, tombol`}
      >
        <Ionicons name="call" size={16} color={Colors.textWhite} />
        <Text style={styles.callButtonText}>Hubungi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.saveButton}
        accessibilityRole="button"
        accessibilityLabel={`Simpan kontak ${name}, tombol`}
      >
        <Ionicons name="bookmark-outline" size={16} color={TEXT_PRIMARY} />
        <Text style={styles.saveButtonText}>Simpan Kontak</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function BantuanScreen() {
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
        <View style={styles.titleSection}>
          <Text style={styles.pageTitle} accessibilityRole="header">
            BANTUAN HUKUM
          </Text>
          <View style={styles.titleUnderline} />
        </View>

        <View
          style={styles.quickGuideCard}
          accessible={true}
          accessibilityLabel="Panduan Cepat. Jika mengalami diskriminasi atau hambatan aksesibilitas di ruang publik, Anda memiliki hak untuk mendapatkan pendampingan hukum secara gratis."
        >
          <View style={styles.quickGuideIcon}>
            <Ionicons name="hammer" size={36} color={TEXT_PRIMARY} />
          </View>
          <Text style={styles.quickGuideTitle}>Panduan Cepat</Text>
          <Text style={styles.quickGuideDesc}>
            Jika mengalami diskriminasi atau hambatan aksesibilitas di ruang
            publik, Anda memiliki hak untuk mendapatkan pendampingan hukum
            secara gratis.
          </Text>
        </View>

        <Text style={styles.sectionTitle} accessibilityRole="header">
          Kontak Darurat &{"\n"}Pendampingan
        </Text>

        <ContactCard
          category="INSTITUSI"
          name="Lembaga Bantuan Hukum"
          iconName="shield-checkmark"
        />
        <ContactCard
          category="NEGARA"
          name="Komnas HAM"
          iconName="shield"
        />
        <ContactCard
          category="PEMERINTAH"
          name="Dinas Sosial"
          iconName="people"
        />

        <TouchableOpacity
          style={styles.accessibilityRow}
          accessibilityRole="button"
          accessibilityLabel="Pengaturan Aksesibilitas, tombol"
        >
          <Ionicons name="accessibility" size={28} color={TEXT_PRIMARY} />
          <Text style={styles.accessibilityTitle}>
            Pengaturan{"\n"}Aksesibilitas
          </Text>
          <Ionicons name="chevron-forward" size={20} color={TEXT_SECONDARY} />
        </TouchableOpacity>
        <Text style={styles.accessibilityDesc}>
          Sesuaikan kontras, ukuran teks, dan pembaca layar untuk kenyamanan
          Anda.
        </Text>
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
    paddingTop: 12,
    paddingBottom: 40,
  },

  titleSection: { marginBottom: 24 },
  pageTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: TEXT_PRIMARY,
    marginBottom: 10,
  },
  titleUnderline: {
    width: 60,
    height: 4,
    backgroundColor: Colors.primaryBright,
    borderRadius: 2,
  },

  quickGuideCard: {
    backgroundColor: SURFACE,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 28,
    borderWidth: 1,
    borderColor: BORDER,
  },
  quickGuideIcon: {
    width: 72,
    height: 72,
    backgroundColor: BORDER,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  quickGuideTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    marginBottom: 10,
  },
  quickGuideDesc: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    lineHeight: 22,
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    marginBottom: 16,
    lineHeight: 26,
  },

  contactCard: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  contactHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 14,
  },
  contactHeaderLeft: { flex: 1, marginRight: 8 },
  contactCategory: {
    fontSize: 11,
    fontWeight: "700",
    color: LABEL_COLOR,
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    lineHeight: 24,
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#000000",
    borderRadius: 8,
    paddingVertical: 14,
    marginBottom: 8,
  },
  callButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textWhite,
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1.5,
    borderColor: TEXT_PRIMARY,
    borderRadius: 8,
    paddingVertical: 14,
  },
  saveButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: TEXT_PRIMARY,
  },

  accessibilityRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    marginTop: 8,
    gap: 12,
  },
  accessibilityTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    lineHeight: 22,
  },
  accessibilityDesc: {
    fontSize: 13,
    color: TEXT_SECONDARY,
    lineHeight: 20,
    paddingBottom: 8,
  },
});
