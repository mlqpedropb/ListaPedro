import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text,TextInput, View } from 'react-native';
import {styles} from 'styles';
import { useState } from 'react';


export default function App() {
  const [userMail, setUserMail] = useState(''); // mandara os dados para o firebase 
  const [userPass, setUserPass] = useState('');  //captura as informaçãoes e autualizar a variavel principal 
  const router = userouter; 
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login no Sistema </Text>
      <StatusBar style="auto" />
      <TextInput style={styles.formInput}
        placeholder="Informe o E-mail"
        keyboardType="email-address"
        autoCapitalize="nome"
        autoComplete="email"
        />
      <TextInput style={styles.formInput}
        placeholder="Informe a Senha"
        autoCapitalize="none"
        secureTextEntry/>
      <Pressable style={styles.textButton}>
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Esqueci a senha </Text>
        </Pressable>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Novo usuario</Text>
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


