import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const ScreensLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="ticket" options={{headerShown: false}} />
                <Stack.Screen name="home" options={{headerShown: false}} />
                <Stack.Screen name="booking1" options={{headerShown: false}} />
                <Stack.Screen name="booking2" options={{headerShown: false}} />
            </Stack>
        </>
    )
}

export default ScreensLayout