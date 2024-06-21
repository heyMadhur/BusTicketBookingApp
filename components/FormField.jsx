import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base font-fmedium">{title}</Text>
            <View className=" w-[80vw] h-14 px-4 bg-white border rounded-full focus:border-secondary items-center flex-row">
                <TextInput
                    className="flex-1 font-fsemibold text-base w-full "
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#A8D2A0"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" } />
            </View>
        </View>
    )
}

export default FormField