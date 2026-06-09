import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Colors from "./src/constants/colors";
import BantuanScreen from "./src/screens/BantuanScreen";
import BerandaScreen from "./src/screens/BerandaScreen";
import CariScreen from "./src/screens/CariScreen";
import KoleksikuScreen from "./src/screens/KoleksikuScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="light" backgroundColor={Colors.backgroundWarm} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.surfaceDeep, // #2E2A1E
            borderTopColor: Colors.border,
            borderTopWidth: 0.5,
            height: 64,
            paddingBottom: 10,
            paddingTop: 6,
          },
          tabBarActiveTintColor: Colors.primaryBright, // #FFD600
          tabBarInactiveTintColor: Colors.textSecondary, // #778598
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "500",
          },
          tabBarIcon: ({ focused, color }) => {
            const icons = {
              Beranda: focused ? "home" : "home-outline",
              Cari: focused ? "search" : "search-outline",
              Koleksiku: focused ? "bookmark" : "bookmark-outline",
              Bantuan: focused ? "help-circle" : "help-circle-outline",
            };
            return (
              <Ionicons name={icons[route.name]} size={22} color={color} />
            );
          },
        })}
      >
        <Tab.Screen
          name="Beranda"
          component={BerandaScreen}
          options={{ tabBarAccessibilityLabel: "Beranda, tab navigasi" }}
        />
        <Tab.Screen
          name="Cari"
          component={CariScreen}
          options={{ tabBarAccessibilityLabel: "Cari, tab navigasi" }}
        />
        <Tab.Screen
          name="Koleksiku"
          component={KoleksikuScreen}
          options={{ tabBarAccessibilityLabel: "Koleksiku, tab navigasi" }}
        />
        <Tab.Screen
          name="Bantuan"
          component={BantuanScreen}
          options={{ tabBarAccessibilityLabel: "Bantuan, tab navigasi" }}
        />
        </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
