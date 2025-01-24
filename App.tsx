import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  ScrollView,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ToastProvider } from 'react-native-toast-notifications'
import Login from './src/Login';
import NavMenu from './src/NavMenu';
import Register from './src/Register';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignUp from './src/SingUp';
const image1 = require("./assets/carback.jpg")
const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };
const Stack = createNativeStackNavigator();
type SectionProps = PropsWithChildren<{
  title: string;
}>;
function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [login, setLogin] = useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    //   <SafeAreaView style={backgroundStyle}>
    //     {/* <StatusBar
    //       barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //       backgroundColor={backgroundStyle.backgroundColor}
    //     /> */}
    //   {/* //   <ScrollView
    //   //     contentInsetAdjustmentBehavior="automatic"
    //   //     style={backgroundStyle}>
    //   //     <Header />
    //   //     <View
    //   //       style={{
    //   //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //   //       }}>
    //   //       <Section title="Step One">
    //   //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //   //         screen and then come back to see your edits.
    //   //       </Section>
    //   //       <Section title="See Your Changes">
    //   //         <ReloadInstructions />
    //   //       </Section>
    //   //       <Section title="Debug">
    //   //         <DebugInstructions />
    //   //       </Section>
    //   //       <Section title="Learn More">
    //   //         Read the docs to discover what to do next:
    //   //       </Section>
    //   //       <LearnMoreLinks />
    //   //     </View>
    //   //   </ScrollView> */}
    //   <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: 'Welcome' }}
    //     />
    //     <Stack.Screen name="Profile" component={ProfileScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //  </SafeAreaView>


    <ImageBackground source={image1} style={styles.image} resizeMode='cover' >
      <NavigationContainer>
        <Stack.Navigator>
          {login ? (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="Home"
                component={NavMenu}
                options={{
                  headerShown: false
                }}
              />
            </>
          ) : (
            <Stack.Screen
              name="Home"
              component={NavMenu}
              options={{
                headerShown: false
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}
export default () => {
  return (
    <ToastProvider placement="bottom"
      dangerIcon={<MaterialCommunityIcons name="close" color="#fff" />}
      successIcon={<MaterialCommunityIcons name="check" color="#fff" size={18} />}
      offset={10}
      // Custom type example
      renderType={{
        custom_toast: (toast) => (
          <View
            style={{
              maxWidth: "85%",
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: "#fff",
              marginVertical: 4,
              borderRadius: 8,
              borderLeftColor: "#00C851",
              borderLeftWidth: 6,
              justifyContent: "center",
              paddingLeft: 16,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#333",
                fontWeight: "bold",
              }}
            >
              {toast.data.title}
            </Text>
            <Text style={{ color: "#a3a3a3", marginTop: 2 }}>{toast.message}</Text>
          </View>
        ),
        with_close_button: (toast) => (
          <View
            style={{
              maxWidth: "85%",
              paddingVertical: 10,
              backgroundColor: "#fff",
              marginVertical: 4,
              borderRadius: 8,
              borderLeftColor: "#00C851",
              borderLeftWidth: 6,
              justifyContent: "center",
              paddingHorizontal: 16,
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "#a3a3a3", marginRight: 16 }}>{toast.message}</Text>
            <TouchableOpacity
              onPress={() => toast.onHide()}
              style={{
                marginLeft: "auto",
                width: 25,
                height: 25,
                borderRadius: 5,
                backgroundColor: "#333",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "500", marginBottom: 2.5 }}>
                x
              </Text>
            </TouchableOpacity>
          </View>
        ),
      }}>
      <App />
    </ToastProvider>
  )

};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    flex: 1,
    height: Dimensions.get('window').width * 2.05,
    opacity: 0.85
  },
  container: {
    flex: 1,
  },
});


