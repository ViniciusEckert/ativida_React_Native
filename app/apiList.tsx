import { Header } from "@/components/header";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function List1() {
  const voltar = () => {
    router.push("/");
  };
  return (
    <SafeAreaView>
      <Header image={require("@/assets/images/escudo.png")} />
      <View>
        <TouchableOpacity onPress={voltar}>
          <Text style={s.backBtn}>❌</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  backBtn: {
    fontSize: 40,
    position: "absolute",
    top: -200,
  },
});
