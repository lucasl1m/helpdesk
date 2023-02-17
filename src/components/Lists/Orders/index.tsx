import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import firestone from "@react-native-firebase/firestore";

import { Load } from "@components/Animations/Load";
import { Filters } from "@components/Controllers/Filters";
import { Order, OrderProps } from "@components/Controllers/Order";
import { Container, Header, Title, Counter } from "./styles";

export function Orders() {
  const [status, setStatus] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<OrderProps[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const subscriber = firestone()
      .collection("orders")
      // Se o status for "all", não filtra por status
      .where("status", status === "all" ? "!=" : "==", status)
      .onSnapshot((querySnapshot) => {
        const list: OrderProps[] = [];

        querySnapshot.forEach((documentSnapshot) => {
          list.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          } as OrderProps);
        });

        setOrders(list);
        setIsLoading(false);
      });
  }, [status]);

  return (
    <Container>
      <Filters onFilter={setStatus} status={status}/>

      <Header>
        <Title>
          {status === "all" ? "Todos os chamados" : status === "open" ? "Chamados abertos" : "Chamados encerrados"}
        </Title>
        <Counter>{orders.length}</Counter>
      </Header>

      {isLoading ? (
        <Load />
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Order data={item} />}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
      )}
    </Container>
  );
}
