import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { Button, NativeBaseProvider } from 'native-base';
import OnBoarding_2 from './onBoarding_2';

const OnBoarding_1 = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    NunitoSans_Light: require('../../../assets/Nunito_Sans/NunitoSans-Light.ttf'),
    NunitoSans_SemiBold: require('../../../assets/Nunito_Sans/NunitoSans-SemiBold.ttf'),
    NunitoSans_ExtraBold: require('../../../assets/Nunito_Sans/NunitoSans-ExtraBold.ttf'),
    NunitoSans_Black: require('../../../assets/Nunito_Sans/NunitoSans-Black.ttf'),
    NunitoSans_Regular: require('../../../assets/Nunito_Sans/NunitoSans-Regular.ttf'),
    Montserrat_Light: require('../../../assets/Montserrat/Montserrat-Light.ttf'),
    Montserrat_SemiBold: require('../../../assets/Montserrat/Montserrat-Medium.ttf'),
    Montserrat_Bold: require('../../../assets/Montserrat/Montserrat-Bold.ttf'),
    Montserrat_Regular: require('../../../assets/Montserrat/Montserrat-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <View style={{ width: '50%', height: 50, alignSelf:'center' , marginTop: '10%' }}>
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
      <View
        style={{
          width: 299,
          height: 362,
          borderWidth: 1,
          marginTop: 20,
          borderRadius: 21,
          marginLeft: 55,
          borderColor: '#99C0E9',
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: '#E40606',
            height: 44,
            width: 44,
            flexDirection: 'row',
            marginLeft: 'auto',
            marginRight: 7,
            marginTop: 6,
            borderRadius: 100,
            shadowOpacity: 0.25,
            shadowRadius: 3,
          }}
        >
          <AntDesign
            size={25}
            name="infocirlceo"
            style={{ alignSelf: 'center', marginLeft: 8, color: 'grey' }}
          />
        </View>

        <View>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Montserrat_Bold',
              fontSize: 22,
              color: '#447DB9',
            }}
          >
            Sàng lọc trẻ tự kỷ
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Montserrat_Bold',
              fontSize: 22,
              color: '#447DB9',
            }}
          >
            M-Chat
          </Text>
          <Image
            source={require('../../../assets/Onboarding/img_1.png')}
            style={{ marginLeft: 72, marginTop: 41, width: 188, height: 195 }}
          />
        </View>
      </View>
      <View style={{ width: 299, height: 71, marginLeft: 55, marginTop: 23 }}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Montserrat_Bold',
            lineHeight: 17,
            fontSize: 14,
          }}
        >
          Trước khi làm bài kiểm tra sàng lọc, vui lòng đọc kỹ phần {''}
          <Text style={{ color: '#447DB9' }}>giải thích</Text> {''}
          để hiểu hơn những khái niệm đang được sử dụng trong các công cụ kiểm
          tra.
        </Text>
      </View>
      <View
        style={{
          width: 299,
          height: 48,
          backgroundColor: '#447DB9',
          borderRadius: 13,
          padding: 5,
          marginTop: 80,
          marginLeft: 55,
        }}
      >
        <Button
          colorScheme="#447DB9"
          onPress={() => navigation.push('OnBoarding_2')}
        >
          Đi tiếp
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <OnBoarding_1 />
    </NativeBaseProvider>
  );
};
