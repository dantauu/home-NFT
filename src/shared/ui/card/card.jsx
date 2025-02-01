import { Link } from "react-router-dom"


const Card = ({
	cardImgClass,
	cardImgWrapperClass,
	cardText,
	cardTextWrapper,
	cardImgItem,
	cardTextClass,
	wrapperCard,
}) => {
	return (
		<Link to={''} className={wrapperCard}>
			<div className={cardImgWrapperClass}>
				<img className={cardImgClass} src={cardImgItem} alt='' />
			</div>
			<div className={cardTextWrapper}>
				<p className={cardTextClass}>{cardText}</p>
			</div>
		</Link>
	)
}

export default Card