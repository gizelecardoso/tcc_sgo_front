import React from 'react';
import UpdateRole from './src/Views/Role/UpdateRole'

const App = () => {
  return(
    <UpdateRole />
  );
}

export default App;
//export default function App(){
//   constructor() {
//     super()
//     this.state = {
//       email: '',
//       senha: '',
//       data: [{item: 1},{item: 2},{item: 3},{item: 4}],
//       dadosAPI: []
//     }
//   }

//   clicou = (email, senha) => {
//     console.log(email, senha);
//   }

//   // loadUser = () => {
//   //   fetch("http://localhost:3000/officials", { mode: 'no-cors' }).then(response => response.json).then( response => { this.setState({data: response})})
//   // }

//   componentDidMount(){
//     axios.get(
//       'http://localhost:3000/officials'
//       ).then(response => {
//           console.log("Success ========>", response);
//           //data: response
//           //let dadosAPI = response.data;
//           this.setState({dadosAPI: response.data})
//           console.log(dadosAPI);
//       })
//       .catch(error => {
//           console.log("Error ========>", error);
//       }
//     )
//   }


//   render() {
//     const {dadosAPI} = this.state;
//     return (
//       // <View>
//       //   {
//       //     dadosAPI.map((item) =>( 
//       //       <View style={styles.itemNaLista} key={item.number}>
//       //         <Text>
//       //           {item.official_name + ' - ' + item.login_name}
//       //         </Text>
//       //       </View>
//       //     ))
//       //   }
//       // </View>

//       <FlatList 
//         data={dadosAPI}
//         keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) =>
//             <View>
//               <Text> `{item.official_name} - {item.login_name}`</Text>
//             </View>
//           }
//       />

//       // <View>
//       //   <Text>{data.map(dt => <div>{dt.official_name}</div>)}</Text>
//       // </View>
//       // <View>
//       //   <FlatList
//       //   data={this.state.dadosAPI}
//       //   renderItem={({item}) => {
//       //     <View>
//       //       <Text>{item}</Text>
//       //     </View>

//       //   }}
//       //   keyExtractor={ item => item.official_name}
//       //   />

//       // </View>
//       // <View style={styles.container}>
//       //   <ImageBackground
//       //     source={require('./assets/40-0.jpg')}
//       //     style={styles.imagemFundo}
//       //   >
//       //     <Image 
//       //       source={require('./assets/logo.png')}
//       //       style={styles.logo}
//       //     />
//       //     <TextInput 
//       //       style={styles.input}
//       //       placeholder="Digite seu email"
//       //       value={this.state.email}
//       //       onChangeText={(email) => this.setState({email})}
//       //     />
//       //     <TextInput 
//       //       style={styles.input}
//       //       secureTextEntry={true}
//       //       placeholder="Digite sua senha"
//       //       value={this.state.senha}
//       //       onChangeText={(senha) => this.setState({senha})}
//       //     />
    
//       //     <TouchableOpacity
//       //       style={styles.botao}
//       //       onPress={this.signIn}
//       //     >
//       //       <Text style={styles.botaoText} >Login</Text>
//       //     </TouchableOpacity>
//       //     {!!this.state.errorMessage && <Text>{this.state.errorMessage}</Text>}
//       //   </ImageBackground>
//       // </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2c3e50',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     borderRadius: 100
//   },
//   input: {
//     marginTop: 10,
//     padding: 10,
//     width: 300,
//     height: 50,
//     backgroundColor: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     borderRadius: 3
//   },
//   botao: {
//     width: 300,
//     height: 42,
//     backgroundColor: '#3498db',
//     marginTop: 10,
//     borderRadius: 4,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   botaoText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff'
//   },
//   imagemFundo: {
//     flex: 1,
//     resizeMode: 'cover',
//     width: 500,
//     //opacity: 0.1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   itemNaLista: {
//     padding: 20,    
//     backgroundColor: '#CCC',    
//     borderColor: 'black',    
//     borderWidth: 1,    
//     marginBottom: 8,    
//     borderRadius: 8,    
//     alignItems: 'center'
//   }
// });
