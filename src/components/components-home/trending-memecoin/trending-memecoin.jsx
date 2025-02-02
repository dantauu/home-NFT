import { trendingMemeItems } from "../../../../public/data/data"



const TrendingMemecoin = () => {
	return (
		<div className='container'>
			<div className='trending__now-wrapper'>
				<div className='trending__now__collection__full-wrapper'>
					<div className='trending__now__collection-wrapper'>
						{trendingMemeItems.map(item => (
							<div key={item.id} className='trending__now__collection-item'>
								<div className='trending__now__collection-img'>
									<img
										className='trending__now__collection__img-inner'
										src={item.icon}
										alt=''
									/>
								</div>
								<div className='trending__now__collection-number'>
									<p className='trending__now__collection__number-inner'>
										{item.id}
									</p>
								</div>
								<div className='trending__now__collection__avatar-wrapper'>
									<div className='trending__now__collection-avatar'>
										<img
											className='trending__now__collection__avatar-inner'
											src={item.avatar}
											alt=''
										/>
									</div>
									<div className='trending__now__collection-check'>
										<img src={''} alt='' />
									</div>
								</div>
								<div className='trending__now__collection-text'>
									<p className='trending__now__collection__text-inner'>
										{item.text}
									</p>
								</div>
								<div className='trending__now__collection__solana-wrapper'>
									<div className='trending__now__collection__solana-img'>
										<img
											className='trending__now__collection__solana__img-inner'
											src={item.iconMemecoin}
											alt=''
										/>
									</div>
									<div className='trending__now__collection__solana-text'>
										<p className='trending__now__collection__solana__text-inner'>
											{item.textMemecoin}/
										</p>
									</div>
									<div className='trending__now__collection__solana__next-text'>
										<p className='trending__now__collection__solana__next__text-inner'>
											{item.nextTextMemecion}
										</p>
									</div>
									<div className='trending__now__collection-minted'>
										<p className='trending__now__collection__minted-inner'>
											{item.minted}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TrendingMemecoin