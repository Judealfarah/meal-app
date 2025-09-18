import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourties-context";

function MealDetailsScreen({ route, navigation }) {
  const favouriteMealsContext = useContext(FavouritesContext);

  const mealId = route.params.mealId;

  const meal = MEALS.find((item) => item.id === mealId);

  const mealIsFav = favouriteMealsContext.ids.includes(mealId);

  function handleSavePress() {
    if (mealIsFav) {
      favouriteMealsContext.removeFavourite(mealId);
    } else {
      favouriteMealsContext.addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((item) => item.id === mealId).title;

    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFav ? "star" : "star-outline"}
            color="white"
            onPress={handleSavePress}
          />
        );
      },
    });
  }, [mealId, navigation, handleSavePress]);

  return (
    <ScrollView style={styles.scrollView}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <View style={styles.details}>
        <Text style={styles.detailItem}>{meal.duration}m</Text>
        <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>
          {meal.affordability.toUpperCase()}
        </Text>
      </View>

      <View>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {meal.ingredients.map((i) => (
          <Text style={styles.sectionItem} key={i}>
            - {i}
          </Text>
        ))}
      </View>

      <View>
        <Text style={styles.sectionTitle}>Steps</Text>
        {meal.steps.map((i) => (
          <Text style={styles.sectionItem} key={i}>
            - {i}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 16,
    color: "white",
  },
  sectionTitle: {
    padding: 16,
    fontSize: 21,
    color: "white",
    fontWeight: "bold",
    borderTopWidth: 3,
    borderTopColor: "white",
    marginTop: 12,
  },
  sectionItem: {
    margin: 6,
    paddingHorizontal: 6,
    fontSize: 18,
    color: "white",
    fontFamily: "bold",
  },
  scrollView: {
    marginBottom: 36,
  },
});
