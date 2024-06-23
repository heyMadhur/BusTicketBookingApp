import { View, Text } from 'react-native'
import React from 'react'
import FullTicket from '../../components/FullTicket'
import data from "../../testdata/data"


const Ticket = () => {
  return (
    <View>
      <FullTicket color={data['ticket-1'].color} busNumber={data['ticket-1'].bus_number} fare={data['ticket-1'].fare} busRoute={data['ticket-1'].route} bookingDate={data['ticket-1'].booking_date} bookingTime={data['ticket-1'].booking_time} tickets={data['ticket-1'].tickets} startingStop={data['ticket-1'].starting_stop} endingStop={data['ticket-1'].ending_stop} ticketId={data['ticket-1'].id} />
    </View>
  )
}

export default Ticket