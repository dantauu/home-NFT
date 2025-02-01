import { createContext, useState } from "react"
import Home from "../pages/home/home"
import { Route, Routes } from "react-router-dom"
import Swap from "../pages/swap/swap"


export const InputContext = createContext()

function App() {
  const [activeInput, setActiveInput] = useState(false)
  const aciveInputFunc = () => {
		setActiveInput(prevState => !prevState)
	}


  return (
		<>
			<InputContext.Provider value={{ activeInput, aciveInputFunc }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path="/swap" element={<Swap />} />
				</Routes>
			</InputContext.Provider>
		</>
	)
}

export default App
