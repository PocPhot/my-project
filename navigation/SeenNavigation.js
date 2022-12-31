import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains';
import { SeenScreen } from '../screen';
import { Header } from '../components';

const Stack = createStackNavigator();

const SeenStackScreen = () => {

    // Stack Navigation Seen
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
                name="SeenScreen"
                component={SeenScreen}
                options={{
                    header: () => <Header name='ĐÃ XEM' />
                }}
            />
        </Stack.Navigator>
    );

}

export default SeenStackScreen