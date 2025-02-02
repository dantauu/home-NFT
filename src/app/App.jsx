import { createContext, useState } from "react"
import Home from "../pages/home/home"
import { Route, Routes } from "react-router-dom"
import Swap from "../pages/swap/swap"
import CreateNft from "../pages/create-nft/create-nft"


export const InputContext = createContext()
export const TrendingContext = createContext()

function App() {
  const [showTrending, setShowTrending] = useState('Top Solana NFT`s')
  const [activeInput, setActiveInput] = useState(false)
  const aciveInputFunc = () => {
		setActiveInput(prevState => !prevState)
	}


  return (
		<>
		<TrendingContext.Provider value={{ showTrending, setShowTrending }}>
			<InputContext.Provider value={{ activeInput, aciveInputFunc }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/swap' element={<Swap />} />
					<Route path='/create-nft' element={<CreateNft />} />
				</Routes>
			</InputContext.Provider>
		</TrendingContext.Provider>
		</>
	)
}

export default App
