import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../contains';
import { Header, HeaderInfo } from '../components';

import { HomeScreen, CategoryScreen } from '../screen';

const Stack = createStackNavigator();

const HomeStackScreen = () => {

    const navigation = useNavigation()

    // Handle move Cart screen
    const moveCartScreen = () => {
        navigation.navigate('CartScreen')
    }

    // Handle back to Home Screen
    const changeFilterScreen = () => {
        navigation.navigate('FilterScreen')
    }

    // Stack Navigation Home
    return (
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={() => ({
                headerTintColor: COLORS.main,
                headerStyle: {
                    height: 120,
                    backgroundColor: COLORS.main
                },
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: 'bold'
                },
                headerTitleAlign: 'center',
                headerTintColor: COLORS.white
            })}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    header: () => <Header // Use component Header
                        name='TRANG CHỦ'
                        iconRight={'cart'}
                        onPress={moveCartScreen}
                    />
                }}
            />

            <Stack.Screen
                name="CategoryScreen"
                component={CategoryScreen}
                options={({ route }) => (
                    {
                        header: () => <Header
                            name={`Danh mục ${route.params.title}`}
                            iconRight={'filter'}
                            onPress={changeFilterScreen}
                            stack
                        />
                    })}
            />

        </Stack.Navigator>
    );

}

export default HomeStackScreen