import { NavigationContainer } from "@react-navigation/native";
import {
  ListOverviewStack,
  NewMatchStack,
  ProfileStack
} from "./Stacknavigation";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const MainNavigation = () => {
  const tabBarOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarLabel: () => null
  };

  const tabOptions = {
    tabBarIconStyle: { marginTop: 10 },
    tabBarActiveTintColor: "#000b2b",
    tabBarInactiveTintColor: "#CCC"
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabBarOptions}>
        <Tab.Screen
          name="ListViewStack"
          component={ListOverviewStack}
          options={{
            ...tabOptions,
            tabBarIcon: ({ size, color }) =>
              <AntDesign name="home" size={size} color={color} />
          }}
        />
        <Tab.Screen
          name="NewMatchStack"
          component={NewMatchStack}
          options={{
            ...tabOptions,
            tabBarIcon: ({ size, color }) =>
              <AntDesign name="pluscircleo" size={size} color={color} />
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            ...tabOptions,
            tabBarIcon: ({ size, color }) =>
              <AntDesign name="user" size={size} color={color} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
