import { View, Text,  } from "react-native";
import BidAsks from "./BidAsks";


const graphDetails = () => {
    return ( 
        <View>
        <View className='mt-[13.61px] flex-row justify-between '>
            <View className="h-[25.19px] border-b border-b-[#141416]">
                <Text className="text-[#141416] font-bold ">
                   Orderbook
                </Text>
            </View>

            <View className="h-[25.19px] ">
                <Text className="text-[#9B9B9B] ">
                  Transaction Activity
                </Text>
            </View>
            
            <View className="h-[25.19px] ">
                <Text className="text-[#9B9B9B] ">
                 Analysis
                </Text>
            </View> 

            <View className="h-[25.19px] ">
                <Text className="text-[#9B9B9B] ">
                   News
                </Text>
            </View>
           
         </View>

         <View>
          <BidAsks/>
         </View>
     </View>
     );
}
 
export default graphDetails;
