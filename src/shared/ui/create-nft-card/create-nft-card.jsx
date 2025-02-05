import { Link } from "react-router-dom"


const CreateNftCard = ({ img, title, description, buttonText, link }) => {
    return (
        <div className="creat__nft__card-wrapper">
            <div className="create__nft__card-item">
                <div className="create__nft__card-img">
                    <img className="create__nft__card__img-item" src={img} alt="" />
                </div>
                <div className="create__nft__card-title">
                    <h2 className="create__nft__card__title-item">
                        {title}
                    </h2>
                </div>
                <div className="create__nft__card-description">
                    <p className="create__nft__card__description-item">
                        {description}
                    </p>
                </div>
                <Link to={link} className="create__nft__card-button">
                    <button className="create__nft__card__button-item">
                        {buttonText}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CreateNftCard