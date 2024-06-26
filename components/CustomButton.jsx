import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`justify-center items-center p-2 rounded-lg bg-secondary ${containerStyles} ${isLoading ? 'opacity-50' : ''} `}
            disabled={isLoading} >
            <Text className={`font-psemibold text-lg text-white ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton