import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";
import {ChevronLeftIcon, ClockIcon, HeartIcon, MapPinIcon, SunIcon} from "react-native-heroicons/solid";
import {useState} from 'react';
import {theme} from "../theme";

export function DestinationScreen() {
    let {params} = useRoute();
    let destination = params;
    let navigation = useNavigation();
    const [isFavourite, setIsFavourite] = useState(false);

    return (
        <View className={'bg-white flex-1'}>
            {/* destination image */}
            <Image source={destination.image} style={{width: wp(100), height: hp(55)}}/>

            <StatusBar style={'light'}/>

            {/* back button */}
            <SafeAreaView className={'flex-row justify-between items-center w-full absolute'}>
                {/* back */}
                <TouchableOpacity onPress={() => navigation.goBack()} className={'p-3 rounded-full left-4'} style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
                    <ChevronLeftIcon size={wp(5)} strokeWidth={4} color={'white'}/>
                </TouchableOpacity>

                {/* favourite */}
                <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)} className={'p-3 rounded-full right-4'} style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
                    <HeartIcon size={wp(5)} strokeWidth={3} color={isFavourite ? 'red' : 'white'}/>
                </TouchableOpacity>
            </SafeAreaView>

            {/* title & long description & booking button */}
            <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className={'px-5 flex flex-1 justify-between bg-white pt-8 -mt-14'}>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false} className={'space-y-5'}>
                    {/* name & price */}
                    <View className={'flex-row justify-between items-start'}>
                        <Text className={'font-mBlack flex-1 text-neutral-700'} style={{fontSize: wp(7)}}>{destination?.title}</Text>
                        <Text className={'font-mSemibold'} style={{fontSize: wp(7), color: theme.text}}>{destination?.price}</Text>
                    </View>

                    {/* long description */}
                    <Text className={'text-neutral-700 tracking-wide mb-2'} style={{fontSize: wp(3.7)}}>{destination?.longDescription}</Text>

                    {/* distance, distance, weather */}
                    <View className={'flex-row justify-between mx-1'}>
                        {/* duration */}
                        <View className={'flex-row space-x-2 items-start'}>
                            <ClockIcon size={wp(7)} color={'skyblue'}/>
                            <View className={'flex space-y-2'}>
                                <Text className={'font-mBold text-neutral-700'} style={{fontSize: wp(4.5)}}>{destination?.duration}</Text>
                                <Text className={'text-neutral-600 tracking-wide'}>Duration</Text>
                            </View>
                        </View>

                        {/* distance */}
                        <View className={'flex-row space-x-2 items-start'}>
                            <MapPinIcon size={wp(7)} color={'#F87171'}/>
                            <View className={'flex space-y-2'}>
                                <Text className={'font-mBold text-neutral-700'} style={{fontSize: wp(4.5)}}>{destination?.distance}</Text>
                                <Text className={'text-neutral-600 tracking-wide'}>Distance</Text>
                            </View>
                        </View>

                        {/* weather */}
                        <View className={'flex-row space-x-2 items-start'}>
                            <SunIcon size={wp(7)} color={'orange'}/>
                            <View className={'flex space-y-2'}>
                                <Text className={'font-mBold text-neutral-700'} style={{fontSize: wp(4.5)}}>{destination?.weather}</Text>
                                <Text className={'text-neutral-600 tracking-wide'}>Weather</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <TouchableOpacity className={'mb-6 mx-auto flex justify-center items-center rounded-full'} style={{backgroundColor: theme.bg(0.7), height: wp(15), width: wp(50)}}>
                    <Text className={'text-white font-pRegular'} style={{fontSize: wp(5.5)}}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
