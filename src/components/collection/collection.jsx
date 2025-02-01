import { Link } from 'react-router-dom'
import { collectionItems } from '../../../public/data/data'
import './collection.css'

const Collection = () => {
    return (
			<div className='container'>
				<div className='collection-title'>
					<h2 className='collection__title-item'>Hot Collections</h2>
				</div>
				<div className='collection__wrapper'>
					{collectionItems.map(item => (
						<>
							<Link className='collection__items-wrapper' to={item.link}>
								<div className='collection__item-number'>
									<p className='collection-number'>{item.id}</p>
								</div>
								<div className='collection__img-wrapper'>
									<img className='collection-img' src={item.img} alt='' />
								</div>
								<div className='collection__text-wrapper'>
									<p className='collection-text'>{item.text}</p>
								</div>
							</Link>
						</>
					))}
				</div>
			</div>
		)
}

export default Collection