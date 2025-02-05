import CreateNftCard from '../../../shared/ui/create-nft-card/create-nft-card'
import starIcon from '../../../../public/assets/avatars/star.svg'
import './nft-create-card.css'

const NftCreateCard = () => {
    return (
        <div className="container">
            <div className="nft__create__card__full-wrapper">
                    <CreateNftCard 
                    title={'New Collection'} 
                    description={'Already have your NFT assets? Upload and launch your NFT collection.'}
                    buttonText={'New Collection'}
                    img={starIcon}
                    link={'/new-collection'}
                    />
                    <CreateNftCard
                    title={'Generate Collection'}
                    description={'Create and launch your randomly generated NFT collection'}
                    buttonText={'Generate Collection'}
                    img={starIcon}
                    link={'/generate-collection'}
                    />
            </div>
        </div>
    )
}

export default NftCreateCard