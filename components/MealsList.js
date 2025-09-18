import MealItem from "../components/MealItem";
import { View, StyleSheet, FlatList } from "react-native";

function MealsList({ data, navigation }) {
  function renderMealItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealDetailsScreen", {
        mealId: itemData.item.id,
      });
    }

    return <MealItem item={itemData.item} onPress={pressHandler} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
