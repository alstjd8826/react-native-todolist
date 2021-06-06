import React from 'react'
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                메모
            </Text>
            <TouchableOpacity style={styles.button}>
                <FontAwesome name="plus" color='#F5C630' size={20} />
            </TouchableOpacity>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop: 20,
        paddingBottom:20,
        marginLeft:16,
        marginRight:16,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
    },
    title:{
        color:"#212121",
        fontSize:32,
        fontWeight:'600'
    },
    button: {
        borderWidth: 1,
        borderColor: '#F5C630',
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight : 8,
        borderRadius: 14,
        paddingTop: Platform.select({
            ios: 2,
            android: 0,
            web:0,
        }),
        paddingLeft: Platform.select({
            ios: 1,
            android: 0,
            web:0,
        })
    },
})

export default Header