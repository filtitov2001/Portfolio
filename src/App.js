import Main from './components/main';
import './App.css'
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {rdb} from "./firebase-config";

function App() {
  const [color, setColor] = useState('');

  useEffect(() => {
    onValue(ref(rdb, "color"), (snapshot) => {
      setColor("");
      const data = snapshot.val();
      if (data !== null) {
        setColor(data)
      }
    });
  }, []);

  document.documentElement.style.setProperty('--hue-color', color);

  return (
        <Main />
  );
}

export default App;
