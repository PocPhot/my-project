import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../contains';
import { Header, HeaderInfo } from '../components';
import MyTab from '.';
import {
    FilterScreen,
    CartScreen,
    BuyScreen,
    ProductScreen,
    SearchScreen,
    LoginScreen
} from '../screen';


const Stack = createStackNavigator();

const TabStackScreen = () => {

    const navigation = useNavigation()

    // Handle move drawer screen
    const moveDrawer = () => {
        navigation.openDrawer()
    }

    // Handle go back previous screen
    const goBackPreviousScreen = () => {
        navigation.goBack()
    }

    // Handle move Cart screen
    const moveCartScreen = () => {
        navigation.navigate('CartScreen')
    }

    // Stack Navigation Favorite
    return (
        <Stack.Navigator
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
                name="MyTab"
                component={MyTab}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="FilterScreen"
                component={FilterScreen}
                options={{
                    title: 'Lọc sản phẩm',
                }}
            />

            <Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    title: 'Giỏ hàng',
                }}
            />

            <Stack.Screen
                name="BuyScreen"
                component={BuyScreen}
                options={{
                    title: 'Xác định đơn hàng',
                }}
            />


            <Stack.Screen
                name="ProductScreen"
                component={ProductScreen}
                options={{
                    header: () => <HeaderInfo // Use component Header Info
                        iconRight={'cart'}
                        onPress={goBackPreviousScreen}
                        onPressRight={moveCartScreen}
                    />
                }}
            />

            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    header: () => <HeaderInfo // Use component Header Info
                        onPress={goBackPreviousScreen}
                    />
                }}
            />

            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    header: () => <Header name='Đăng nhập' notSearch />
                }}
            />
        </Stack.Navigator>
    );

}

export default TabStackScreen