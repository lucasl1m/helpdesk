import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";


import { Button } from "@components/Controllers/Button";
import { Input } from "@components/Controllers/Input";
import { Form, Title, Footer, Text } from "./styles";
import { Alert, View } from "react-native";
import { LinkButton } from "@components/Controllers/LinkButton";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleSignIn() {
    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Signed in with email and password!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("Esse e-mail já está em uso");
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("E-mail inválido");
        }

        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleForgotPassword() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          "Redefinir senha",
          "Enviamos um e-mail para você redefinir sua senha"
        );
      })
      .catch((error) => {
        setIsLoading(false);

        if (error.code === "auth/invalid-email") {
          Alert.alert("Redefinir senha", "E-mail inválido");
        }

        if (error.code === "auth/user-not-found") {
          Alert.alert(
            "Redefinir senha",
            "Não encontramos nenhum usuário com esse e-mail"
          );
        }

        console.error(error);
      });
  }

  return (
    <Form>
      <Title>Entrar</Title>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <View  
        style={{
          flexDirection: 'column',
          alignItems: 'flex-end',
          width: '100%',
        }}
      >
        <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
        <LinkButton
          title="Esqueceu sua senha ?"
          onPress={handleForgotPassword}
        />
      </View>
      <Button title="Entrar" onPress={handleSignIn} isLoading={isLoading} />

      <Footer>
        <Text>Não tem uma conta?</Text>
        <LinkButton
          title="Criar conta"
          onPress={() => navigation.navigate("register")}
        />
      </Footer>
    </Form>
  );
}
