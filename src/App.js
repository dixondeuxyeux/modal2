import React, { useState } from 'react'
import './App.css'


function App() {
  const [modalState, setModalState] = useState(false)

  const toggleModalState = () => {
    setModalState(!modalState)
  }

  return (
    <div className="App">
      <div className={`modalBackground modalShowing-${modalState}`}>
        <div className="modalInner">
          <div className="modalImage">
          <img
              src="https://images.unsplash.com/photo-1611166983448-55084c2e63b2?ixid=MXwx
              MjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1
              &auto=format&fit=crop&w=634&q=80" alt="photo"
            />
          </div>
          <div className="modalText">
            <h2>Studio Portraits</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              harum qui perferendis error molestiae ab in expedita? Quaerat
              molestias adipisci maiores quam incidunt inventore, minima esse
              ratione exercitationem. Porro, illo?
            </p>
            <form action="">
              <button>Join now!</button>
            </form>
            <button className="exitButton" onClick={() => toggleModalState()}>
              Exit Pop-Up
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => toggleModalState()}>Open Modal</button>
    </div>
  )
}

export default App