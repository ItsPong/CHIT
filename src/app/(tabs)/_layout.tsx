import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Colors from '@/constants/colors';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const bottomPadding = Math.max(insets.bottom, 12);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: Colors.backgroundWarm,
        },
        tabBarStyle: {
          backgroundColor: Colors.surfaceDeep,
          borderTopColor: Colors.border,
          borderTopWidth: 1,
          height: 68 + bottomPadding,
          paddingBottom: bottomPadding,
          paddingTop: 10,
        },
        tabBarActiveTintColor: Colors.primaryBright,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarItemStyle: {
          minHeight: 56,
          paddingTop: 2,
        },
        tabBarIconStyle: {
          marginTop: 2,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          lineHeight: 14,
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          tabBarAccessibilityLabel: 'Beranda, tab navigasi',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cari"
        options={{
          title: 'Cari',
          tabBarAccessibilityLabel: 'Cari, tab navigasi',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="koleksiku"
        options={{
          title: 'Koleksiku',
          tabBarAccessibilityLabel: 'Koleksiku, tab navigasi',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'bookmark' : 'bookmark-outline'} size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bantuan"
        options={{
          title: 'Bantuan',
          tabBarAccessibilityLabel: 'Bantuan, tab navigasi',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'help-circle' : 'help-circle-outline'} size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
