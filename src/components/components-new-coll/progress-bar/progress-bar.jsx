import './progress-bar.css'

const ProgressBar = () => {
    return (
        <div className="progress__full__item-wrapper">
            <ProgressItem classLine={'progress__bar-line'} number={1} text={'Details'} />
            <ProgressItem classLine={'progress__bar-line'} number={2} text={'Upload'} />
            <ProgressItem classLine={'progress__bar-line'} number={3} text={'Deploy'} />
            <ProgressItem number={4} text={'Success!'} />
        </div>
    )
}

export const ProgressItem = ({ number, text, classLine }) => {
    return (
    <div className="progress__bar-wrapper">
            <div className="progress__bar-number">
                <div className="progress__bar__number__line-wrapper">
                    <div className="progress__bar__number-inner">
                        <p className="progress__bar__number__inner-item">{number}</p>
                    </div>
                    <div className="progress__bar__number-text">
                        <p className="progress__bar__number__text-inner">
                            {text}
                        </p>
                    </div>
                </div>
            <div className={classLine}></div>
        </div>
    </div>
    )
}

export default ProgressBar

