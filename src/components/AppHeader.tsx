import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Colors from '@/constants/colors';

type AppHeaderProps = {
  variant?: 'dark' | 'light';
};

export default function AppHeader({ variant = 'dark' }: AppHeaderProps) {
  const insets = useSafeAreaInsets();
  const isLight = variant === 'light';

  return (
    <View
      style={[
        styles.header,
        {
          paddingTop: Math.max(insets.top, 24),
          backgroundColor: isLight ? Colors.textWhite : Colors.backgroundWarm,
        },
      ]}
    >
      <Text
        style={[styles.title, isLight && styles.titleLight]}
        accessibilityRole="header"
      >
        CHIT
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  title: {
    color: Colors.textWhite,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1.8,
  },
  titleLight: {
    color: Colors.textDark,
  },
});
