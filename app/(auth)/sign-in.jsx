import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'


const SignIn = () => {
    return (
        <SafeAreaView className="bg-white h-full">
            {/* Main Component */}
            <View className="flex-1 items-center ">
                {/* Header Image */}
                <Image
                    className="w-[500px] h-[300px] "
                    resizeMode="contain"
                    source={images.login} />

                <View className=" w-full flex-1 items-center">
                    {/* Heading */}
                    <Text className="pt-2 text-4xl font-pbold  pl-4">Sign In</Text>
                    <Text className="text-lg font-fsemibold opacity-50  pl-4">Login before using app !!</Text>

                    {/* Form Fields */}
                    <FormField title={"Email"} placeholder={"Enter your Email"} otherStyles={"mt-4  pl-4"} keyboardType="email-address" />
                    <FormField title={"Password"} placeholder={"Enter your Password"} otherStyles={"mt-4  pl-4"} />

                    {/* Sign-In Button */}
                    <CustomButton title={"Signup"} containerStyles={"mb-4 mt-6 w-[90vw]"} />
                </View>

                {/* LOG
                IN                                      TO
                WITH                                    DO 
                GOOGLE  */}

            </View>


            {/* Got to Sign Up */}
            <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-sm font-pregular">Don't have an account, Fr?</Text>
                <Link href="/sign-up" className='text-sm font-psemibold text-secondary'>Sign Up</Link>
            </View>
        </SafeAreaView>
    )
}

export default SignIn