import { Header } from "@/components/header";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function List1() {
  return (
    <SafeAreaView>
      <Header image={require("@/assets/images/camisa.png")} />
      <View>
        <Text>Teste</Text>
      </View>
    </SafeAreaView>
  );
}
