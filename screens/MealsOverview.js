import MealsList from "../components/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";

function MealsOverview({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList data={displayedMeals} navigation={navigation} />;
}

export default MealsOverview;
