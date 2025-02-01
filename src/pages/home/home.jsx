import Header from "../../components/header/header"
import HomeCardNft from "../../components/home-card-nft/home-card-nft"
import Collection from "../../components/collection/collection"
import WhatsNft from "../../components/whats-nft/whats-nft"

const Home = () => {
    return (
        <>
            <Header />
            <HomeCardNft />
            <Collection />
            <WhatsNft />
        </>
    )
}

export default Home