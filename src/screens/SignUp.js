import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StatusBar,
} from 'react-native';
import { Button,NativeBaseProvider } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

function SignUp() {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    NunitoSans_Regular: require('../../assets/Nunito_Sans/NunitoSans-Regular.ttf'),
    NunitoSans_SemiBold: require('../../assets/Nunito_Sans/NunitoSans-SemiBold.ttf'),
    NunitoSans_ExtraBold: require('../../assets/Nunito_Sans/NunitoSans-ExtraBold.ttf'),
    NunitoSans_Black: require('../../assets/Nunito_Sans/NunitoSans-Black.ttf'),
    Montserrat_Light: require('../../assets/Montserrat/Montserrat-Light.ttf'),
    Montserrat_SemiBold: require('../../assets/Montserrat/Montserrat-Medium.ttf'),
    Montserrat_Bold: require('../../assets/Montserrat/Montserrat-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={{width: '100%', alignSelf: 'center'}}>
        <View
          style={{ width: 117, height: 50, marginTop: 40, alignSelf: 'center' }}
        >
          <Text
            style={{
              fontFamily: 'NunitoSans_Black',
              textTransform: 'uppercase',
              color: '#99C0E9',
              textAlign: 'center',
              fontSize: 26,
              lineHeight: 35.46,
            }}
          >
            a<Text style={{ color: '#447DB9' }}>kid</Text>ta
          </Text>
          <Text
            style={{
              color: '#99C0E9',
              fontFamily: 'NunitoSans_Regular',
              fontSize: 14,
              lineHeight: 19.1,
              textAlign: 'center',
            }}
          >
            Cùng con khôn lớn
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Montserrat_Light',
              fontSize: 16,
              marginLeft: 16,
              marginTop: 94,
            }}
          >
            Sign up
          </Text>
        </View>

        {/*Username input field*/}
        <View>
          <View>
            <TextInput
              style={{
                height: 50,
                marginHorizontal: 16,
                paddingLeft: 19,
                marginBottom: 16,
                marginTop: 15,
                borderWidth: 1,
                borderRadius: 6,
                fontFamily: 'Montserrat_SemiBold',
              }}
              variant="outline"
              placeholder="Username"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
        </View>
        {/*Gmail input field*/}
        <View>
          <View>
            <TextInput
              style={{
                height: 50,
                marginHorizontal: 16,
                marginBottom: 16,
                paddingLeft: 19,
                borderWidth: 1,
                borderRadius: 6,
                fontFamily: 'Montserrat_SemiBold',
              }}
              variant="outline"
              placeholder="Gmail"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
        </View>
        {/*Phone input field*/}
        <View>
          <View>
            <TextInput
              style={{
                height: 50,
                marginHorizontal: 16,
                marginBottom: 16,
                paddingLeft: 19,
                borderWidth: 1,
                borderRadius: 6,
                fontFamily: 'Montserrat_SemiBold',
              }}
              variant="outline"
              placeholder="Phone Number"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
        </View>
        {/* Password Input Field */}
        <View>
          <View>
            <TextInput
              style={{
                height: 50,
                marginBottom: 16,
                marginHorizontal: 16,
                borderWidth: 1,
                paddingLeft: 19,
                borderRadius: 6,
                fontFamily: 'Montserrat_SemiBold',
              }}
              variant="outline"
              secureTextEntry={true}
              placeholder="Password"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
        </View>
        {/* Confirm Password Input Field */}
        <View>
          <View>
            <TextInput
              style={{
                height: 50,
                marginHorizontal: 16,
                borderWidth: 1,
                paddingLeft: 19,
                marginBottom: 64,
                borderRadius: 6,
                fontFamily: 'Montserrat_SemiBold',
              }}
              variant="outline"
              secureTextEntry={true}
              placeholder=" Confirm Password"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
        </View>

        {/* Button*/}
        <View
          style={{
            width: '85%',
            height: 48,
            backgroundColor: '#447DB9',
            borderRadius: 13,
            padding: 5,
            alignSelf: 'center'
          }}
        >
          <Button
            title=""
            colorScheme="white"
            onPress={() => navigation.goBack('SignIn')}
          >Tiếp tục</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <SignUp />
    </NativeBaseProvider>
  );
};
