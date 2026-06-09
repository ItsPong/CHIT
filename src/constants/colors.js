// ==============================================
// CHIT — Design System Colors
// Diambil langsung dari Figma Selection Colors
// Update: berdasarkan semua frame yang diunggah
// ==============================================
// Cara pakai: import Colors from './constants/colors'
// ==============================================

const Colors = {
  // ============================================
  // PRIMARY — Kuning CHIT
  // ============================================
  primary: "#FCD400", // kuning utama (dark theme) — tombol, ikon aktif
  primaryBright: "#FFD600", // kuning terang (warm theme) — versi lebih vivid
  primaryLight: "#FFE16D", // kuning muda — highlight, tint
  primaryGold: "#E9C400", // emas — variasi kuning
  primaryDark: "#6E5C00", // kuning gelap — teks di atas tombol kuning
  primaryDeep: "#705D00", // variasi kuning gelap
  primaryWarm: "#221B00", // kuning sangat gelap — background card warm

  // ============================================
  // BACKGROUND — Dark Theme (gambar 1-4)
  // Background utama: biru tua gelap
  // ============================================
  backgroundDark: "#0F1C2C", // layar utama — dark navy
  surfaceDark: "#1A2535", // card, app bar (estimasi dari mockup)
  surfaceVariant: "#222B3A", // elemen sedikit lebih terang

  // ============================================
  // BACKGROUND — Warm Theme (gambar 5-6)
  // Background utama: coklat tua hangat
  // ============================================
  backgroundWarm: "#161309", // layar utama — hitam kecoklatan
  backgroundBrown: "#231F14", // variasi gelap
  surfaceWarm: "#272418", // card/surface warm
  surfaceDeep: "#2E2A1E", // lebih gelap lagi
  backgroundCream: "#EAE2CF", // krem hangat — background terang
  backgroundSand: "#D0C6AB", // pasir/tan — surface terang

  // ============================================
  // BACKGROUND — Shared
  // ============================================
  backgroundLight: "#F8F9FA", // putih hangat — halaman terang

  // ============================================
  // TEXT
  // ============================================
  textWhite: "#FFFFFF", // teks utama di dark background
  textBlack: "#000000", // teks di atas tombol kuning
  textMuted: "#BAC8DC", // teks muted — biru abu (dark theme)
  textSecondary: "#778598", // teks sekunder — abu lebih gelap
  textSubtle: "#C4C8CC", // teks halus — sangat muted
  textDark: "#161309", // teks gelap (warm theme)

  // ============================================
  // BORDER & DIVIDER
  // ============================================
  border: "#44474C", // border/garis pemisah
  borderLight: "#74777D", // border lebih terang
  borderSubtle: "rgba(255, 255, 255, 0.2)", // border sangat halus

  // ============================================
  // NAVIGASI BAWAH
  // ============================================
  navActive: "#FCD400", // tab aktif (kuning)
  navInactive: "#778598", // tab tidak aktif (abu)

  // ============================================
  // STATUS
  // ============================================
  success: "#22C55E", // berhasil, konfirmasi
  error: "#EF4444", // error, gagal
  warning: "#F59E0B", // peringatan
  info: "#3B82F6", // informasi

  // ============================================
  // OVERLAY & TRANSPARAN
  // ============================================
  overlay: "rgba(0, 0, 0, 0.7)", // background modal/dialog
  overlayLight: "rgba(0, 0, 0, 0.4)", // overlay lebih ringan
};

// ============================================
// TEMA SIAP PAKAI
// Pilih satu tema untuk dipakai di app kamu
// ============================================

export const DarkTheme = {
  background: Colors.backgroundDark, // #0F1C2C
  surface: Colors.surfaceDark, // #1A2535
  primary: Colors.primary, // #FCD400
  textPrimary: Colors.textWhite, // #FFFFFF
  textSecondary: Colors.textMuted, // #BAC8DC
  border: Colors.border, // #44474C
};

export const WarmTheme = {
  background: Colors.backgroundWarm, // #161309
  surface: Colors.surfaceWarm, // #272418
  primary: Colors.primaryBright, // #FFD600
  textPrimary: Colors.textWhite, // #FFFFFF
  textSecondary: Colors.textSecondary, // #778598
  border: Colors.borderLight, // #74777D
};

export default Colors;
