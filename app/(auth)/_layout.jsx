import { Stack } from "expo-router";
import { useEffect } from "react";


export default function AuthLayout() {

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    // Hide the splash screen once the layout is rendered
    SplashScreen.hideAsync();
  }, []);

  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </>
  );
}
