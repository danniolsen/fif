import { Text, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ListViewScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ListviewScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default ListViewScreen;
