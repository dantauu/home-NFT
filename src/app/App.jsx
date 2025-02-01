import { createContext, useState } from "react"
import Home from "../pages/home/home"


export const InputContext = createContext()

function App() {
  const [activeInput, setActiveInput] = useState(false)
  const aciveInputFunc = () => {
		setActiveInput(prevState => !prevState)
	}


  return (
		<>
			<InputContext.Provider value={{ activeInput, aciveInputFunc }}>
				<Home />
			</InputContext.Provider>
		</>
	)
}

export default App
