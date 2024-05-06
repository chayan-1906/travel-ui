import {Image, Text, TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {LinearGradient} from "expo-linear-gradient";
import {useNavigation} from "@react-navigation/native";

export function WelcomeScreen() {
    let navigation = useNavigation();

    return (
        <View className={'flex-1 flex justify-end'}>
            {/* background image */}
            <Image source={require('../../assets/images/welcome-3.png')} className={'h-full w-full absolute'}/>

            {/* content & gradient */}
            <View className={'p-5 pb-10 space-y-16'}>
                <LinearGradient
                    colors={['transparent', 'rgba(216, 4, 39, 0.4)']}
                    style={{width: wp(100), height: hp(60)}}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                    className={'absolute bottom-0'}
                />
                <View className={'space-y-3'}>
                    <Text className={'text-white font-bold font-pRegular'} style={{fontSize: wp(10)}}>Travelling made easy!</Text>
                    <Text className={'text-neutral-200 font-medium'}>Experience the world's best adventure around the world with us</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} className={'bg-orange-500 mx-auto p-3 px-12 rounded-full'}>
                    <Text className={'text-white font-bold font-pRegular'} style={{fontSize: wp(5.5)}}>Let's Go</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
