import Checkbox from '../../../shared/ui/checkbox/checkbox'
import solanaIcon from '../../../../public/assets/solana.png'
import './collection-details.css'

const CollectionDetails = () => {
    return (
			<div className='collection__details-wrapper'>
				<div className='collection__details-title'>
					<h1 className='collection__details__title-inner'>
						Collection Details
					</h1>
				</div>
				<div className='collection__details'>
					<div className='collection__details__collection-text'>
						<p className='collection__details__collection__text-inner'>
							Collection
						</p>
					</div>
					<div className='collection__details-name'>
						<div className='collection__details-name__inner'>
							<p className='collection__details-name__inner-title'>
								Collection Name
							</p>
						</div>
					</div>
					<div className='collection__details__input-wrapper'>
						<div className='collection__details__input-item'>
							<input
								className='collection__details__input__item-inner'
								type='text'
								placeholder='My NFTs'
							/>
						</div>
						<div className='collection__details__input-item'>
							<input
								className='collection__details__input__item-inner'
								type='text'
								placeholder='MNFT'
							/>
						</div>
						<div className='collection__details__input__date-wrapper'>
							<div className='collection__details__input-item'>
								<input
									className='collection__details__input__item-inner'
									type='text'
									placeholder='My collection'
								/>
							</div>
						</div>
					</div>
					<div className='collection__details__input__data__title-wrapper'>
						<div className='collection__details__input__data-title'>
							<p className='collection__details__input__data__title-inner'>
								Launch Date
							</p>
						</div>
						<div className='collection__details__input__data-item'>
							<input className='collection__details__input__data-inner'
								type='date'
							/>
						</div>
					</div>
                    <div className="collection__details__metadata-wrapper">
                        <div className="collection__details__metadata-title">
                            <p className="collection__details__metadata__title-inner">
                                Metadata Standard
                            </p>
                        </div>
                        <div className="collection__details-metadata">
                            <div className="collection__details__metadata-checkbox">
                                <Checkbox />
                            </div>
                            <div className="collection__details__metadata__checkbox-item">
                                <p className="collection__details__metadata__checkbox-inner">
                                    Metaplex Core
                                </p>
                            </div>
                            <div className="collection__details__metadata-checkbox">
                                <Checkbox />
                            </div>
                            <div className="collection__details__metadata__checkbox-item">
                                <p className="collection__details__metadata__checkbox-inner">
                                    Metaplex Legacy
                                </p>
                            </div>
                            <div className="collection__details__metadata-checkbox">
                                <Checkbox />
                            </div>
                            <div className="collection__details__metadata__checkbox-item">
                                <p className="collection__details__metadata__checkbox-inner">
                                    Compressed NFT
                                </p>
                            </div>
                        </div>
                        <div className="collection__details__nft-wrapper">
                            <div className="collection__details-nft">
                            <div className="collection__details__nft-title">
                                <p className="collection__details__nft__title__inner">
                                    NFT template
                                </p>
                            </div>
                            <div className="collection__details__nft__title-base">
                                <p className="collection__details__nft__title__base-inner">
                                    Base art name
                                </p>
                            </div>
                            <div className="collection__details__nft-input">
                                <input type="text" className="collection__details__nft__input-inner" placeholder='NFT #' />
                            </div>
                          </div>
                          <div className="collection__details__nft-description">
                            <div className="collection__details__nft__description-inner">
                             <p className="collection__details__nft__description__inner-item">
                                Description
                             </p>
                            </div>
                            <div className="collection__details__nft__description-input">
                             <input className='collection__details__nft__description__input-inner'type="text" placeholder='{name} - Generated and deployed on LaunchMyNFT.'  />
                            </div>
                          </div>
                          <div className="collection__details__nft-mint">
                            <div className="collection__details__nft__mint__title-flex">
                                <div className="collection__details__nft__mint-title">
                              <p className="collection__details__nft__mint__title-inner">
                                Mint Cost
                              </p>
                            </div>
                            <div className="collection__details__nft__mint__full-wrapper">
                            <div className="collection__details__nft__mint__input-wrapper">
                               <div className="collection__details__nft__mint__input-item">
                                   <input className='collection__details__nft__mint__input__inner'type="text"
                                   placeholder='0,5' />
                                </div>
                                <div className="collection__details__nft__mint__input-img">
                                  <img className='collection__details__nft__mint__input__img-inner' src={solanaIcon} alt="" />
                                </div>
                            </div>
                            </div>
                            </div>

                                <div className="collection__details__nft-royalties">
                                    <div className="collection__details__nft__royalties-text">
                                        <p className="collection__details__nft__royalties__text-inner">
                                            Royalties
                                        </p>
                                    </div>
                                    <div className="collection__details__nft__royalties__input-wrapper">
                                        <div className="collection__details__nft__royalties__input-item">
                                        <input className='collection__details__nft__royalties__input-inner' type="text" />
                                        </div>
                                        <div className="collection__details__nft-img">
                                            <img className='collection__details__nft__img-inner' src={solanaIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
				</div>
			// </div>
		)
}

export default CollectionDetails