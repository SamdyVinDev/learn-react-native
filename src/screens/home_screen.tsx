import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import ProductCard from "../components/product_card";
import { test_data } from "../test_data";

const myData = [test_data, test_data, test_data, test_data, test_data];

const HomeScreen = () => {
  return (
    <FlatList
      data={myData}
      keyExtractor={(item, index) => item._id + index}
      renderItem={({ item }) => <ProductCard data={item} />}
      numColumns={2}
    />
  );
};

export default HomeScreen;
