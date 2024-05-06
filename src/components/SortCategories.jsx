import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {sortedCategories} from "../constants";
import {useState} from 'react';
import {theme} from "../theme";

export function SortCategories() {
    const [activeCategory, setActiveCategory] = useState('Popular');

    return (
        <View className={'flex-row justify-around items-center mx-5 bg-neutral-100 rounded-full p-2 px-4 space-x-2'}>
            <FlatList
                data={sortedCategories}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                renderItem={({item}) => {
                    let isActive = activeCategory === item;
                    let activeButtonClass = isActive ? 'bg-white shadow' : '';

                    return (
                        <TouchableOpacity onPress={() => setActiveCategory(item)} className={`p-3 px-4 rounded-full flex ${activeButtonClass}`}>
                            <Text className={'font-mBold'} style={{fontSize: wp(4), color: isActive?theme.text:'rgba(0, 0, 0, 0.6)'}}>{item}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}
