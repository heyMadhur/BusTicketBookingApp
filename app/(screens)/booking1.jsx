import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from "../../components/FormField"
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

const BookingPage1 = () => {

  const [busColor, setBusColor] = useState("None")
  const [busNumber, setBusNumber] = useState("")
  const [busRoute, setBusRoute] = useState("")
  const [startingStop, setStartingStop] = useState("")
  const [endingStop, setEndingStop] = useState("")

  const onContinue= ()=>{
    console.log("Continue Pressed")
    if(busNumber == "" || busRoute =="" || startingStop=="" || endingStop=="" || busColor=="None"){
      Alert.alert("Missing Field", "You cannot continue unless you fill all the Fields!!")
    }
    router.push(`booking2?busColor=${busColor}&busNumber=${busNumber}&busRoute=${busRoute}&startingStop=${startingStop}&endingStop=${endingStop}`)
  }

  return (
    <SafeAreaView className="w-full h-full">
      {/* Header Component */}
      <View className="bg-primary h-[8vh] flex justify-center">
        <Text className="text-center text-4xl font-semibold text-white">Booking Ticket</Text>
      </View>

      {/* Form Fields */}
      <View >
        <FormField title={"Bus Number"} value={busNumber} handleChangeText={setBusNumber} placeholder={"Enter Bus Number (eg DL1PD5799)"} otherStyles={"mt-4  pl-4"} />
        <FormField title={"Bus Route"} value={busRoute} handleChangeText={setBusRoute}  placeholder={"Enter Bus Route (eg 740EXT)"} otherStyles={"mt-4  pl-4"} />
        <FormField title={"Starting Stop"} value={startingStop} handleChangeText={setStartingStop}  placeholder={"Enter Starting Stop"} otherStyles={"mt-4  pl-4"} />
        <FormField title={"Ending Stop"} value={endingStop} handleChangeText={setEndingStop}  placeholder={"Enter Ending Stop"} otherStyles={"mt-4  pl-4"} />
      </View>

      {/* Choose Color */}
      <View className="mt-6 p-4">
        <Text className="text-lg font-bold">Choose the Bus Color</Text>
        <View className="flex-row justify-center gap-10 p-2">
          <TouchableOpacity className="bg-red w-10 h-10 rounded-lg" onPress={()=>setBusColor('red')} />
          <TouchableOpacity className="bg-blue w-10 h-10 rounded-lg"  onPress={()=>setBusColor('blue')} />
          <TouchableOpacity className="bg-green w-10 h-10 rounded-lg"  onPress={()=>setBusColor('green')} />
          <TouchableOpacity className="bg-elecGreen w-10 h-10 rounded-lg"  onPress={()=>setBusColor('elecGreen')} />
        </View>
        <Text className="font-semibold mt-2 ml-2">Color Choosed: {busColor}</Text>
      </View>

      <CustomButton title={"Continue"} containerStyles={"ml-14 mr-14 mt-4"} handlePress={onContinue} />

      




    </SafeAreaView>
  )
}

export default BookingPage1