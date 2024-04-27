import { View, Text,SafeAreaView, StatusBar, Image  } from "react-native";
import Chart from "./App/component/Chart";
import GraphDetails from "./App/component/chartDetails";
import { ChartData } from "./App/Data/ChartData";

const BtcImg = require('./assets/Bitcoin 1.png')

const App = () => {

  const data = ChartData;

  const maxDataPoint = data.reduce((prev, current) => (prev.money > current.money) ? prev : current);
  const minDataPoint = data.reduce((prev, current) => (prev.money < current.money) ? prev : current);

  const maxPoint = data.find((point) => point.value === maxDataPoint.value);
  const minPoint = data.find((point) => point.value === minDataPoint.value);

  return ( 
    <SafeAreaView className="mx-[16px] flex-1">
      <StatusBar barStyle="default"/>
      <View>
        <View className="bg-[#F1F1F1] w-[65px] h-[65px] mx-auto rounded-full items-center justify-center "> 
          <Image source={BtcImg} />
        </View>
        <Text className="text-[#141416] text-[16px] font-bold mx-auto mt-[11px]">Bitcoin <Text className="text-[#989898] text-[16px] font-normal ">BTC</Text></Text>
      </View>

      <View className="mt-[21px] flex-row items-center justify-between">
         <View >
           <Text className="text-[#141416] text-[11px] ">Price</Text>
           <Text className="text-[#141416] font-bold text-[22px] ">$50,588.07</Text>
           <Text className="text-[#141416] text-[11px] mt-[2px]">Vol: $993,365,105,270 <Text className="text-[#079B49] text-[10px] ]">2.02%</Text></Text>
         </View>
         <View className="">
           <Text className="text-[#141416] text-[11px] ">Hi: {maxDataPoint.money}</Text>
           <Text className="text-[#141416] text-[11px] mt-[2px]">Lo: {minDataPoint.money}</Text>
         </View>
      </View>

      <View>
         <Chart 
           data={data}
           maxDataPoint={maxDataPoint}
           minDataPoint={minDataPoint}
           maxPoint={maxPoint}
           minPoint={minPoint}
           />
           
      </View>
      <View>
        <GraphDetails/>
      </View>
    </SafeAreaView>
   );
}
 
export default App;