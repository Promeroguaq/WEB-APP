import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';

const ButtomNavigator = () => {
  return (
    <View style={Styles.bottomBar}>
      <TouchableOpacity style={Styles.barItemView}>
        <Icon
         name={'home'}
          type={'material-community'}
          color={'#696969'}
          size={30}
        />
        <text>Home</text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.barItemView}>
        <Icon
         name={'home'}
          type={'material-community'}
          color={'#696969'}
          size={30}
        />
        <text>Paquetes</text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.barItemView}>
        <Icon
          name={'home'}
          type={'material-community'}
          color={'#696969'}
          size={30}
        />
        <text>Actividades</text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.barItemView}>
        <Icon
         name={'home'}
          type={'material-community'}
          color={'#696969'}
          size={30}
        />
        <text>Comprar</text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtomNavigator;

const Styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: "#f2f7fcff",
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  barItemView: {
    color: "#696969",
    marginTop: 3,
  },
});
