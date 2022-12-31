import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import { COLORS } from '../contains';
import HomeStackScreen from './HomeNavigation';
import CategoryStackScreen from './CategoryNavigation';
import FavoriteStackScreen from './FavoriteNavigation';
import InfoStackScreen from './InfoNavigation';
import SeenStackScreen from './SeenNavigation';
const Tab = createBottomTabNavigator();

const MyTab = () => {

    const listFavoriteID = useSelector(state => state.Favorite.listFavorite) // Get list id into listFavorite when user handle like a product

    // Render tab navigation
    return (
        <Tab.Navigator
            initialRouteName='Home'
            // Customizing Tab Navigation
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'HomeStack':
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home-outline';
                            break;

                        case 'CategoryStack':
                            iconName = focused
                                ? 'ios-browsers'
                                : 'ios-browsers-outline';
                            break;

                        case 'FavoriteStack':
                            iconName = focused
                                ? 'ios-heart'
                                : 'ios-heart-outline';
                            break;
                        case 'SeenStack':
                            iconName = focused
                                ? 'ios-eye'
                                : 'ios-eye-outline';
                            break;
                        case 'InfoStack':
                            iconName = focused
                                ? 'ios-person'
                                : 'ios-person-outline';
                            break;

                        default:
                            break;
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: COLORS.main,
                tabBarInactiveTintColor: COLORS.icon,
                tabBarStyle: {
                    height: 65,
                    paddingBottom: 10,
                    backgroundColor: COLORS.inputSearch
                },
                headerShown: false,
            })}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStackScreen}
                options={{ title: 'Trang chủ' }}
            />

            <Tab.Screen
                name="CategoryStack"
                component={CategoryStackScreen}
                options={{
                    title: 'Danh mục',
                    tabBarBadge: 'Sale',
                    tabBarBadgeStyle: {
                        backgroundColor: COLORS.tabBarBabge
                    }
                }}
            />

            <Tab.Screen
                name="FavoriteStack"
                component={FavoriteStackScreen}
                options={{
                    title: 'Yêu thích',
                    tabBarBadge: listFavoriteID.length
                }}
            />

            <Tab.Screen
                name="SeenStack"
                component={SeenStackScreen}
                options={{
                    title: 'Đã xem',
                }}
            />

            <Tab.Screen
                name="InfoStack"
                component={InfoStackScreen}
                options={{ title: 'Thông tin' }}
            />
        </Tab.Navigator>
    );
}

export default MyTab