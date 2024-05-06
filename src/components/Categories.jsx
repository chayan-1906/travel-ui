import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {theme} from "../theme";
import {categoriesData} from "../constants";

export function Categories() {
    return (
        <View className={'space-y-5'}>
            <View className={'mx-5 flex-row justify-between items-center'}>
                <Text className={'text-neutral-700 font-mBold'} style={{fontSize: wp(4)}}>Categories</Text>
                <TouchableOpacity>
                    <Text className={'font-mBold'} style={{fontSize: wp(4), color: theme.text}}>See All</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={categoriesData}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                contentContainerStyle={{paddingHorizontal: 15, gap: 16}}
                renderItem={({item}) => (
                    <TouchableOpacity className={'flex items-center space-y-2'}>
                        <Image source={item.image} className={'rounded-2xl'} style={{width: wp(20), height: wp(19)}}/>
                        <Text className={'text-neutral-700 font-mMedium'} style={{fontSize: wp(3.5)}}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
