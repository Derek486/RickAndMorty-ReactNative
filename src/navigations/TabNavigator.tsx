import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CharactersScreen from '../screens/CharactersScreen';
import EpisodesScreen from '../screens/EpisodesScreen';
import LocationsScreen from '../screens/LocationsScreen';
import StackNavigation from './StackNavigator';
import DetailCharacter from '../screens/DetailCharacter.tsx';

const Tab = createBottomTabNavigator();

const CharactersNavigation = () => (
    <StackNavigation ListComponent={() => <CharactersScreen />} DetailComponent={() => <DetailCharacter  />} />
)

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Characters" 
                component={CharactersScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
                }}
            />
            <Tab.Screen 
                name="Episodes" 
                component={EpisodesScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="calendar" size={size} color={color} />
                }}
            />
            <Tab.Screen 
                name="Locations" 
                component={LocationsScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="map" size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
