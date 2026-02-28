
import './App.css'
import logo from "./assets/logo.png"
// import coin from "./assets/"
function App() {

  return (
    <>
    <div class="navbar shadow-sm max-w-7xl mx-auto">
  <div class="flex-1">
    <a class=" text-xl">
      <img className='w-12' src={logo} alt="" />
    </a>
  </div>
  <div class="flex-none">
    <div className="">
      <span className='mr-2'>50000000</span>
      <span>Coin</span>
      {/* <img src={} alt="" /> */}
    </div>
    {/* <ul class="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul> */}
  </div>
</div>
    </>
  )
}

export default App
