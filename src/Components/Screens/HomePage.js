import React from "react";
import{
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
} from 'react-native';
import BottomNavigator from "../BottomNavigator";

const HomePage = ({navigation}) => {
    return(
        <SafeAreaView style= {StyleSheet.container}>
            <BottomNavigator/>
        </SafeAreaView>
    );
};
export default HomePage;

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height:'100%',
        justifyContent:'flex-end',
        backgroundColor:'#F7F8FA', 
    }
})