import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import PwaServiceWorker from '@/components/PwaServiceWorker';
import Colors from '@/constants/colors';
import '@/global.css';

export default function RootLayout() {
  const { width } = useWindowDimensions();
  const showPhoneFrame = width >= 600;

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={[styles.canvas, showPhoneFrame && styles.desktopCanvas]}>
        <View style={[styles.appViewport, showPhoneFrame && styles.desktopViewport]}>
          <SafeAreaProvider>
            <StatusBar style="light" />
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
            </Stack>
            <PwaServiceWorker />
          </SafeAreaProvider>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  canvas: {
    flex: 1,
    backgroundColor: Colors.backgroundWarm,
  },
  desktopCanvas: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#E8E5DE',
  },
  appViewport: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.backgroundWarm,
    overflow: 'hidden',
  },
  desktopViewport: {
    maxWidth: 430,
    maxHeight: 900,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#C9C4B8',
    boxShadow: '0 24px 70px rgba(31, 29, 22, 0.22)',
  },
});
