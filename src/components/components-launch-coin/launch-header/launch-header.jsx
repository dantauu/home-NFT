import rocketIcon from '../../../../public/assets/rocket.svg'
import repeatIcon from '../../../../public/assets/repeat.svg'
import logoIcon from '../../../../public/assets/logo.png'
import './launch-header.css'
import { Link } from 'react-router-dom'

const LaunchHeader = () => {
    return (
        <div className="header__launch-wrapper">
            <div className="header__repeat-wrapper">
                <Link to={'/'} className="header__logo-launch">
                    <img className='header__logo__launch-inner' src={logoIcon} alt="" />
                </Link>
                <div className="header__repeat__btn-wrapper">
                <div className="header__repeat-img">
                    <img className='header__repeat__img-inner' src={repeatIcon} alt="" />
                </div>
                <div className="header-repeat-text">
                    <p className="header-repeat__text-inner">
                        Wolfswap
                    </p>
                </div>
                </div>
            </div>
            <div className="header__rocket-wrapper">
                <div className="header__rocket-img">
                    <img className="header__rocket__img-inner" src={rocketIcon} alt="" />
                </div>
                <div className="header__rocket-text">
                    <p className="header__rocket__text-inner">
                        Launch Token
                    </p>
                </div>
            </div>
            <div className="header__connect__btn-wrapper">
                <div className="header__connect-btn">
                    <button className='header__connect__btn-inner'>
                        Connect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LaunchHeader