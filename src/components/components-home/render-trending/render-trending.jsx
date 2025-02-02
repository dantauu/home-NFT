import { useContext } from "react"
import { TrendingContext } from "../../../app/App"
import ButtonsNav from "../buttons-nav/buttons-nav"
import TrendingSolana from "../trending-solana/trending-now"
import TrendingMemecoin from "../trending-memecoin/trending-memecoin"
import './render-trending.css'


const TrendingContentRender = () => {
    const { showTrending } = useContext(TrendingContext) 
    const renderContent = {
        'Top Solana NFT`s': <TrendingSolana />,
        'Memecoin NFT`s': <TrendingMemecoin />
    }
    return (
        <>
        <div className="trending__now__title-wrapper">
            <h1 className='trending__now__title-item'>
                Trending now
            </h1>
        </div>
            <ButtonsNav />
            {renderContent[showTrending] || null}
        </>
    )
}

export default TrendingContentRender