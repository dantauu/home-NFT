import { Link } from 'react-router-dom'
import logoIcon from '../../../../../public/assets/logo.png'
import loopIcon from '../../../../../public/assets/loop.svg'
import walletIcon from '../../../../../public/assets/wallet.svg'
import { navItems } from '../../../../../public/data/data'
import { useContext } from 'react'
import { DropHeaderContext, InputContext } from '../../../../app/App'
import DropMenu from '../../../../shared/ui/drop-menu/drop-menu'
import '../header.css'

const HeaderMobile = ({ setActiveMenu }) => {
	const { setDropHeader } = useContext(DropHeaderContext)
	const { aciveInputFunc } = useContext(InputContext)
	const handleDropHeader = id => {
		if (id === 2) {
			setDropHeader(prev => !prev)
		}
	}
	return (
		<>
            <>
            <div className='container'>
				<div className='header__wrapper'>
					<div className='header__logo__loop-wrapper'>
						<Link to={''} className='header__logo'>
							<img className='header__logo-item' src={logoIcon} alt='' />
						</Link>
						<div className='header__loop' onClick={aciveInputFunc}>
							<img className='header__loop-item' src={loopIcon} alt='' />
						</div>
					</div>
					<div className='header__mobile-wrapper'>
						<div className='header__nav'>
							<ul className='header__nav-list header__nav__list-mobile'>
								{navItems.map(item => (
									<Link
										onClick={() => {
											handleDropHeader(item.id),
											setActiveMenu(false)}}
										key={item.id}
										to={item.link}
									>
										<li className='header__nav-item header__nav__item-mobile'>
											{item.text}
										</li>
									</Link>
								))}
							</ul>
						</div>
						<div className='header__circle__money-wrapper header__circle__money-mobile'>
							<Link to={''} className='header__circle'>
								<div className='header__circle-item'></div>
							</Link>
							<Link to={''} className='header__wallet-wrapper'>
								<div className='header__wallet-img'>
									<img className='header__wallet-img' src={walletIcon} alt='' />
								</div>
								<div className='header__wallet-text'>
									<p className='header__wallet__text-item'>Wallet</p>
								</div>
							</Link>
						</div>
					</div>
					<DropMenu
						textFirst={'Update NFT'}
						textSecond={'Burn NFTs'}
						textTherd={'Mint Single NFT'}
					/>
				</div>
			</div>
			<div className='header__border'></div>
            </>
		</>
	)
}

export default HeaderMobile
