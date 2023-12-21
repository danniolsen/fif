/** NAVIGATION TYPES */

type ListViewScreenStackParamList = {
  ListViewScreen: undefined;
  NewMatchScreen: undefined;
};

type NewMatchScreenStackParamList = {
  NewMatchScreen: undefined;
};

type ProfileScreenStackParamList = {
  ProfileScreen: undefined;
};

export type BottomTabParamList = {
  ListViewStack: ListViewScreenStackParamList;
  NewMatchStack: NewMatchScreenStackParamList;
  ProfileStack: ProfileScreenStackParamList;
};

/** NAVIGATION TYPES */
