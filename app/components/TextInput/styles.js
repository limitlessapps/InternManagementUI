import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  input: {
    height: 45,
        borderBottomWidth: 1,
        fontSize: 16,
        paddingLeft: 2,
        color: "rgba(255,255,255,0.7)",
    
  },
  btnLogin:{
    height: 45,
    borderRadius: 45,
    backgroundColor: "#432000",
    justifyContent: "center",
  },
  textLogin:{
    color: "#fff",
    fontSize: 30,
    textAlign: "center"
  }

});

export default styles