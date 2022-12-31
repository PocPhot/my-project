import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../contains';
import { HeaderInfo, Header } from '../components';

import {
    InfoScreen,
    InfoCartScreen,
    InfoShipScreen
} from '../screen';

const Stack = createStackNavigator();

const InfoStackScreen = () => {

    const navigation = useNavigation()

    // Handle go back Info Screen
    const goBackInfoScreen = () => {
        navigation.navigate('InfoScreen')
    }

    // Handle change Cart Screen
    const changeCartScreen = () => {
        navigation.navigate('CartScreen')
    }

    // Stack Navigation Info
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerTintColor: COLORS.main,
                headerStyle: {
                    height: 120
                },
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: 'bold'
                },
                headerTitleAlign: 'center'
            })}
        >
            <Stack.Screen
                name="InfoScreen"
                component={InfoScreen}
                options={{
                    header: () => <Header name='THÔNG TIN' iconRight={'cart'} onPress={changeCartScreen} />
                }}
            />

            <Stack.Screen
                name="InfoCartScreen"
                component={InfoCartScreen}
                options={{
                    header: () => <HeaderInfo onPress={goBackInfoScreen} />,
                }}
            />

            <Stack.Screen
                name="InfoShipScreen"
                component={InfoShipScreen}
                options={{
                    header: () => <HeaderInfo onPress={goBackInfoScreen} />,
                }}
            />


        </Stack.Navigator>
    );

}

export default InfoStackScreen