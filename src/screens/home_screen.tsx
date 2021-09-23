import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { data } from "../test_data";
import ProductCard from "../components/product_card";
import tw from "tailwind-react-native-classnames";

export default function HomeScreen() {
  const products = [data, data, data, data, data];
  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => item._id + index}
      renderItem={({ item, index }) => <ProductCard product={item} />}
      numColumns={2}
    />
  );
}
