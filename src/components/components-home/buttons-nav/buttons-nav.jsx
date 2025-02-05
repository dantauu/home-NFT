import { useContext, useState } from 'react'
import Button from '../../../shared/ui/button/button'
import { TrendingContext } from '../../../app/App'
import { menuItems } from '../../../../public/data/data'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './buttons-nav.css'

const ButtonsNav = () => {
    const { showTrending, setShowTrending } = useContext(TrendingContext)
	const [showBlockchain, setShowBlockchain] = useState(false)
	const [showCoin, setShowCoin] = useState(false)
	const handleShowBlockchain = (id) => {
		if (id === 1) {
			setShowTrending('Solana')
			setShowBlockchain(false)
		}
	}
	const handleShowCoin = (id) => {
		if (id === 8) {
			setShowTrending('Memcoin')
			setShowCoin(false)
		}
	}
    const handleSelect = (name) => {
        setShowTrending(name)
    }
    return (
			<div className='buttons__nav__trending-wrapper'>
				<div className="full__wrapper-blockchain">
				<div className='buttons__nav__trending-item'>
					<Button
						onClick={() => 
							{handleSelect('Blockchain'), 
							setShowBlockchain(prev => !prev)}}
						buttonClass={'buttons__nav__trending__item-inner'}
						buttonText={'Blockchain'}
					/>
				</div>
				<AnimatePresence>
				{showBlockchain && (
					<motion.div 
						className='buttons__nav__trending__item-blockchain'
						initial={{opacity: 0}}
                    	animate={{opacity: 1}}
                    	exit={{opacity: 0}}
                    	transition={{duration: 0.3}}>
					{menuItems.map((item, index) => (
						<Link onClick={() => handleShowBlockchain(item.id)} to={item.link} key={index} className="buttons__nav__trending__item__blockchain-inner">
							<p className="buttons__nav__trending__item__blockchain-text">
								{item.textBlockchain}
							</p>
						</Link>
					))}
				</motion.div>
				)}
				</AnimatePresence>
				</div>
				<div className="full__wrapper-coin">
					<div className='buttons__nav__trending-item'>
						<Button
							onClick={() =>{handleSelect('Coins'), 
								setShowCoin(prev => !prev)}}
							buttonClass={'buttons__nav__trending__item-inner'}
							buttonText={'Coins'}
						/>
					</div>
					<AnimatePresence>
				{showCoin && (
					<motion.div 
						className='buttons__nav__trending__item-coin'
						initial={{opacity: 0}}
                    	animate={{opacity: 1}}
                    	exit={{opacity: 0}}
                    	transition={{duration: 0.3}}>
					{menuItems.map((item, index) => (
						<Link onClick={() => handleShowCoin(item.id)} to={item.link} key={index} className="buttons__nav__trending__item__coin-inner">
							<p className="buttons__nav__trending__item__coin-text">
								{item.textCoins}
							</p>
						</Link>
					))}
				</motion.div>
				)}
				</AnimatePresence>
				</div>
				</div>
		)
}

export default ButtonsNav