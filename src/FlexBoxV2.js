import React from 'react'
import {View,StyleSheet} from 'react-native'

export default () => {
    return (
        <View style={styles.FlexV4}>
            <View style={styles.V0}/>
            <View style={styles.V1}/>
            <View style={styles.V2}/>
            <View style={styles.V3}/>
            <View style={styles.V4}/>
        </View>
    );
}

const styles = StyleSheet.create({
    FlexV4:{
        // width: 100,
        backgroundColor:'black',
        flexGrow:1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        
    },
    V0:{
        backgroundColor:'#36c9a7',
        width: 30,
        height: 30,
    },
    V1:{
        backgroundColor:'#ff801a',
        width: 40,
        height: 40,
    },
    V2:{
        backgroundColor:'#dd22c1',
        width: 50,
        height: 50,
    },
    V3:{
        backgroundColor:'#fa0030',
        width: 60,
        height: 60,
    },
    V4:{
        backgroundColor:'#054600',
        width: 70,
        height: 70,
    }
})