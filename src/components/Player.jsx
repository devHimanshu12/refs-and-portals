import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef()
  const [enteredName,setEnteredName] = useState(null)

  
  function handleName(){
    setEnteredName(playerName.current.value)
    playerName.current.value = ''

  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleName}>Set Name</button>
      </p>
    </section>
  );
}
