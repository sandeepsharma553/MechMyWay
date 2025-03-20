import React, { useState } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, TouchableOpacity, StyleSheet, Linking, Text, Dimensions, TextInput, useWindowDimensions, View } from 'react-native'
import {
    createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem,
} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import Login from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Register from './Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const NavMenu = ({ navigation }) => {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            defaultStatus="open"
            statusBarAnimation='fade'
            screenOptions={{
                drawerType: isLargeScreen ? 'permanent' : 'front',
                // overlayColor: 'transparent',
            }}
        
        >
            <Drawer.Screen name="Dashboard" component={NavDashboard}
                options={{
                    unmountOnBlur: true,
                    headerShown: false,

                }}
            />
            <Drawer.Screen name="Profile" component={NavProfile}
                options={{
                    unmountOnBlur: true,
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    )
}
function CustomDrawerContent(props) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    backgroundColor: '#073b15',
                    height: 110,
                    paddingLeft: 18,
                    paddingRight: 8,
                    flexWrap: 'wrap',
                }}>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                    <Image
                        source={require('../assets/facebook.jpg')}
                        style={{
                            width: 90,
                            height: 45,
                            marginTop: Dimensions.get('window').width * 0.1,
                        }}
                    />
                    <View style={{ marginTop: 20, paddingLeft: 18, alignSelf: 'flex-start' }}>
                        <Text
                            style={{
                                fontSize: 16,
                                textTransform: 'uppercase',
                                paddingTop: 8,
                                fontWeight: 'bold',
                                flexShrink: 1,
                                color: '#fff',
                            }}>
                            <Text style={styles.header}>Welcome</Text>
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                textTransform: 'uppercase',
                                paddingTop: 8,
                                fontWeight: 'bold',
                                flexShrink: 1,
                                color: '#fff',
                            }}>
                            <Text style={styles.header}>Sudeesha</Text>
                        </Text>
                    </View>
                </View>
            </View>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Help"
                    onPress={() => Linking.openURL('https://sudeesha.com/#contact')}
                />
                <DrawerItem
                    label="Logout"
                    onPress={() => {
                        Alert.alert(
                            'Log out',
                            'Do you want to logout?',
                            [
                                { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
                                {
                                    text: 'Confirm', onPress: () => {
                                        AsyncStorage.clear();
                                        props.navigation.navigate('Login')
                                    }
                                },
                            ],
                            { cancelable: false }
                        )
                    }}
                />
            </DrawerContentScrollView>
            <View
                style={{
                    backgroundColor: '#464646',
                    height: 30,
                    padding: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    flexWrap: 'wrap',
                    width: '100%',
                }}>
                <Text style={styles.version}>Version : 1.0</Text>
            </View>
        </SafeAreaView>
    );
}
export default NavMenu;
export function NavDashboard({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: '',
                    headerStyle: { backgroundColor: '#073b15' },
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: 15 }}
                            onPress={() => navigation.navigate('Notification')}>
                            <MaterialCommunityIcons name="bell" color="white" size={30} />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.openDrawer();
                                }}>
                                <MaterialCommunityIcons
                                    name="menu"
                                    color="white"
                                    size={30}
                                    paddingLeft={10}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}
export function NavProfile({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Register}
                options={{
                    headerTitle: '',
                    headerStyle: { backgroundColor: '#073b15' },
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: 15 }}
                            onPress={() => navigation.navigate('Notification')}>
                            <MaterialCommunityIcons name="bell" color="white" size={30} />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.openDrawer();
                                }}>
                                <MaterialCommunityIcons
                                    name="menu"
                                    color="white"
                                    size={30}
                                    paddingLeft={10}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />
        </Stack.Navigator>
    );
}
function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={NavDashboard}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Profile"
          component={NavProfile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 70,
    },
})