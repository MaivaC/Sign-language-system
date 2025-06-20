import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import { dashboardstyles } from '../styles/generalappstyles';

const SigntoText: React.FC = () => {



  return (
      <View style={dashboardstyles.container2}>

<Text style={{color:"#000",textAlign:"center",fontSize:40, marginTop:"2%" ,fontWeight:"bold"}}>
              SIGNLINK
          </Text>
<View style={{  width:"83%",height:"65%", margin:"5%",marginLeft:"10%", backgroundColor: "#D9D9D9", borderRadius:30,justifyContent:"flex-start",alignItems:"center"}}>
  

              <Text style={{ fontSize: 26, fontWeight: "bold", color: "#fff" }}>SIGN-TO-TEXT</Text>
          </View>
   
          
        
           
    </View>
  );
};


export default SigntoText;