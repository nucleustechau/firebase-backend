import firebaseApp from "../firebase"
const   Login = (username, password) => {
  console.log(firebaseApp.auth().signInWithEmailAndPassword(username, password))
}

export default Login
