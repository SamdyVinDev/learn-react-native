import { Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { data } from "../test_data";
import tw from "tailwind-react-native-classnames";

export default function ProductCard({ product }: { product: typeof data }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        tw`flex-1 bg-gray-100  shadow shadow-md m-1`,
        { borderRadius: 10 },
      ]}
    >
      {product.discount > 0 && (
        <Text
          style={[
            tw`bg-red-500 text-white px-5 py-1 font-bold`,
            {
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 1,
              borderBottomLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          ]}
        >
          {product.discount}%
        </Text>
      )}
      <Image
        style={{
          aspectRatio: 1 / 1,
          width: "100%",
          resizeMode: "cover",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={{ uri: product.images[0].uri }}
      />
      <View style={tw`p-2`}>
        <Text style={[tw`text-lg`, { maxHeight: 23 }]}>{product.name}</Text>
        <Text style={[tw`text-xs`, { maxHeight: 32 }]}>{product.desc}</Text>
        <Text style={[tw`text-xl`]}>
          {product.min_price}$ - {product.max_price}$
        </Text>
        <Text style={tw`text-sm text-gray-500`}>
          {product.orders.length} ordered
        </Text>
      </View>
    </TouchableOpacity>
  );
}
