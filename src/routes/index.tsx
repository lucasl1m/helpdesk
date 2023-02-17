import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";

import { Home } from "@screens/Home";
import { AuthRoutes } from "./auth.routes";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      {user ? <Home /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
