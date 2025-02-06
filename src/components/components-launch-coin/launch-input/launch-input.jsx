import loopIcon from '../../../../public/assets/loop.svg'
import './launch-input.css'

const LaunchInput = () => {
    return (
        <div className="launch__input-wrapper">
            <div className="launch__input__img-item">
                <img className="launch__input__img-inner" src={loopIcon} alt="" />
            </div>
            <div className="launch__input-item">
                <input className='launch__input-inner' placeholder='Search...' type="text" />
            </div>
        </div>
    )
}

export default LaunchInput