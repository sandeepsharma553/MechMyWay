import React, { useState } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, Dimensions, useWindowDimensions, useColorScheme, View, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { TextInput } from 'react-native-paper';
import { Input } from 'react-native-elements';
const logo = require("../assets/logo.jpg")
const Register = ({ navigation }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [click, setClick] = useState(false);
    const { username, setUsername } = useState("");
    const { password, setPassword } = useState("");
    const login = () => {

    }
    const renderScene = SceneMap({
        first: Profile,
        second: Address,
        third: Service,
        fourth: Location,
    });
    const routes = [
        { key: 'first', title: 'Profile' },
        { key: 'second', title: 'Address' },
        { key: 'third', title: 'Service' },
        { key: 'fourth', title: 'Location' },
    ];
    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'red'}
            inactiveColor={'black'}
            indicatorStyle={{ backgroundColor: '#9A1818', height: 2 }}
            style={styles.tabBarStyle}
            labelStyle={styles.tabBarLabelStyle}
        />
    )
    return (
        <SafeAreaView style={styles.container}>
            {/* <Image source={logo} style={styles.image} resizeMode='contain' /> */}
            <Text style={styles.title}>Profile</Text>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </SafeAreaView>
    );
};
export default Register;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBarStyle: {
        backgroundColor: 'green',
        //  marginTop: 1,
        // marginLeft: 16,
        // shadowColor: 'black',
        // shadowOpacity: 0,
        // shadowRadius: 0,
        // shadowOffset: {
        //   height: 0,
        //   width: 0,
        // },
    },
    tabBarIndicatorStyle: {
        backgroundColor: 'transparent',
        height: 3,
        paddingRight: 32,
    },
    tabBarLabelStyle: {
        color: 'black',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 18

    },
    tabBarTabStyle: {
        width: Dimensions.get('window').width * .18,
        padding: 0,
        marginRight: 33,
    },
    image: {
        height: 80,
        width: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5
    },
})

const Profile = () => {
    return (
        <SafeAreaView>
           <View style={styles.inputView}>
            <Text >Name</Text>
           </View>
        </SafeAreaView>
    );
}
const Address = () => {
    return (
        <SafeAreaView>
            <Text style={styles.inputView}>State</Text>
            <Text style={styles.inputView}>District</Text>
            <Text style={styles.inputView}>Tehsil</Text>
            <Text style={styles.inputView}>Village</Text>
            <Text style={styles.inputView}>Address</Text>
            <Text style={styles.inputView}>Pincode</Text>
        </SafeAreaView>
    );
}
const Service = () => {
    return (
        <SafeAreaView>
            <Text style={styles.inputView}>Item</Text>
        </SafeAreaView>
    );
}
const Location = () => {
    return (
        <SafeAreaView>
            <Text style={styles.inputView}>Location</Text>
        </SafeAreaView>
    );
}