import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { test_data } from "../test_data";
import tw from "tailwind-react-native-classnames";

const ProductCard = ({ data }: { data: typeof test_data }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[tw`shadow-md bg-gray-200 m-2 flex-1`, { borderRadius: 10 }]}
    >
      <Image
        style={{
          aspectRatio: 1 / 1,
          resizeMode: "cover",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={{ uri: data.options[0].image.uri }}
      />
      <View style={tw`p-4`}>
        <Text style={tw`text-lg`} numberOfLines={1} ellipsizeMode="tail">
          {data.name}
        </Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={[tw`text-sm`]}>
          {data.desc}
        </Text>
        <Text style={[tw`text-red-600`, { fontSize: 23 }]}>
          {data.min_price}$ - {data.max_price}$
        </Text>
        <Text style={[tw`text-gray-500 text-sm`]}>
          {data.orders.length} ordered
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Alert.alert("Added to cart")}
        >
          <View
            style={[tw`bg-blue-500 p-2 rounded mt-2 ml-auto`, { width: 100 }]}
          >
            <Text style={tw` text-center text-white`}>Add to cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
