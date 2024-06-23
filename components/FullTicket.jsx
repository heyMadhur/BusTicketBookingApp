import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from "../constants"


const FullTicket = ({ color, busNumber, fare, busRoute, bookingDate, bookingTime, tickets, startingStop, endingStop, ticketId }) => {
  // console.log("Full Ticket: ", icons.qr)
  // console.log("Full Ticket: ", color)
  // console.log("Full Ticket: ", busNumber)
  // console.log("Full Ticket: ", fare)
  // console.log("Full Ticket: ", bookingDate)
  // console.log("Full Ticket: ", bookingTime)
  // console.log("Full Ticket: ", tickets)
  // console.log("Full Ticket: ", startingStop)
  // console.log("Full Ticket: ", endingStop)
  // console.log("Full Ticket: ", ticketId)

  const [showQr, setShowQr] = useState(false)

  return (
    <SafeAreaView className={`bg-${color} h-full`}>
      {/* Top Header */}
      <View className="flex-row  items-center justify-between pr-4 pt-2">
        <View className="flex-row items-center">
          <Image source={icons.cross} className="w-9 h-9 ml-2" resizeMode='contain' />
          <Text className="text-white text-lg font-semibold ml-2">Ticket</Text>
        </View>
        <Text className="text-white text-lg font-semibold underline">All Tickets</Text>
      </View>

      {/* Main Ticket & QR Code */}
      {
        (showQr === false) ? (
        
        <View className="bg-white pt-3 pb-4 pl-2 pr-2 rounded-lg m-4">

        <Text className="text-center font-semibold text-xl">Transport Dept. of Delhi</Text>

        {/* Bus Number & Fair */}
        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-lg">{busNumber}</Text>
          <Text className="text-lg">₹{fare * 0.9}</Text>
        </View>

        {/* Horizontal Line */}
        <View className="w-full h-px bg-black mt-2" />

        {/* Bus Route & Fare */}
        <View className="flex-row justify-between items-center mt-3">
          <View>
            <Text>Bus Route</Text>
            <Text className="text-lg ">{busRoute}</Text>
          </View>
          <View>
            <Text>Fare</Text>
            <Text className="text-lg font-semibold">₹{fare}</Text>
          </View>
        </View>

        {/* Booking Time & Tickets */}
        <View className="flex-row justify-between items-center mt-3">
          <View>
            <Text>Booking Time</Text>
            <Text className="text-lg">{`${bookingDate} | ${bookingTime}`}</Text>
          </View>
          <View>
            <Text>Tickets</Text>
            <Text className="text-lg text-right">{tickets}</Text>
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

        {/* Ticket Id */}
        <Text className="mt-2 text-center mb-4">{ticketId}</Text>

        {/* Show QR Code Button */}
        <View>
          <TouchableOpacity className="border-[1.5px] border-green flex-row items-center justify-center rounded-lg pt-1 pb-1" onPress={()=>setShowQr(!showQr)}>
            <Image source={icons.qr} resizeMode='contain' className="w-7 h-7" />
            <Text className="text-center text-green font-semibold ml-2 text-[15px]">Show QR code</Text>
          </TouchableOpacity>
        </View>
      </View>
        )
        :
        (
          <View className="w-full h-full flex-1 justify-center items-center">
            <Image source={images.qr} resizeMode='contain' className="w-[92vw] " />
          </View>
        )
}

    </SafeAreaView>
  )
}

export default FullTicket