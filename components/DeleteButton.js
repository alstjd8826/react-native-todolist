import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'
const DeleteButton = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
        >
            <Text style={styles.text}>
                삭제
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    button: {
        width: 60,
        height: 60,
        backgroundColor: '#FE5746',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius:8,
    },
    text: {
        color: '#FFFFFF'
    }
}
export default DeleteButton