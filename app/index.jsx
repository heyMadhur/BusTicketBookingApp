import { Image, Text, View } from "react-native";
import {images} from "../constants"
import bus1 from "../assets/images/bus1.jpg"

export default function Index() {
  console.log(images.bus1)
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Hello</Text>
      {/* <Image src={images.bus1} resizeMode="contain" /> */}
      {/* <Image source={bus1} resizeMode="contain"  /> */}
      
      <Image className="w-full" source={images.bus2}  resizeMode="contain"      />
      <Text>Buffalo</Text>

    </View>
  );
}
