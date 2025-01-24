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
const ProfileScreen = ({navigation}) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Home', {name: 'Jane'})
        }
      />
    );
  };
  export default ProfileScreen;
  const styles = StyleSheet.create({

  })