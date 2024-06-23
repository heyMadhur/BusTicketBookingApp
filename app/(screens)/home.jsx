import { Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../../constants"
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import ShortTicket from "../../components/ShortTicket"
import data from "../../testdata/data"



const home = () => {

    const TicketOptions = ({ ticket, name, handlePress }) => {
        return (
            <TouchableOpacity onPress={handlePress}>
                <View className="mt-4 ml-4 w-16 h-16">
                    <View className="bg-primary w-16 h-16 flex justify-center items-center rounded-lg">
                        <Image source={ticket} resizeMode="contain" className="w-10" />
                    </View>
                    <Text className="text-center font-semibold">{name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView className="w-full h-full">

            {/* Header Component */}
            <View className="bg-primary h-[8vh] flex justify-center">
                <Text className="text-center text-4xl font-semibold text-white">BookMyBus</Text>
            </View>

            {/* Ticket Options Section */}
            <View className="h-[20vh]">
                <TicketOptions ticket={icons.ticket} name={'Bus\nTicket'} />
            </View>

            {/* View Tickets Section */}
            <View className="pt-3 pb-3 pl-4 pr-4 ">
                {/* Tickets and View all tickets  */}
                <View className="flex-row justify-between mb-3">
                    <Text className="font-bold text-lg">Tickets</Text>
                    <TouchableOpacity><Text className="text-lg opacity-50">View all tickets</Text></TouchableOpacity>
                </View>
                <ShortTicket color={data['ticket-1'].color} busNumber={data['ticket-1'].bus_number} fare={data['ticket-1'].fare} busRoute={data['ticket-1'].route} bookingDate={data['ticket-1'].booking_date} bookingTime={data['ticket-1'].booking_time} tickets={data['ticket-1'].tickets} startingStop={data['ticket-1'].starting_stop} endingStop={data['ticket-1'].ending_stop} handlePress={() => { }} />

            </View>

        </SafeAreaView>
    )
}

export default home