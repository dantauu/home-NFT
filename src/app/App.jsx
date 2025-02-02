import Footer from "../components/components-home/footer/footer"
import { createContext, useState } from "react"
import Home from "../pages/home/home"
import { Route, Routes, useLocation } from "react-router-dom"
import Swap from "../pages/swap/swap"
import CreateNft from "../pages/create-nft/create-nft"
import Header from "../components/components-home/header/header"



export const InputContext = createContext()
export const TrendingContext = createContext()

function App() {
  const location = useLocation()
  const [showTrending, setShowTrending] = useState('Top Solana NFT`s')
  const [activeInput, setActiveInput] = useState(false)
  const aciveInputFunc = () => {
		setActiveInput(prevState => !prevState)
	}


  return (
		<>
		<TrendingContext.Provider value={{ showTrending, setShowTrending }}>
			<InputContext.Provider value={{ activeInput, aciveInputFunc }}>
			{location.pathname !== '/swap' && <Header />}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/swap' element={<Swap />} />
					<Route path='/create-nft' element={<CreateNft />} />
				</Routes>
			{location.pathname !== '/swap' && <Footer /> }
			</InputContext.Provider>
		</TrendingContext.Provider>
		</>
	)
}

export default App
