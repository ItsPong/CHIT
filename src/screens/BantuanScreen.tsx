import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
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

type Contact = {
  category: string;
  name: string;
  description: string;
  icon: ComponentProps<typeof Ionicons>['name'];
};

const CONTACTS: Contact[] = [
  {
    category: 'PENDAMPINGAN HUKUM',
    name: 'Lembaga Bantuan Hukum',
    description:
      'Pendampingan dan konsultasi hukum. Kontak resmi akan disesuaikan berdasarkan wilayah pengguna.',
    icon: 'shield-checkmark-outline',
  },
  {
    category: 'HAK ASASI MANUSIA',
    name: 'Komnas HAM',
    description:
      'Pengaduan dugaan pelanggaran HAM dan tindakan diskriminatif. Kontak resmi akan dihubungkan pada tahap integrasi data.',
    icon: 'people-outline',
  },
  {
    category: 'LAYANAN PEMERINTAH',
    name: 'Dinas Sosial',
    description:
      'Informasi layanan sosial dan rujukan bantuan berdasarkan domisili pengguna.',
    icon: 'call-outline',
  },
];

function ContactCard({ contact }: { contact: Contact }) {
  const openContactInformation = () => {
    speak(
      `Informasi kontak ${contact.name} akan tersedia setelah data resmi wilayah diintegrasikan.`
    );
  };

  return (
    <View style={styles.contactCard}>
      <View style={styles.contactHeader}>
        <View style={styles.icon}>
          <Ionicons name={contact.icon} size={25} color={Colors.textBlack} />
        </View>
        <View style={styles.contactHeading}>
          <Text style={styles.category}>{contact.category}</Text>
          <Text style={styles.contactName}>{contact.name}</Text>
        </View>
      </View>
      <Text style={styles.contactDescription}>{contact.description}</Text>
      <TouchableOpacity
        style={styles.callButton}
        onPress={openContactInformation}
        accessibilityRole="button"
        accessibilityLabel={`Informasi kontak ${contact.name}`}
      >
        <Ionicons name="information-circle" size={19} color={Colors.textBlack} />
        <Text style={styles.callButtonText}>Informasi Kontak</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function BantuanScreen() {
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
          Kontak Darurat dan Pendampingan
        </Text>
        <Text style={styles.subtitle}>
          Pilih lembaga yang sesuai untuk mendapatkan informasi, pengaduan,
          atau pendampingan hukum.
        </Text>

        <View style={styles.notice} accessible>
          <Ionicons
            name="information-circle-outline"
            size={24}
            color={Colors.primaryBright}
          />
          <Text style={styles.noticeText}>
            Jika berada dalam keadaan darurat, hubungi layanan darurat setempat
            atau minta bantuan orang terdekat.
          </Text>
        </View>

        <View style={styles.contactList}>
          {CONTACTS.map((contact) => (
            <ContactCard key={contact.name} contact={contact} />
          ))}
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
    paddingTop: 6,
    paddingBottom: 48,
  },
  title: {
    color: Colors.textWhite,
    fontSize: 29,
    fontWeight: '800',
    lineHeight: 37,
    marginBottom: 10,
  },
  subtitle: {
    color: Colors.backgroundSand,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 22,
  },
  notice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: Colors.surfaceWarm,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primaryBright,
    borderRadius: 10,
    padding: 14,
    marginBottom: 24,
  },
  noticeText: {
    flex: 1,
    color: Colors.backgroundCream,
    fontSize: 13,
    lineHeight: 20,
  },
  contactList: {
    gap: 14,
  },
  contactCard: {
    backgroundColor: Colors.textWhite,
    borderRadius: 14,
    padding: 16,
  },
  contactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  icon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryBright,
    borderRadius: 24,
  },
  contactHeading: {
    flex: 1,
  },
  category: {
    color: Colors.primaryDeep,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 3,
  },
  contactName: {
    color: Colors.textBlack,
    fontSize: 18,
    fontWeight: '800',
  },
  contactDescription: {
    color: '#4D4A43',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 9,
  },
  callButton: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: Colors.primaryBright,
    borderRadius: 10,
  },
  callButtonText: {
    color: Colors.textBlack,
    fontSize: 14,
    fontWeight: '800',
  },
});
