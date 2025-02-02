import Collection from "../../components/components-home/collection/collection"
import Header from "../../components/components-home/header/header"
import HomeCardNft from "../../components/components-home/home-card-nft/home-card-nft"
import WhatsNft from "../../components/components-home/whats-nft/whats-nft"
import Footer from "../../components/components-home/footer/footer"
import TrendingNow from "../../components/components-home/trending-now/trending-now"


const Home = () => {
    return (
        <>
            <Header />
            <HomeCardNft />
            <TrendingNow />
            <Collection />
            <WhatsNft />
            <Footer />
        </>
    )
}

export default Home