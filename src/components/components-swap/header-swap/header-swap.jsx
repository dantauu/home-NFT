import { Link } from 'react-router-dom'
import logoIcon from '../../../../public/assets/logo-no-text.png'
import { swapNavItems } from '../../../../public/data/data'
import Button from '../../../shared/ui/button/button'
import './header-swap.css'

const HeaderSwap = () => {
    return (
        <div className="container">
            <div className="header__swap-wrapper">
                <Link to={'/'} className="header__swap-logo">
                    <img src={logoIcon} alt="" className="header__swap-img" />
                </Link>
                <div className="header__swap__links-wrapper">
                    <ul className='header__swap__links-items'>
                    {swapNavItems.map((item) => (
                        <Link to={item.link} key={item.id}>
                            <li className='header__swap__links-inner'>
                                {item.text}
                            </li>
                        </Link>
                    ))}
                    </ul>
                </div>
                <div className="header__swap__button-wrapper">
                    <Button 
                    buttonText={'Connect'}
                    buttonClass={'header__swap__button-item'}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeaderSwap