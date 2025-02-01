import Button from '../../shared/ui/button/button'
import './home-nft.css'

const HomeNft = () => {
    return (
        <div className="container">
            <div className="home__nft-wrapper">
                <h1>The home of NFT creation</h1>
            </div>
            <div className="home__nft-button">
                <Button buttonText={'Explore'} buttonClass={'home__nft__button-item'} />
            </div>
        </div>
    )
}