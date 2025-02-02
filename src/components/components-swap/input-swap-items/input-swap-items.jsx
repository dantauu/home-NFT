import InputSwap from "../../../shared/ui/input-swap/input-swap"
import ethereumIcon from '../../../../public/assets/ethereum.svg'
import suiIcon from '../../../../public/assets/sui.svg'
import './input-swap-items.css'
import Button from "../../../shared/ui/button/button"


const InputSwapItems = () => {
    return (
        <div className="container">
            <div className="page__swap-wrapper">
                <InputSwap text={'Pay'} textIcon={'ETH'} icon={ethereumIcon} />
                <InputSwap text={'Receive'} textIcon={'SUI'} icon={suiIcon} />
            </div>
            <div className="swap__button__item-wrapper">
                <Button buttonClass={'swap__button-item'} buttonText={'Connect'} />
            </div>
        </div>
    )
}

export default InputSwapItems