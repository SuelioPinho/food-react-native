import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BusinessScreen from './src/screens/Businesses';
import BusinessDetailScreen from './src/screens/BusinessDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Business Search" }}>
        <Stack.Screen name="Businesses" component={BusinessScreen} />
        <Stack.Screen
          name="BusinessDetail"
          component={BusinessDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
