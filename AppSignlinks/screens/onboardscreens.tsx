import React from 'react';

import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { dashboardstyles } from '../styles/generalappstyles';

const Onboardingscreen: React.FC = () => {



  return (
      <View style={dashboardstyles.container}>
          <Text style={{color:"#000",textAlign:"center",fontSize:40, fontWeight:"bold",marginTop:"10%"}}>
              SIGNLINK
          </Text>

         <TouchableOpacity style={{ flex:10 ,margin:"10%", marginTop:20, backgroundColor: "#E35817",borderRadius:20,justifyContent:"flex-start",alignItems:"center"}}><View style={{ flex:10 , marginBottom:0, backgroundColor: "#E35817",borderRadius:20,justifyContent:"flex-start",alignItems:"center"}}>
   
  
              <Text style={{ fontSize: 26, fontWeight: "bold", color: "#fff" }}>SIGN-TO-TEXT</Text>
          </View></TouchableOpacity> 
          <TouchableOpacity style={{ flex: 12, margin: "10%", marginBottom: 43, backgroundColor: "#E35817", borderRadius: 20, justifyContent: "flex-start", alignItems: "center" }}>
              <View style={{ flex: 10, margin: "10%", backgroundColor: "#E35817", borderRadius: 20, justifyContent: "flex-start", alignItems: "center" }}>
               
              <Text style={{ fontSize: 26, fontWeight: "bold", color: "#fff" }}>AUDIO-TO-TEXT</Text>
              </View></TouchableOpacity>
          
        
           
    </View>
  );
};


export default Onboardingscreen;
