import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider as DiceProvider } from './src/context/DiceContext';

import HomeScreen from './src/screens/Home';
import RollingDiceScreen from './src/screens/RollingDiceScreen';
import CustomModal from './src/components/Modal';

const Stack = createNativeStackNavigator();

const headerOptions = {
  title: 'Dice APP',
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: '900',
    color: 'white',
    alignSelf: 'center',
  },
  headerTitleAlign: 'center',
};

export default function App() {
  return (
    <DiceProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Roll Dice"
            component={RollingDiceScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Modal"
            component={CustomModal}
            options={headerOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DiceProvider>
  );
}
