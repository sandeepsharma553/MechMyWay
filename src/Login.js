import React, { useState, useEffect } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, useColorScheme, View, KeyboardAvoidingView, Platform, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import { Input } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useToast } from "react-native-toast-notifications";
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const logo = require("../assets/logo.jpg")
const Login = ({ navigation }) => {
    const toast = useToast()
    // useEffect(() => {
    //     toast.show("Task finished successfully", {
    //         type: "normal | success | warning | danger | custom",
    //         placement: "top | bottom",
    //         duration: 4000,
    //         offset: 30,
    //         animationType: "slide-in | zoom-in",
    //       });
    //   }, []);
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [click, setClick] = useState(false);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const login = () => {
        if (username == '') {
            setUserName(null)
        }
        else if (password == '') {
            setPassword(null)
        }
        else {
            let user = {
                "Id":1,
                "Name":'sandeep',
            }
            AsyncStorage.setItem('user',JSON.stringify(user))
            setTimeout(()=>{
                navigation.navigate('Home')
            },3000)
           
           
            toast.show(
                "Login successfully",
                {
                    type: "custom_toast",
                    animationDuration: 100,
                    data: {
                        title: "Success",
                    },
                    placement: "top",
                    offset: 30,
                    animationType: "slide-in",
                }
            )
        }

    }
    const forgetPassword = () => {

    }
    return (
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <Image source={logo} style={styles.image} resizeMode='contain' />
                    <Text style={styles.title}>Login</Text>
                    <View style={styles.inputView}>
                        <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' mode='outlined' error={username == null ? true : false} value={username}
                            onChangeText={setUserName} autoCorrect={false} autoCapitalize='none' />
                        {username == null ? (<Text style={styles.error} >Please enter username</Text>) : (<Text></Text>)}
                        <TextInput style={styles.input} mode='outlined' error={password == null ? true : false} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
                            autoCapitalize='none' />
                        {password == null ? (<Text style={styles.error} >Please enter password</Text>) : (<Text></Text>)}
                        <Text>Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and symbols. </Text>
                    </View>
                    <View style={styles.rememberView}>
                        <View style={styles.switch}>
                            <Switch value={click} onValueChange={setClick} trackColor={{ true: "green", false: "gray" }} />
                            <Text style={styles.rememberText}>Remember Me</Text>
                        </View>
                        <View>
                            <Pressable onPress={() => forgetPassword()}>
                                <Text style={styles.forgetText}>Forgot Password?</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.buttonView}>
                        <Pressable style={styles.button} onPress={() => {
                            login()

                        }}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </Pressable>
                        {/* <ActivityIndicator hidesWhenStopped={false} size="large" color="#00ff00" /> */}
                    </View>
                    <Text style={styles.footerText}>Don't have an account?
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('SignUp')
                        }}>
                            <Text style={styles.signup}>Sign Up</Text>
                        </TouchableOpacity>
                    </Text>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
export default Login;
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 90,
    },
    image: {
        height: 160,
        width: 170
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        paddingVertical: 10,
    },
    inputView: {
        gap: 5,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5
    },
    input: {
        height: 50,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 7
    },
    rememberView: {
        width: "100%",
        paddingHorizontal: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 8
    },
    switch: {
        flexDirection: "row",
        gap: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    rememberText: {
        fontSize: 13
    },
    forgetText: {
        fontSize: 14,
        color: "red"
    },
    button: {
        backgroundColor: "green",
        height: 45,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonView: {
        width: "100%",
        paddingHorizontal: 50
    },
    optionsText: {
        textAlign: "center",
        paddingVertical: 10,
        color: "gray",
        fontSize: 13,
        marginBottom: 6
    },
    mediaIcons: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 23
    },
    icons: {
        width: 40,
        height: 40,
    },
    footerText: {
        textAlign: "center",
        color: "gray",
    },
    signup: {
        color: "green",
        fontSize: 18,
        top: 8,
        margin: 2
    },
    error: {
        color: 'brown'
    }
})