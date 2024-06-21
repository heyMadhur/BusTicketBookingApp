import { Image, ScrollView, Text, View } from "react-native";
import { images } from "../constants"
import bus1 from "../assets/images/bus1.jpg"
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton"

export default function Index() {
  console.log("Started")
  return (
    <SafeAreaView className="border bg-white h-full">
      {/* <ScrollView> */}

        {/* Main Container */}
        <View className="flex-1 items-center">


          {/* Header Image */}
          <Image
            className="w-[500px] h-[300px] mt-[10vh]"
            resizeMode="contain"
            source={images.bus2} />


          {/* Heading */}
          <View className="w-full flex-1 justify-between m-2 items-center">

            <View className=" pl-4 w-full">
              <Text className="pt-2 text-5xl font-pbold">BookMyBus</Text>
              <Text className="text-lg font-fsemibold opacity-50">Only Ticket Booking App you need !!</Text>
            </View>


            <CustomButton title={"Let's get you Started!"} containerStyles={"mb-4 w-[90vw]"} handlePress={() => { }} />

          </View>



        </View>


    </SafeAreaView>
  );
}
