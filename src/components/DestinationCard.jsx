import {Image, Text, TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {LinearGradient} from "expo-linear-gradient";
import {HeartIcon} from "react-native-heroicons/solid";
import {useState} from 'react';
import {useNavigation} from "@react-navigation/native";

export function DestinationCard({destination}) {
    const [isFavourite, setIsFavourite] = useState(false);
    let navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Destination', {...destination})}
            style={{height: wp(65)}}
            className={'flex w-full justify-end relative mb-5 py-6'}>
            <Image source={destination.image} style={{height: wp(65)}} className={'absolute w-full rounded-3xl'}/>
            <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.9)']}
                style={{height: hp(15)}}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                className={'absolute bottom-0 rounded-3xl w-full'}
            />

            {/* favourite */}
            <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)} className={'absolute top-3 right-3 rounded-full p-3'} style={{backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
                <HeartIcon size={wp(5)} color={isFavourite ? 'red' : 'white'}/>
            </TouchableOpacity>

            {/* title & description */}
            <View className={'px-4'}>
                <Text className={'text-white font-mBold'} style={{fontSize: wp(6)}}>{destination.title}</Text>
                <Text className={'text-white'} style={{fontSize: wp(3)}}>{destination.shortDescription}</Text>
            </View>
        </TouchableOpacity>
    );
}
