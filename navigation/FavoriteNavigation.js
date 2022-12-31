import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';

import { FavoriteScreen } from '../screen';
import { COLORS } from '../contains';
import { Header } from '../components';
import { deleteAllFavorite } from '../store/slices/favorite';

const Stack = createStackNavigator();

const FavoriteStackScreen = () => {

    const dispatch = useDispatch()

    const handleDeleteAll = () => {
        Alert.alert(
            "Thông báo",
            "Bạn muốn xóa hết?",
            [
                {
                    text: "OK",
                    onPress: () => {
                        dispatch(deleteAllFavorite())
                    }
                },
                { text: "Cancel", onPress: () => { } }
            ]
        );
    }

    // Stack Navigation Favorite
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
                name="FavoriteScreen"
                component={FavoriteScreen}
                options={{
                    header: () => <Header name='YÊU THÍCH' iconRight={'trash'} onPress={handleDeleteAll} />
                }}
            />
        </Stack.Navigator>
    );

}

export default FavoriteStackScreen