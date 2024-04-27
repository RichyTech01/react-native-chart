import { View, Text } from "react-native";
import { LineChart,  } from "react-native-gifted-charts";


function Chart({data, minPoint, minDataPoint, maxDataPoint, maxPoint}) {

   return (
      <View className="">
         <View className="h-[226.41px] top-[34.01px] w-[100%] justify-center items-center ">
            <LineChart
               data={data}
               hideRules
               color="#079B49"
               thickness={2.4}
               hideYAxisText
               xAxisThickness={0}
               yAxisThickness={0}
               spacing={3}
               curved
               isAnimated
            />
           
         </View>
         {minPoint && minDataPoint && (
                <View className="ml-[40] mt-[15] ">
                    <Text className=" text-[#141416] text-[7px] ">{minDataPoint.money}</Text>
                </View>
            )}
         
         {maxPoint && maxDataPoint && (
                <View className="mr-[40px] mt-[35] absolute right-0 ">
                    <Text className="text-[7px] text-[#141416] ">{maxDataPoint.money}</Text>
                </View>
            )}

         <View className="mt-[48.08px] flex-row justify-between border-b border-b-[#00000033] ">
            <View className="w-[68px] h-[29px] rounded-[15px] bg-[#ABFFD0] justify-center items-center border  border-[#079B49] ">
               <Text className="text-[#079B49] text-[12px] font-bold ">
                  24H
               </Text>
            </View>

            <View className="w-[68px] h-[29px] rounded-[15px] bg-[#F1F1F1] justify-center items-center border  border-[#9B9B9B] ">
               <Text className="text-[#141416] text-[12px] font-bold ">
                  1W
               </Text>
            </View>

            <View className="w-[68px] h-[29px] rounded-[15px] bg-[#F1F1F1] justify-center items-center border  border-[#9B9B9B] ">
               <Text className="text-[#141416] text-[12px] font-bold ">
                  1M
               </Text>
            </View>

            <View className="w-[68px] h-[29px] rounded-[15px] bg-[#F1F1F1] justify-center items-center border  border-[#9B9B9B] mb-[17.30px] ">
               <Text className="text-[#141416] text-[12px] font-bold ">
                  1Y
               </Text>
            </View>
         </View>
      </View>
   );
}
 
export default Chart;