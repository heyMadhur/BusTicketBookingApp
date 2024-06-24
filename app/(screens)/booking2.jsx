import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'
import CustomButton from '@/components/CustomButton'

const BookingPage2 = () => {

  // const { busColor, busNumber, busRoute, startingStop, endingStop } = useLocalSearchParams()

  const [ticketPrice, setTicketPrice] = useState(5)
  const [tickets, setTickets] = useState(1)

  const today = new Date();
  const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  const time = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })


  const busColor = "blue"
  const busNumber = "DL1PD7529"
  const busRoute = "740EXT"
  const startingStop = "Jheel Khurenja"
  const endingStop = "Uttam Nagar Terminal"




  console.log(busColor)
  console.log(busNumber)
  console.log(busRoute)
  console.log(startingStop)
  console.log(endingStop)

  return (
    <SafeAreaView>
      {/* Header Component */}
      <View className="bg-primary h-[8vh] flex justify-center">
        <Text className="text-center text-4xl font-semibold text-white">Booking Ticket</Text>
      </View>

      {/* Main Ticket Section */}
      <View className="m-4 mt-10 rounded-lg" style={{backgroundColor: 'rgb(217,217,217)'}}>

        {/* Heading of Ticket: Date, time, Bus Number */}
        <View className={`flex-row justify-between bg-${busColor}`}>
          <Text className="text-white">{date} | {time}</Text>
          <Text className="text-white">{busNumber}</Text>
        </View>

        {/* Bus Icon, Bus Route and Bus Number */}
        <View className="flex-row">
          {/* Bus Icon */}
          <View className={`w-11 h-11 bg-${busColor} rounded-full flex items-center justify-center`}>
            <Image source={icons.bus} resizeMode='contain' className="w-3/5" />
          </View>
          {/* Bus Route & Bus Number */}
          <View className="ml-2 mt-1">
            <Text className="font-bold">{busRoute}</Text>
            <Text className="opacity-70 text-xs">{busNumber}</Text>
          </View>
        </View>

        {/* Starting Stop */}
        <View className="mt-2">
          <Text>Starting stop</Text>
          <Text className="text-lg">{startingStop}</Text>
        </View>

        {/* Ending Stop */}
        <View className="mt-2 mb-1">
          <Text>Ending stop</Text>
          <Text className="text-lg">{endingStop}</Text>
        </View>

        <CustomButton title={"Select Fare"} containerStyles={"w-[60vw]"} />

        {/* Ticket Price */}
        <View>
          <View className="flex-row justify-center gap-10 p-2">
            <TouchableOpacity className="bg-secondary-light w-10 h-10 rounded-lg flex justify-center items-center" onPress={() => setTicketPrice(5)} ><Text className="text-white font-bold">5</Text></TouchableOpacity>
            <TouchableOpacity className="bg-secondary-light w-10 h-10 rounded-lg flex justify-center items-center" onPress={() => setTicketPrice(10)} ><Text className="text-white font-bold">10</Text></TouchableOpacity>
            <TouchableOpacity className="bg-secondary-light w-10 h-10 rounded-lg flex justify-center items-center" onPress={() => setTicketPrice(15)} ><Text className="text-white font-bold">15</Text></TouchableOpacity>
            <TouchableOpacity className="bg-secondary-light w-10 h-10 rounded-lg flex justify-center items-center" onPress={() => setTicketPrice(25)} ><Text className="text-white font-bold">25</Text></TouchableOpacity>
          </View>
          <Text>Ticket Price: {ticketPrice}</Text>
        </View>

        {/* Number Of Tickets Section */}
        <View className="flex-row justify-between items-center">
          <Text>Number of Tickets</Text>
          <View className="flex-row justify-between items-center gap-3">
            <TouchableOpacity className="bg-secondary-light w-5 h-5 rounded-full flex justify-center items-center" onPress={()=>{if(tickets>1)setTickets(tickets-1)}}><Text>-</Text></TouchableOpacity>
            <Text className="text-lg">{tickets}</Text>
            <TouchableOpacity className="bg-secondary-light w-5 h-5 rounded-full flex justify-center items-center" onPress={()=>{setTickets(tickets+1)}}><Text>+</Text></TouchableOpacity>
          </View>
        </View>

        {/* Amount Payable */}
        <View className="flex-row justify-between items-center">
          <Text>AMOUNT PAYABLE</Text>
          <Text>10% off</Text>
          <Text className="font-bold text-lg">₹{ticketPrice*tickets*0.9}</Text>
        </View>

      </View>

      <CustomButton title={"Pay"} />

    </SafeAreaView>
  )
}

export default BookingPage2