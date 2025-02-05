import percentIcon from '../../../../public/assets/percent.svg'
import './secondary-mint.css'

const SecondaryMint = ({ title }) => {
    return (
        <div className="secondary__mint__full-wrapper">
            <div className="secondary__mint-wrapper">
                <div className="secondary__mint-title">
                    <h2 className="secondary__mint__title-inner">
                        {title}
                    </h2>
                </div>
                <div className="secondary__mint__input__btn-wrapper">
                <div className="secondary__mint-input__full-wrapper">
                    <div className="secondary__mint-input-wrapper">
                        <div className="secondary__mint__input-item">
                            <input placeholder='100' className="secondary__mint__input-inner" type="text" />
                        </div>
                        <div className="secondary__mint__input-img">
                            <img className="secondary__mint__input__img-inner" 
                            src={percentIcon} alt="" />
                        </div>
                        <div className="secondary__mint-absolute">
                            <p className="secondary__mint__absolute-inner">
                                Share
                            </p>
                        </div>
                    </div>
                    <div className="secondary__mint__input__addres-wrapper">
                        <div className="secondary__mint__input__addres-item">
                            <input className='secondary__mint-input__addres'
                            placeholder='....' type="text" />
                        </div>
                        <div className="secondary__mint__absolute-addres">
                            <p className="secondary__mint__absolute__addres-inner">
                                Addres
                            </p>
                        </div>
                    </div>
                </div>
                    <div className="secondary__mint-btn">
                        <button className='secondary__mint__btn-inner'>
                            Add Split
                        </button>
                    </div>
             </div>
            </div>
        </div>
    )
}

export default SecondaryMint