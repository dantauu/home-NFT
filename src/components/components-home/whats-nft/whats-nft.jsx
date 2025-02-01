import { whatsNftItems } from "../../../../public/data/data"
import './whats-nft.css'

const WhatsNft = () => {
    return (
        <div className="container">
            <div className="whats__wrapper">
                <div className="whats__title">
                    <div className="whats__title-item">
                        <h1 className="whats__title__item-inner">What's LaunchMyNFT?</h1>
                    </div>
                    <div className="whats__text__img-wrapper">
                    {whatsNftItems.map((item) => (
                         <div key={item.id} className="whats__text__img__wrapper-inner">
                            <div className="whats__nft-img">
                                <img className="whats__nft__img_item" 
                                src={item.img} alt="" />
                            </div>
                            <div className="whats__nft__text">
                                <p className="whats__nft__text-item">{item.text}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatsNft