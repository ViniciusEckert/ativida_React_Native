import { Header } from "@/components/header";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const visit = () => {
    router.push("/list");
  };

  const visit1 = () => {
    router.push("/apiList");
  };

  return (
    <SafeAreaView style={s.wrap}>
      <Header image={require("@/assets/images/camisa1.png")} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.body}>
          <Text style={s.title}>NAPOLI</Text>
          <Text style={s.price}>VERDADE</Text>
        </View>
        <View style={s.body2}>
          <Image
            style={s.shirt}
            source={require("../assets/images/escudo.png")}
          />
        </View>
        <View style={s.body2}>
          <TouchableOpacity style={s.btn} onPress={visit}>
            <Text style={s.btnText}>Compre ja</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.btn1} onPress={visit1}>
            <Text style={s.btnText}>compre denovo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  body: {
    backgroundColor: "#090909",
    gap: 25,
  },
  body2: {
    alignItems: "center",
    padding: 10,
  },
  btnText: {
    color: "#000000",
    fontSize: 22,
  },
  btn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    backgroundColor: "#8d7403",
    width: 200,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#090909",
    borderRadius: 999,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    padding: 20,
    color: "#ffffff",
  },
  price: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 30,
    paddingBottom: 15,
  },
  shirt: {
    width: 230,
    height: 230,
    borderRadius: 20,
  },
  btn1: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    backgroundColor: "#00c1cf",
    width: 200,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#090909",
    borderRadius: 999,
  },
});
