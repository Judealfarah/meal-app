import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "#3c473dff" },
        headerTintColor: "#cbd7ccff",

        contentStyle: { backgroundColor: "#3c473dff" },

        tabBarStyle: { backgroundColor: "#3c473dff" },
        tabBarActiveTintColor: "#cbd7ccff",
        tabBarInactiveTintColor: "#a1a69dff",

        // Optional: add icons
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Favourites") iconName = "star";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={CategoriesScreen} />
      <Tabs.Screen name="Favourites" component={FavouritesScreen} />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#3c473dff" },
            headerTintColor: "#cbd7ccff",
            contentStyle: {
              backgroundColor: "#3c473dff",
            },
          }}
        >
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{ title: "All Categories" }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
