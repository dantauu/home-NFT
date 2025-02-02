import arrowIcon from '../../../../public/assets/arrow.svg'

const InputSwap = ({ text, icon, textIcon }) => {
    return (
        <div className="input__swap-wrapper">
            <div className="input__swap__wrapper__text-input">
                <div className="input__swap__item-text">
                    <p className="input__swap__text-inner">{text}</p>
                </div>
                <div className="input__swap-item">
                    <input className='input__swap__item-inner' 
                    type="number" placeholder="0" />
                </div>
            </div>
            <div className="full-wrapper">
            <div className="input__swap__icon__text-wrapper">
                <div className="input__swap-icon">
                    <img className="input__swap__icon-item" src={icon} alt="" />
                </div>
                <div className="input__swap__inoc-text">
                    <p className="input__swap__inoc__text-item">
                        {textIcon}
                    </p>
                </div>
                <div className="input__swap__icon-arrow">
                    <img className="input__swap__icon__arrow-item" 
                    src={arrowIcon} alt="" />
                </div>
            </div>
          </div>
        </div>
    )
}

export default InputSwap