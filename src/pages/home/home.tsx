import React from "react"
import Header from "../../components/header/header"
import HomeCardNft from "../../components/home-card-nft/home-card-nft"
import Collection from "../../components/collection/collection"

const Home = () => {
    return (
        <>
            <Header />
            <HomeCardNft />
            <Collection />
        </>
    )
}

export default Home