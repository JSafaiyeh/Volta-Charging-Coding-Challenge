import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import StationDetailScreen from './screens/StationDetailScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: StationDetailScreen
  }
});

export default createAppContainer(AppNavigator);