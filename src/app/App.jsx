import Footer from "../components/components-home/footer/footer"
import { createContext, useState } from "react"
import Home from "../pages/home/home"
import { Route, Routes, useLocation } from "react-router-dom"
import Swap from "../pages/swap/swap"
import CreateNft from "../pages/create-nft/create-nft"
import Header from "../components/components-home/header/header"
import NewCollection from "../pages/new-collection/new-collection"
import GenerateCollection from "../pages/generate-collection/generate-collection"



export const InputContext = createContext()
export const TrendingContext = createContext()
export const DropHeaderContext = createContext()

function App() {
	const location = useLocation()
  	const [showTrending, setShowTrending] = useState('Top Solana NFT`s')
  	const [activeInput, setActiveInput] = useState(false)
	const [dropHeader, setDropHeader] = useState(false)
  	const aciveInputFunc = () => {
		setActiveInput(prevState => !prevState)
	}


  return (
		<>
		<TrendingContext.Provider value={{ showTrending, setShowTrending }}>
			<InputContext.Provider value={{ activeInput, aciveInputFunc }}>
			<DropHeaderContext.Provider value={{dropHeader, setDropHeader}}>
				{location.pathname !== '/swap' && <Header />}
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/swap' element={<Swap />} />
						<Route path='/create-nft' element={<CreateNft />} />
						<Route path='/new-collection' element={<NewCollection />} />
						<Route path='/generate-collection' element={<GenerateCollection />} />
					</Routes>
				{location.pathname !== '/swap' && <Footer /> }
				</DropHeaderContext.Provider>
			</InputContext.Provider>
		</TrendingContext.Provider>
		</>
	)
}

export default App
