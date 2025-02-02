import CreateNftCard from '../../../shared/ui/create-nft-card/create-nft-card'
import './nft-create-card.css'

const NftCreateCard = () => {
    return (
        <div className="container">
            <div className="">
                <div className="">
                    <CreateNftCard />
                </div>
                <div className="">
                    <CreateNftCard />
                </div>
            </div>
        </div>
    )
}

export default NftCreateCard