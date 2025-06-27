import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import {
  dashboardstyles,
  monitiorstyles,
} from '../styles/generalappstyles';

monitiorstyles
dashboardstyles

const Loadingscreen: React.FC = () => {



  return (
    <View style={ dashboardstyles .container}>

          <View style={{ margin:"6%", backgroundColor: "#E35817", height: "90%", width: "90%",borderRadius:20,justifyContent:"flex-start",alignItems:"center"}}>
              <Text  style={{color:"#fff", fontSize:15,fontWeight:"bold"}}>WELCOME TO </Text>
              <Text  style={{color:"#fff", fontSize:30,fontWeight:"bold",marginBottom:"24%"}}>SIGNLINK</Text>


<View style={{ height: "55%", width: "90%", borderRadius:20, backgroundColor:"#fff"}}>

                  
              </View>
              <Text  style={{color: "#fff", fontSize: 15, fontWeight: "bold",marginTop:"3%" }}>LOADING......</Text>

<Text  style={{color:"#fff", fontSize:15,fontWeight:"bold",marginTop:"10%"}}>WELCOME TO </Text>
              <Text  style={{color:"#fff", fontSize:30,fontWeight:"bold"}}>SIGNLINK</Text>

              
      </View>       

           
    </View>
  );
};


export default Loadingscreen;
