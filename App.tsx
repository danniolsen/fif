import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MainNavigation from "./src/navigation/MainNavigation";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
