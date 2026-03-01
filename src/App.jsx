
import { Suspense } from 'react'
import './App.css'
import Available from './Component/Available/Available'
import Navbar from './Component/Navbar/Navbar'
import Selected from './Component/Selected/Selected'
// import coin from "./assets/"

const playersFetch = async () => {
  const res = await fetch("players.json")
  return res.json()
}
function App() {
  const playersPromise = playersFetch()
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto py-10">
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Available playersPromise={playersPromise}></Available>
        </Suspense>
        <Selected></Selected>
      </div>
    </>
  )
}

export default App
