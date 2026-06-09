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

function SavedItem({ title, subtitle, onPlay }) {
  return (
    <View
      style={styles.savedItem}
      accessible={true}
      accessibilityLabel={`${title}. ${subtitle}.`}
    >
      <View style={styles.savedText}>
        <Text style={styles.savedTitle}>{title}</Text>
        <Text style={styles.savedSubtitle}>{subtitle}</Text>
      </View>
      <TouchableOpacity
        style={styles.playButton}
        onPress={onPlay}
        accessibilityRole="button"
        accessibilityLabel={`Putar ${title}, tombol`}
      >
        <Ionicons name="play" size={22} color={Colors.textBlack} />
      </TouchableOpacity>
    </View>
  );
}

function TrendingItem({ rank, title, subtitle, trending }) {
  return (
    <View
      style={styles.trendingItem}
      accessible={true}
      accessibilityLabel={`Peringkat ${rank}. ${title}. ${subtitle}${trending ? ". Trending." : ""}`}
    >
      <Text style={styles.trendingRank}>{rank}</Text>
      <View style={styles.trendingText}>
        <Text style={styles.trendingTitle}>{title}</Text>
        <Text style={styles.trendingSubtitle}>{subtitle}</Text>
      </View>
      {trending && (
        <Ionicons name="trending-up" size={20} color={Colors.primaryBright} />
      )}
    </View>
  );
}

export default function KoleksikuScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.backgroundWarm}
      />

      <View style={styles.header}>
        <View style={styles.headerDot} />
        <Text style={styles.headerTitle} accessibilityRole="header">
          CHIT
        </Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle} accessibilityRole="header">
          TERSIMPAN
        </Text>
        <SavedItem
          title="UUD 1945 - Pasal 1"
          subtitle="Kedaulatan Negara"
        />
        <View style={styles.divider} />
        <SavedItem
          title="UU No. 1 Tahun 2024"
          subtitle="Informasi dan Transaksi Elektronik"
        />

        <Text style={[styles.sectionTitle, styles.sectionTitleSpaced]} accessibilityRole="header">
          PALING SERING DICARI
        </Text>
        <TrendingItem rank="01" title="Hukum Pidana" subtitle="1.2k pencarian hari ini" />
        <TrendingItem rank="02" title="Hak Cipta AI" subtitle="842 pencarian hari ini" />
        <TrendingItem
          rank="03"
          title="Peraturan Ketenagakerjaan 2024"
          subtitle="Trending di sektor korporasi"
          trending
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.backgroundWarm },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 16,
  },
  headerDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primaryBright,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.textWhite,
    letterSpacing: 1.5,
  },

  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: Colors.primaryBright,
    letterSpacing: 1,
    marginBottom: 8,
  },
  sectionTitleSpaced: {
    marginTop: 36,
    marginBottom: 16,
  },

  savedItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    gap: 12,
  },
  savedText: { flex: 1 },
  savedTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: Colors.textWhite,
    marginBottom: 4,
  },
  savedSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  playButton: {
    width: 52,
    height: 52,
    backgroundColor: Colors.primaryBright,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
  },

  trendingItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surfaceWarm,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 16,
  },
  trendingRank: {
    fontSize: 30,
    fontWeight: "800",
    color: Colors.textSecondary,
    width: 44,
    flexShrink: 0,
  },
  trendingText: { flex: 1 },
  trendingTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.textWhite,
    marginBottom: 4,
  },
  trendingSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
});
