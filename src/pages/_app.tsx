import { useState, useEffect } from 'react';
import firebase from "../firebase/config"
import '../styles/globals.css'
import Navigation from './navigation'



export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  return <>
      <Navigation props = {user} />
      <Component {...pageProps} />
      
  </>
}
