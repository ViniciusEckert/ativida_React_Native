import dados from "@/assets/constants/mock1";
import { Header } from "@/components/header";
import { ItemG } from "@/components/item";
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

export default function List1() {
  const voltar = () => {
    router.push("/");
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView>
        <Header image={require("@/assets/images/escudoG.png")} />
        <View>
          <TouchableOpacity onPress={voltar}>
            <Text style={s.backBtn}>❌</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={dados}
          renderItem={({ item }) => (
            <ItemG
              camisa={item.camisa}
              imagem={item.imagem}
              temporada={item.Temporada}
            />
          )}
        ></FlatList>
      </SafeAreaView>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  backBtn: {
    fontSize: 40,
    position: "absolute",
    top: -200,
  },
});
