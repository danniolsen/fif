import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListViewScreen, NewMatchScreen, ProfileScreen } from "../screens";

const Stack = createNativeStackNavigator();

const stackOptions = {
  headerShown: false
};

const ListOverviewStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListViewScreen"
        component={ListViewScreen}
        options={{ ...stackOptions }}
      />
      <Stack.Screen
        name="NewMatchScreen"
        component={NewMatchScreen}
        options={{ ...stackOptions }}
      />
    </Stack.Navigator>
  );
};

const NewMatchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewMatchScreen"
        component={NewMatchScreen}
        options={{ ...stackOptions }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ ...stackOptions }}
      />
    </Stack.Navigator>
  );
};

export { ListOverviewStack, NewMatchStack, ProfileStack };
