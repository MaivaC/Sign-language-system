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
    opacity: 1
  },
  description: {
    flex:3,
    color:colors.primary
  },

  // Top Box (40% of screen)
  box1: {
    flex: 1.5,
    backgroundColor: colors.primary,
    flexDirection:"row",
    justifyContent: 'space-evenly',


    
  },
  menuclass: {
    position: 'absolute',
    left: 0,              // Aligns the element to the left edge
    top: '50%',           // Optional: center vertically
    transform: [{ translateY: -25 }], // Optional: fine-tune vertical centering
    zIndex: 10,           // Ensures it stays on top
    padding: 10,          // Optional: spacing
  },
  Text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 16,
  },

  // Middle Box (50% of screen)
  box2: {
    flex: 14,
    alignItems: 'center',
  },
  Text2: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.background,
    paddingHorizontal: 16,
 
  },

  // Subbox inside box2


  // Bottom Matrix Box (10% of screen)
  matrixbox: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    height:315.5
  },

  bottomBar: {
    position: 'absolute',     // <-- key change
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',


    paddingHorizontal: 10,
    zIndex: 10,               // ensures it's on top
  },
  
  dotsmall: {
    width: 35,
    height: 35,
    borderRadius: 17,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    alignContent:"center"
    
  },
  dotlarge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.background,

  },
  iconButton: {
    backgroundColor: '#F5DEB3', // Light brown / wheat
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  }
});

