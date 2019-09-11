import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
   backgroundImage:{
       flex:1,
       width:null,
       height:null,
       justifyContent:'center'
   },
   textLogin:{
       paddingTop:50,
       textAlign:'center',
       fontSize:29,
   },
   textButton:{
    color:'$white',
   },
   viewButton:{
    padding:50,
    paddingBottom:0,
   },
   button:{
    alignItems:"center",
    justifyContent:"center",
    textAlign: "center",   
   },
   textSwitch:{
    backgroundColor:'$white',
    color:'$lightSeaGreen',
    textAlign:'center',
    alignItems:"center",
    justifyContent:"center",
    padding:16,   
   },
   addTask:{
    paddingTop:20,
    paddingLeft:10,
    color:'#20b2aa'
   },
   image:{
       borderRadius:50,
       width:60,
      height:60,   
   },
   homepage:{
       
       padding:20,
   }
});

export default styles;


