import bearIcon from '../../../../public/assets/nft-bear.jpg'
import './launch-card.css'

const LaunchCard = () => {
    return (
        <div className="launch__card__this__full-wrapper">
        <div className="launch__card__full-wrapper">
            <div className="launch__card-wrapper">
            <div className="launch__card-img">
                <img className="aunch__card__img-inner" src={bearIcon} alt="" />
            </div>
            <div className="launch__card-text">
                <div className="launch__card-title">
                    <h2 className='launch__card__title-inner'>
                        wolf of wolf street
                    </h2>
                </div>
                <div className="launch__card-dollar">
                    <p className="launch__card__dollar-inner">
                        $WOW
                    </p>
                </div>
                <div className="launch__card-created">
                    <p className="launch__card__created-inner">
                        Created by: <span className='span-launch'>OxE...32BD</span>
                    </p>
                </div>
                <div className="launch__card__text-wrapper">
                    <p className="launch__card__text-inner">
                        Walf of Wolf Street Coin
                    </p>
                </div>
            </div>
            </div>
            <div className="launch__card-progress">
                <div className="launch__card__progress-item">
                    <p className="launch__card__progress-inner">
                        38.4%
                    </p>
                </div>
                <div className="launch__card__progress__back-wrapper">
                    <div className="launch__card__progress__back-left"></div>
                    <div className="launch__card__progress__back-right"></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LaunchCard