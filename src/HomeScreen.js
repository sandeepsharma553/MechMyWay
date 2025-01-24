import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = ({ navigation }) => {
    const user =  AsyncStorage.getItem('user')
    
    if(user){
        let users = user;
    console.log('usersss',user)
        // console.log('user',JSON.parse(users))
    }
    
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={styles.container}>
            <MaterialCommunityIcons name="home" color="#900" size={20} />
            <Icon name="arrowsalt" size={30} color="blue" />
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            />
        </SafeAreaView>
    );
};
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
    },
})