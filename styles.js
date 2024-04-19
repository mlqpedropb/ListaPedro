import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
    },

    formTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'bluewviolet',
        margin: 10,
    },
    formInput: {
        borderColor: 'blueciolet',
        borderWidth: 1,
        borderRadius: 10,
        fortSize: 22,
        width: '80%',
        padding: 10,
        margin: 10,
    },

    formButton: {
        backgroundColor: 'blueviolet',
        width: '80%',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },

    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    subButton:{
        padding:10,
    },

    subTextButton: {
        color:'blueviolet',
    },
    
});
