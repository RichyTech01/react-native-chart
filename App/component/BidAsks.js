import { View, Text, ScrollView, TouchableOpacity } from "react-native";


const BidData = [
    {id:1, FN: "0.0856", SN:'0.0856', percentage: 59   },
    {id:2, FN: "0.0856", SN:'0.0856', percentage: 59   },
    {id:3, FN: "0.0856", SN:'0.0856', percentage: 79   },
    {id:4, FN: "0.0856", SN:'0.0856' , percentage: 29  },
    {id:5, FN: "0.0856", SN:'0.0856' , percentage: 29  },
]

const AsksData = [
    {id:1, FN: "4.660.000", SN:'0.0856', percentage: 69   },
    {id:2, FN: "4.660.000", SN:'0.0856', percentage: 54   },
    {id:3, FN: "4.660.000", SN:'0.0856', percentage: 59   },
    {id:4, FN: "4.660.000", SN:'0.0856' , percentage: 70  },
    {id:5, FN: "4.660.000", SN:'0.0856' , percentage: 70  },
]


const BidAsks = () => {
    return ( 
        <View>
        <View className="mt-[17.81px] flex-row justify-between">
            <View className="w-[49%]">
                <Text className="text-[#141416] font-bold text-[8px] pb-[12px] ">Bid</Text>
             <ScrollView className="mt-[-8px]">
                {BidData.map((item) => {
                    return(
                        <View key={item.id} className={` flex-row items-center justify-between mt-[8px] h-[22px] bg-[#ABFFD0] `}  >
                           <Text className=" text-[8px] text-[#141416]  ">{item.FN}</Text>
                           <Text className="text-right text-[8px]  text-[#32C965] mr-[6px]">{item.SN}</Text>
                       </View>
                    )
                })}
            </ScrollView>
            </View>

            <View className="w-[49%]">
                <Text className="text-[#141416] font-bold text-[8px] pb-[12px] ">Asks</Text>

                <ScrollView className="mt-[-8px]">
                    {AsksData.map((item) => {
                        return(
                            <View key={item.id} className="flex-row mt-[8px] items-center justify-between h-[22px] bg-[#FFB5BA] ">
                               <Text className=" text-[8px] text-[#F33E3E] ml-[6px]">{item.FN}</Text>
                                <Text className="text-right text-[8px] text-[#141416] ">{item.SN}</Text>
                            </View> 
                        )
                    })}
                </ScrollView>
                
            </View>
        </View>

        <View className="mt-[31px] flex-row justify-between fixed ">
           <TouchableOpacity className="bg-[#EBEBEB] h-[38px] w-[107px] rounded-[19px] justify-center items-center">
                <Text>Set Alert</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#ABFFD0] h-[38px] w-[107px] rounded-[19px] justify-center items-center">
                <Text className="text-[#079B49] text-[12px] ">Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#FFB5BA] h-[38px] w-[107px] rounded-[19px] justify-center items-center">
                <Text className="text-[#D4000E] text-[12px] ">Sell</Text>
            </TouchableOpacity>
        </View>
        </View>
     );
}
 

export default BidAsks;