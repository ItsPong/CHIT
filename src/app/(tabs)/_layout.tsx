import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import Colors from '../../constants/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.surfaceDeep,
          borderTopColor: Colors.border,
          borderTopWidth: 0.5,
          height: 64,
          paddingBottom: 10,
          paddingTop: 6,
        },
        tabBarActiveTintColor: Colors.primaryBright,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
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
