import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BusinessScreen from "./src/screens/Businesses";
import BusinessDetailScreen from "./src/screens/BusinessDetail";

const navigator = createStackNavigator(
  {
    Businesses: BusinessScreen,
    BusinessDetail: {
      screen: BusinessDetailScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Businesses',
    defaultNavigationOptions: {
      title: 'BusinessSearch',
    },
  }
);

export default createAppContainer(navigator);
