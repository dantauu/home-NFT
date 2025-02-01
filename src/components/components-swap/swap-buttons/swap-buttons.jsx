import Button from "../../../shared/ui/button/button"
import './swap-buttons.css'


const SwapButtons = () => {
    return (
        <div className="container">
            <div className="swap__buttons__wrapper-back">
            <div className="swap__buttons-wrapper">
                <div className="swap__buttons-item">
                    <Button buttonClass={'swap__buttons-inner'} buttonText={'Swap'} />
                </div>
                <div className="swap__buttons-item">
                    <Button buttonClass={'swap__buttons-inner'} buttonText={'Limit'} />
                </div>
                <div className="swap__buttons-item">
                    <Button buttonClass={'swap__buttons-inner'} buttonText={'DCA'} />
                </div>
            </div>
            </div>
        </div>
    )
}

export default SwapButtons