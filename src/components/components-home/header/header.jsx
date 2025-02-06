import { Link } from "react-router-dom"
import logoIcon from '../../../../public/assets/logo.png'
import loopIcon from '../../../../public/assets/loop.svg'
import walletIcon from '../../../../public/assets/wallet.svg'
import { navItems } from "../../../../public/data/data"
import { useContext, useState } from "react"
import { DropHeaderContext, InputContext } from "../../../app/App"
import DropMenu from "../../../shared/ui/drop-menu/drop-menu"
import useMediaQuery from "../../../hooks/useMediaQuery"
import HeaderMobile from "./header-mobile/header-mobile"
import './header.css'


const Header = () => {
	const isMobile = useMediaQuery('(max-width: 890px)')
	const [aciveMenu, setActiveMenu] = useState(false)
	const { setDropHeader } = useContext(DropHeaderContext)
	const { aciveInputFunc } = useContext(InputContext)
	const handleDropHeader = (id) => {
		if (id === 2) {
			setDropHeader(prev => !prev)
		}
	}
    return (
			<>
				{isMobile ? (
					<>
						<div className='container'>
							<div className='header__wrapper header__wrapper-menu'>
								<div className='header__logo__loop-wrapper'>
									<Link to={''} className='header__logo'>
										<img className='header__logo-item' src={logoIcon} alt='' />
									</Link>
									<div className='header__loop' onClick={aciveInputFunc}>
										<img className='header__loop-item' src={loopIcon} alt='' />
									</div>
								</div>
								<div
									onClick={() => setActiveMenu(!aciveMenu)}
									className={`burger-img ${aciveMenu && 'open'}`}
								>
									<div className='burger'></div>
									<div className='burger'></div>
									<div className='burger'></div>
								</div>
							</div>
						</div>
						{aciveMenu && <HeaderMobile setActiveMenu={setActiveMenu} />}
					</>
				) : (
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
								<div className='header__nav'>
									<ul className='header__nav-list'>
										{navItems.map(item => (
											<Link
												onClick={() => handleDropHeader(item.id)}
												key={item.id}
												to={item.link}
											>
												<li className='header__nav-item'>{item.text}</li>
											</Link>
										))}
									</ul>
								</div>
								<div className='header__circle__money-wrapper'>
									<Link to={''} className='header__circle'>
										<div className='header__circle-item'></div>
									</Link>
									<Link to={''} className='header__wallet-wrapper'>
										<div className='header__wallet-img'>
											<img
												className='header__wallet-img'
												src={walletIcon}
												alt=''
											/>
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
						<div className='header__border'></div>
					</>
				)}
			</>
		)
}

export default Header