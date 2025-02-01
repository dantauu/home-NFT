import { Link } from "react-router-dom"
import logoIcon from '../../../public/assets/logo.svg'
import loopIcon from '../../../public/assets/loop.svg'
import walletIcon from '../../../public/assets/wallet.svg'
import { navItems } from "../../../public/data/data"
import { useContext } from "react"
import { InputContext } from "../../app/App"
import './header.css'


const Header = () => {
	const { aciveInputFunc } = useContext(InputContext)
    return (
        <>
			<div className='container'>
				<div className='header__wrapper'>
					<div className='header__logo__loop-wrapper'>
						<Link to={''} className='header__logo'>
							<img className="header__logo-item" src={logoIcon} alt='' />
						</Link>
						<div className='header__loop' onClick={aciveInputFunc}>
							<img className="header__loop-item" src={loopIcon} alt='' />
						</div>
					</div>
					<div className='header__nav'>
						<ul className='header__nav-list'>
							{navItems.map((item, index) => (
								<Link key={index} to={item.link}>
									<li className="header__nav-item">{item.text}</li>
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
								<img className="header__wallet-img" 
                                src={walletIcon} alt='' />
							</div>
							<div className='header__wallet-text'>
								<p className='header__wallet__text-item'>Connect Wallet</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
            <div className="header__border"></div>
        </>
	)
}

export default Header