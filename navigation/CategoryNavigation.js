import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import {
    CategoryAllScreen,
    FilterScreen
} from '../screen';

import { COLORS } from '../contains';
import { Header } from '../components';

const Stack = createStackNavigator();

const CategoryStackScreen = () => {

    const navigation = useNavigation()

    // Handle move Filter screen
    const moveFilterScreen = () => {
        navigation.navigate('FilterScreen')
    }

    // Stack Navigation Category
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerTintColor: COLORS.main,
                headerStyle: {
                    height: 120,
                    backgroundColor: COLORS.main,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 30,
                },
                headerTitleAlign: 'center',
                headerTintColor: COLORS.white
            })}
        >
            <Stack.Screen
                name="CategoryAllScreen"
                component={CategoryAllScreen}
                options={{
                    header: () => <Header name='DANH MỤC' iconRight={'filter'} onPress={moveFilterScreen} />
                }}
            />

        </Stack.Navigator>
    );

}

export default CategoryStackScreen