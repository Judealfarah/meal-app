import { useContext } from "react";
import MealsList from "../components/MealsList";
import { FavouritesContext } from "../store/context/favourties-context";
import { MEALS } from "../data/dummy-data";
import { Text, View } from "react-native";

function FavouritesScreen({ navigation }) {
  const favouriteMealsContext = useContext(FavouritesContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsContext.ids.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>
          You have no favourite meals yet.
        </Text>
      </View>
    );
  }

  return <MealsList data={favouriteMeals} navigation={navigation} />;
}

export default FavouritesScreen;
