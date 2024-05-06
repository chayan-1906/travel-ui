import {Image, Platform, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {MagnifyingGlassIcon} from "react-native-heroicons/solid";
import {Categories} from "../components/Categories";
import {SortCategories} from "../components/SortCategories";
import {Destinations} from "../components/Destinations";

const iOS = Platform.OS === 'ios';
const topMargin = iOS ? 'mt-3' : 'mt-10';

export function HomeScreen() {
    return (
        <SafeAreaView className={'flex-1 bg-white'}>
            <ScrollView className={`space-y-6 ${topMargin}`} showsVerticalScrollIndicator={false} bounces={false}>
                {/* avatar */}
                <View className={'mx-5 flex-row justify-between items-center mb-2'}>
                    <Text className={'font-pRegular text-neutral-700'} style={{fontSize: wp(7)}}>Let's Discover</Text>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/avatar.png')} style={{height: wp(12), width: wp(12)}} className={'rounded-full'}/>
                    </TouchableOpacity>
                </View>

                {/* search bar */}
                <View className={'mx-5 mb-4'}>
                    <View className={'flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6'}>
                        <MagnifyingGlassIcon size={20} strokeWidth={3} color={'gray'}/>
                        <TextInput placeholder={'Search destination...'} placeholderTextColor={'gray'} className={'flex-1 text-base mb-1 pl-1 tracking-wider font-mMedium'}/>
                    </View>
                </View>

                {/* categories */}
                <View className={'mb-4'}>
                    <Categories/>
                </View>

                {/* sort categories */}
                <View className={'mb-4'}>
                    <SortCategories/>
                </View>

                {/* destinations */}
                <Destinations/>
            </ScrollView>
        </SafeAreaView>
    );
}
