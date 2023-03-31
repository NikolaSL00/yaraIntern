import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider as DiceProvider } from './src/context/DiceContext';

import HomeScreen from './src/screens/Home';
import RollingDiceScreen from './src/screens/RollingDiceScreen';
import CustomModal from './src/components/Modal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DiceProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Roll Dice" component={RollingDiceScreen} />
          <Stack.Screen name="Modal" component={CustomModal} />
        </Stack.Navigator>
      </NavigationContainer>
    </DiceProvider>
  );
}
