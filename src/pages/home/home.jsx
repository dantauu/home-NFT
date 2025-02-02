import Collection from "../../components/components-home/collection/collection"
import HomeCardNft from "../../components/components-home/home-card-nft/home-card-nft"
import WhatsNft from "../../components/components-home/whats-nft/whats-nft"
import TrendingContentRender from '../../components/components-home/render-trending/render-trending'



const Home = () => {
    return (
        <>
            <HomeCardNft />
            <TrendingContentRender />
            <Collection />
            <WhatsNft />
        </>
    )
}

export default Home