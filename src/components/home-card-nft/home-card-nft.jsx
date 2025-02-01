import Button from '../../shared/ui/button/button'
import Card from '../../shared/ui/card/card'
import bitcoinIcon from '../../../public/assets/bitcoin.jpg'
import sunIcon from '../../../public/assets/sun.jpg'
import spaceIcon from '../../../public/assets/space-planets.jpg'
import foxIcon from '../../../public/assets/fox.jpg'
import landScapeIcon from '../../../public/assets/landscape.jpg'
import './home-card-nft.css'

const HomeCardNft = () => {
    return (
			<div className='container'>
				<div className='home__nft-wrapper'>
					<div className=''>
						<h1 className='home__nft-text'>The home of NFT creation</h1>
					</div>
					<div className='home__nft-button'>
						<Button
							buttonText={'Explore'}
							buttonClass={'home__nft__button-item'}
						/>
					</div>
					<div className=''>
						<div className='home__nft__card-wrapper'>
							<div className='home__nft__two-card'>
								<Card
									cardImgWrapperClass={'home__nft__wrapper-img'}
									cardImgClass={'home__nft__img-class'}
									cardImgItem={bitcoinIcon}
									cardText={'One Crew'}
									cardTextWrapper={'card__text-wrapper'}
									cardTextClass={'card__text-class'}
									wrapperCard={'wrapper__card'}
								/>
								<Card
									cardImgWrapperClass={'home__nft__wrapper-img'}
									cardImgClass={'home__nft__img-class-2'}
									cardImgItem={sunIcon}
									cardText={'ai16z partners'}
									cardTextWrapper={'card__text-wrapper'}
									cardTextClass={'card__text-class'}
									wrapperCard={'wrapper__card'}
								/>
							</div>
							<div className='home__nft__three-card'>
								<Card
									cardImgWrapperClass={'home__nft__wrapper-img'}
									cardImgClass={'home__nft__img-class-3'}
									cardImgItem={spaceIcon}
									cardText={'Retardio Cousins'}
									cardTextWrapper={'card__text-wrapper'}
									cardTextClass={'card__text-class'}
									wrapperCard={'wrapper__card'}
								/>
								<div className='home__nft__wrapper__last__img'>
									<Card
										cardImgWrapperClass={'home__nft__wrapper-img'}
										cardImgClass={'home__nft__img-class-4'}
										cardImgItem={foxIcon}
										cardText={'ZEREBORN'}
										cardTextWrapper={'card__text-wrapper'}
										cardTextClass={'card__text-class'}
										wrapperCard={'wrapper__card'}
									/>
									<Card
										cardImgWrapperClass={'home__nft__wrapper-img'}
										cardImgClass={'home__nft__img-class-5'}
										cardImgItem={landScapeIcon}
										cardText={'Luces'}
										cardTextWrapper={'card__text-wrapper'}
										cardTextClass={'card__text-class'}
										wrapperCard={'wrapper__card'}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
}

export default HomeCardNft