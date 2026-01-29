import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export const Item = ({
  name,
  season,
  image,
}: {
  name: string;
  season: string;
  image: string;
}) => {
  return (
    <View style={s.itemList}>
      <Image style={s.imageStyle} source={image} />
      <Text style={s.txt}>{name}</Text>
      <Text style={s.txt2}>{season}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  itemList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#4186a4d4",
    margin: 10,
    height: 150,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  imageStyle: {
    width: 120,
    height: 120,
    borderRadius: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 18,
  },
  txt2: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
