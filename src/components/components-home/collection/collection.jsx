import { Link } from 'react-router-dom'
import { collectionItems } from '../../../../public/data/data'
import './collection.css'

const Collection = () => {
    return (
			<div className='container'>
				<div className='collection-title'>
					<h2 className='collection__title-item'>Trends</h2>
				</div>
				<div className='collection__wrapper'>
                    <div className="connection__wrapper-scroll">
					{collectionItems.map((item) => (
							<Link className='collection__items-wrapper' key={item.id} 
							to={item.link}>
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
					))}
                    </div>
				</div>
			</div>
		)
}

export default Collection