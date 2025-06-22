import { StyleSheet } from 'react-native';

import colors from './primary/primary';

export const mainstyles = StyleSheet.create({
    container: {
flex:1,
alignContent: "center",
     justifyContent:"center",
        gap: 6,
        fontSize: 20,
      fontWeight:"bold"
    },
    content: {
      marginTop: 6,
      marginLeft: 24,
    },
  });
  
  export const monitiorstyles = StyleSheet.create({

    subbox: {
     backgroundColor: colors.primary,
     flexDirection: 'column',
 alignItems:'center',
     marginTop: 15,
 
     marginRight:"5%",
     width: '48%',
     height: '90%',
       borderRadius: 20,
 
   },
 
   container: {
     flex: 1, // Fills 100% of screen height
     flexDirection: 'column',
     width: '100%',
     height:'100%'
   },
 
   description: {
     flex:2,
     color:colors.primary,
     
   },
   boxcontact: {
     flex: 14,
     marginLeft: '1%',
     marginRight: '8%',
     flexDirection:'column',
     marginTop:"4%"
   },
   aboutboxcontact: {
     flex: 14,
     marginLeft: '1%',
     marginRight: '8%',
     flexDirection:'column',
 
   },
   box2: {
     flex: 14,
     marginLeft: '8%',
     marginRight: '8%',
     flexDirection:'column'
    
   },
   smallwhite: {
     marginTop:"15%",
     width: "30%",
     height: "25%",
     borderRadius:11,
     backgroundColor:colors.background
   },
 
   bottomBoxback: {
      marginLeft:"2%",
     width: "105%",
     height: "62%",
     borderRadius:15,
     backgroundColor: colors.primary,
     flexDirection:"column"
   },
 
   bottomaboutBoxback: {
     marginLeft:"5%",
    width: "97%",
    height: "55%",
    borderRadius:15,
    backgroundColor: colors.primary,
    flexDirection:"column"
  },
   horizontaldisplaybox: {
     backgroundColor: colors.background,
     width: "93%",
     height: "23%",
     marginTop:"5%",
     marginLeft: "3%",
     flexDirection:"row",
    alignItems:"center",
     borderRadius:15
   },
   smallcube: {
     backgroundColor: colors.primary,
     width: "18%",
     height: "54%",
 
     marginLeft: "5%",
     borderRadius:15,
   
   },
   newsmallCube: {
     backgroundColor: colors.primary,
     width: "10%",
     height: "30%",
     borderRadius: 8,
     marginBottom: "8%",
     
   }
  
  
   
 });
 
 
  

 export const dashboardstyles = StyleSheet.create({
  container: {
    flex: 1, // Fills 100% of screen height
    flexDirection: 'column',
    width: '100%',
    height: "100%",
    backgroundColor: colors.background,
     opacity: 1,
     justifyContent: "center",
    alignContent:"center"
  },
  description: {
    flex:3,
    color:colors.primary
  },

  

  container2: {
    flex: 1, // Fills 100% of screen height
    flexDirection: 'column',
    width: '100%',
    height: "100%",
    backgroundColor: colors.background,
     opacity: 1,
     justifyContent: "flex-start",
    alignContent:"center"
  },




});

