import dados from "@/assets/constants/mock";
import { Header } from "@/components/header";
import { Item } from "@/components/item";
import { router } from "expo-router";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function List() {
  const voltar = () => {
    router.push("/");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView>
        <Header image={require("@/assets/images/escudo.png")} />
        <View>
          <TouchableOpacity onPress={voltar}>
            <Text style={s.backBtn}>❌</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={dados}
          renderItem={({ item }) => (
            <Item
              name={item.nome}
              image={item.imagem}
              season={item.Temporada}
            />
          )}
        ></FlatList>
      </SafeAreaView>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  backBtn: {
    position: "absolute",
    top: -200,
    fontSize: 40,
  },
});
