import { useContext, useState } from 'react'
import Button from '../../../shared/ui/button/button'
import './buttons-nav.css'
import { TrendingContext } from '../../../app/App'

const ButtonsNav = () => {
    const { showTrending, setShowTrending } = useContext(TrendingContext)
    const handleSelect = (name) => {
        setShowTrending(name)
    }
    return (
			<div className='buttons__nav__trending-wrapper'>
				<div className='buttons__nav__trending-item'>
					<Button
						onClick={() => handleSelect('Top Solana NFT`s')}
						buttonClass={`buttons__nav__trending__item-inner 
						${showTrending === 'Top Solana NFT`s' && 'select'}`}
						buttonText={'Top Solana NFT`s'}
					/>
				</div>
				<div className='buttons__nav__trending-item'>
					<Button
						onClick={() => handleSelect('Memecoin NFT`s')}
						buttonClass={`buttons__nav__trending__item-inner 
						${showTrending === 'Memecoin NFT`s' && 'select'}`}
						buttonText={'Memecoin NFT`s'}
					/>
				</div>
			</div>
		)
}

export default ButtonsNav