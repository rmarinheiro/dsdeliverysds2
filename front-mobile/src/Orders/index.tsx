import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,ScrollView, Alert } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { fetchOrders } from '../api';
import { Order } from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation, useIsFocused } from '@react-navigation/native';





function Orders() {
  const [orders,setOrders]=useState<Order[]>([]);
  const [isLoading,setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const fetchData = () =>{
    setIsLoading(true);
    fetchOrders()
    .then(response => setOrders(response.data))
    .catch(error => Alert.alert('Houve um erro ao buscar o pedido'))
    .finally(()=>setIsLoading(false));
  }

  useEffect(()=>{
    if(isFocused){
      fetchData();
    }
  },[isFocused]);

 

  const handleOnPress = (order:Order) => {
        navigation.navigate('OrderDetails',{
          order
        });
  }

    return (
      <>
        <Header />
        <ScrollView style={styles.container}>
          {isLoading?(
            <Text style={styles.container}>Buscando Pedidos...</Text>
          ):(
            orders.map(order =>(
              <TouchableWithoutFeedback 
                key={order.id} 
                onPress={()=> handleOnPress(order)}
                >
                  <OrderCard order={order}/>
                </TouchableWithoutFeedback>
            ))
          )}
        </ScrollView>
     </>
    );
  }

  const styles = StyleSheet.create({
      container :{
        paddingRight:'5%',
        paddingLeft:'5%',
      }
  });

 

  export default Orders;