import Button from '../../../shared/ui/button/button'
import Card from '../../../shared/ui/card/card'
import bitcoinIcon from '../../../../public/assets/bitcoin.jpg'
import sunIcon from '../../../../public/assets/sun.jpg'
import spaceIcon from '../../../../public/assets/space-planets.jpg'
import foxIcon from '../../../../public/assets/fox.jpg'
import landScapeIcon from '../../../../public/assets/landscape.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import './home-card-nft.css'
import Input from '../../../shared/ui/input/input'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { InputContext } from '../../../app/App'

const HomeCardNft = () => {
	const { activeInput } = useContext(InputContext)
    return (
		<div className='container'>
			<div className='home__nft-wrapper'>
				<div className="">
					{activeInput && <Input />}
				</div>
				<div className='home__nft__text-item'>
					<h1 className='home__nft-text'>
						Launch your NFT collection in 5 minutes
					</h1>
				</div>
			<div className=''>
				<Swiper
					pagination={{
						dynamicBullets: true,}}
						modules={[Pagination]}
						className='mySwiper'
					>
			<div className='home__nft__card-wrapper'>
				<div className='home__nft__two-card'>
					<SwiperSlide>
						<Card
							cardImgWrapperClass={'home__nft__wrapper-img'}
							cardImgClass={'home__nft__img-class'}
							cardImgItem={bitcoinIcon}
							cardText={'One Crew'}
							cardTextWrapper={'card__text-wrapper'}
							cardTextClass={'card__text-class'}
							wrapperCard={'wrapper__card'}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Card
							cardImgWrapperClass={'home__nft__wrapper-img'}
							cardImgClass={'home__nft__img-class'}
							cardImgItem={sunIcon}
							cardText={'ai16z partners'}
							cardTextWrapper={'card__text-wrapper'}
							cardTextClass={'card__text-class'}
							wrapperCard={'wrapper__card'}
						/>
					</SwiperSlide>
				</div>
				<div className='home__nft__three-card'>
					<SwiperSlide>
						<Card
							cardImgWrapperClass={'home__nft__wrapper-img'}
							cardImgClass={'home__nft__img-class'}
							cardImgItem={spaceIcon}
							cardText={'Retardio Cousins'}
							cardTextWrapper={'card__text-wrapper'}
							cardTextClass={'card__text-class'}
							wrapperCard={'wrapper__card'}
						/>
					</SwiperSlide>
				<div className='home__nft__wrapper__last__img'>
					<SwiperSlide>
						<Card
							cardImgWrapperClass={'home__nft__wrapper-img'}
							cardImgClass={'home__nft__img-class'}
							cardImgItem={foxIcon}
							cardText={'ZEREBORN'}
							cardTextWrapper={'card__text-wrapper'}
							cardTextClass={'card__text-class'}
							wrapperCard={'wrapper__card'}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Card
							cardImgWrapperClass={'home__nft__wrapper-img'}
							cardImgClass={'home__nft__img-class'}
							cardImgItem={landScapeIcon}
							cardText={'Luces'}
							cardTextWrapper={'card__text-wrapper'}
							cardTextClass={'card__text-class'}
							wrapperCard={'wrapper__card'}
						/>
						</SwiperSlide>
					</div>
				</div>
			</div>
		</Swiper>
  	  </div>
	</div>
</div>
	)
}

export default HomeCardNft