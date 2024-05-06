import {FlatList, View} from "react-native";
import {destinations} from "../constants";
import {DestinationCard} from "./DestinationCard";

export function Destinations() {
    return (
        <View className={'mx-5 flex-row justify-between'}>
            <FlatList
                data={destinations}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                // contentContainerStyle={{gap: 10}}
                // numColumns={2}
                bounces={false}
                renderItem={({item}) => <DestinationCard destination={item}/>}
            />
        </View>
    );
}
