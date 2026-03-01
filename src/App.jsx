
import { Suspense, useState } from 'react'
import './App.css'
import Available from './Component/Available/Available'
import Navbar from './Component/Navbar/Navbar'
import Selected from './Component/Selected/Selected'
// import coin from "./assets/"

const playersFetch = async () => {
  const res = await fetch("players.json")
  return res.json()
}
const playersPromise = playersFetch()
function App() {
  
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(1000000)
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="max-w-7xl mx-auto py-10">
        <div className="flex justify-between items-center py-4">
          <div className="">
            <h2 className='text-2xl font-bold'>Available Players</h2>
          </div>
          <div className="">
            <button onClick={() => setToggle(true)} className={`btn ${toggle ? "bg-orange-300" : ""}`}>Available</button>
            <button onClick={() => setToggle(false)} className={`btn ${!toggle ? "bg-orange-300" : ""}`}>Selected</button>
          </div>
        </div>
        {
          toggle ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Available availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></Available>
        </Suspense> : <Selected></Selected>
        }
        
      </div>
    </>
  )
}

export default App
