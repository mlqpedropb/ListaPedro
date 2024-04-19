import {useState} from 'react';
import {Text ,View} from 'react-native';
import {styles} from 'styles';
import { doCreateUserWithEmailAndPassword } from '../../config/Firebase/auth';



export default function NewUser() {
    const [userMail, setUserMaiL]= useState ('');
    const [userPass, setUserPass]= useState('');
    const [userRePass, setUserRePass] = useState(''); // confitmação de senha 

    function NewUser() {
        alert('Botão acionado!');
    }

    function NewUser() {
        if(userMail == '' || userPass ==='' || userRePass === ''){
            alert('Todos os capos devem ser prenchidos');
            return;
        }
        if(userPass != userRePass) {
            alert('a senha e a confirmação não são iguais');
            return;
        } else{
            doCreateUserWithEmailAndPassword()
            .then((UserCredencial) => {
                const user=UserCredencial.user;
                alert('O usuário' + userMail + ' foi criado. faça o login');
                ReadableStreamDefaultController.replace('/');
            })
            .catch((error) => {
                const errormessage = error.message;
                alert (erroMessage);
                router.replace('/');
            });
        }
    }
    return (
        <View style= {styles.container}>
            <Text style={styles.formTitle}>Novo Usuário </Text>
            <TextInput
            style ={styles.formInput}
            placeholder = "E-mail de usuario"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete= "email"
            />
            <TextInput
            style ={styles.formInput}
            placeholder = "Senha do Usuário"
            autoCapitalize="none"
            securetextEntry
            value={userPass}
            onChangetext={setUserPass}
            />
            <TextInput
            style ={styles.formInput}
            placeholder = "Repita a senha"
            autoCapitalize="none"
            securetextEntry
            value={userPass}
            onChangetext={setUserPass}
            />
            <Pressable
                style={styles.setButton}
                onpress={NewUser}
            >
                <Text style={styles.textButton}>
                    Cadastrar
                </Text>
            </Pressable>
        </View>
    );
}


