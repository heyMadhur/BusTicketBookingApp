import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons, images } from '../constants'

const ShortTicket = ({ color, busNumber, fare, busRoute, bookingDate, bookingTime, tickets, startingStop, endingStop, handlePress }) => {
  console.log(color)
  return (
    <View className="rounded-xl" style={{ elevation: 5 }}>

      <TouchableOpacity activeOpacity={1} onPress={handlePress}>
        <View className="rounded-xl overflow-hidden bg-white">
          {/* Top Bus Color Line */}
          <View className={`w-full h-[8px] bg-${color}`} />

          <View className="pl-3 pr-3 pb-4 pt-4">

            {/* Bus Route, Bus number and Success Info */}
            <View className="flex-row justify-between items-center pl-2">

              <View className="flex-row">
                {/* Bus Icon */}
                <View className={`w-11 h-11 bg-${color} rounded-full flex items-center justify-center`}>
                  <Image source={icons.bus} resizeMode='contain' className="w-3/5" />
                </View>
                {/* Bus Route & Bus Number */}
                <View className="ml-2 mt-1">
                  <Text className="font-bold">{busRoute}</Text>
                  <Text className="opacity-70 text-xs">{busNumber}</Text>
                </View>
              </View>

              <Text className="bg-green pt-1 pb-1 pl-3 pr-3 rounded-full text-white">Success</Text>
            </View>

            {/* Starting and Ending Stop */}
            <View className="flex-row items-center pt-3 pb-3 pl-2">
              <Text className="font-semibold">{startingStop}{"  "}</Text>
              <Image source={images.rightArrow} resizeMode='contain' className="w-7 h-7 " />
              <Text className="font-semibold">{"  "}{endingStop}</Text>
            </View>

            {/* Line */}
            <View className={`w-full h-[1px] bg-black opacity-20`} />

            {/* Date, Time and Price */}
            <View className="flex-row justify-between pt-3 pl-2">
              {/* Date & Time */}
              <Text className="opacity-70">{bookingDate}{" | "}{bookingTime}</Text>
              <Text className="font-bold">₹{fare}{" x "}{tickets}{" = "}₹{(fare * tickets * 0.9)}</Text>
            </View>

          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ShortTicket