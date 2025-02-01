import Header from "../../components/header/header"
import HomeCardNft from "../../components/home-card-nft/home-card-nft"
import Collection from "../../components/collection/collection"
import WhatsNft from "../../components/whats-nft/whats-nft"
import Footer from "../../components/footer/footer"

const Home = () => {
    return (
        <>
            <Header />
            <HomeCardNft />
            <Collection />
            <WhatsNft />
            <Footer />
        </>
    )
}

export default Home