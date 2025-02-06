import logoIcon from '../../../../public/assets/logo.png'
import { Link } from 'react-router-dom'
import discordIcon from '../../../../public/assets/discord.svg'
import twitterIcon from '../../../../public/assets/twitter.svg'
import './footer.css'


const Footer = () => {
    return (
        <div className="footer__wrapper-back">
        <div className="container">
            <div className="footer__wrapper">
                <div className="left__footer-wrapper">
                    <div className="footer__logo">
                        <img className="footer__logo-item" src={logoIcon} alt="" />
                    </div>
                    <div className="footer__socials-wrapper">
                        <Link to={''} className="footer__socials-item">
                            <img className='footer__socials__item-inner' 
                            src={discordIcon} alt="" />
                        </Link>
                        <Link to={''} className="footer__socials-item">
                            <img className='footer__socials__item-inner' 
                            src={twitterIcon} alt="" />
                        </Link>
                    </div>
                    <div className="footer__launch">
                        <p className="footer__launch-item">
                            @AVIBIS 2025
                        </p>
                    </div>
                </div>

                <div className="collection__footer-wrapper">
                    <div className="collection__footer__title-wrapper">
                        <h2 className="collection__footer__item-text">
                            Collections
                        </h2>
                    </div>
                    <div className="collection__footer-wrapper">
                        <div className="collection__footer-title">
                            <Link to={''} className='collection__footer__title-item'>
                                Explore
                            </Link>
                        </div>
                        <div className="collection__footer-item">
                            <Link to={''} className="collection__footer__title-item">
                                Hot
                            </Link>
                        </div>
                        <div className="collection__footer-item">
                            <Link to={''} className="collection__footer__title-item">
                                Latest
                            </Link>
                        </div>
                    </div>
                    </div>

                <div className="information__footer-wrapper">
                    <div className="information__footer__title-wrapper">
                        <h2 className="information__footer__item-text">
                            Information
                        </h2>
                    </div>
                    <div className="information__footer-wrapper">
                        <div className="information__footer-title">
                            <Link to={''} className='information__footer__title-item'>
                                Privacy Policy
                            </Link>
                        </div>
                        <div className="information__footer-item">
                            <Link to={''} className="information__footer__title-item">
                                Terms of Use
                            </Link>
                        </div>
                        <div className="information__footer-item">
                            <Link to={''} className="information__footer__title-item">
                                About us
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="support__footer-wrapper">
                    <div className="support__footer__title-wrapper">
                        <h2 className="support__footer__item-text">
                            Connect
                        </h2>
                    </div>
                    <div className="support__footer-wrapper">
                        <div className="support__footer-title">
                            <Link to={''} className='support__footer__title-item'>
                               Twitter
                            </Link>
                        </div>
                        <div className="support__footer-item">
                            <Link to={''} className="support__footer__title-item">
                                Discord
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer
