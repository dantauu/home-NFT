import Checkbox from "../../../shared/ui/checkbox/checkbox"
import solanaIcon from '../../../../public/assets/solana.png'
import SecondaryMint from "../../components-new-coll/secondary-mint/secondary-mint"


const GenerateItem = () => {
    return (
        <div className="generate-wrapper">
            <div className='collection__details-wrapper'>
				<div className='collection__details-title'>
					<h1 className='collection__details__title-inner'>
						Collection Generate
					</h1>
				</div>
				<div className='collection__details'>
					<div className='collection__details__collection-text'>
						<p className='collection__details__collection__text-inner'>
							Collection
						</p>
					</div>

                    <div className="one">
                        <div className="two">
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
                    </div>
                    </div>
                        <div className="two">
                            <div className='collection__details-name__inner'>
							<p className='collection__details-name__inner-title'>
								Symbol
							</p>
						</div>
						<div className='collection__details__input-item'>
							<input
								className='collection__details__input__item-inner'
								type='text'
								placeholder='MNFT'
							/>
						</div>
                        </div>

						<div className='collection__details__input__date-wrapper'>
                            <div className="two">
                                 <div className='collection__details-name__inner'>
							        <p className='collection__details-name__inner-title'>
								      Collection Description
							    </p>
						</div>
							<div className='collection__details__input-item'>
								<input
									className='collection__details__input__item-inner'
									type='text'
									placeholder='My collection'
								/>
							</div>
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
							  	type='text' name='date' id="date"
                                placeholder="Date:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMYYYY" 
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
                                        <input className='collection__details__nft__royalties__input-inner' placeholder='2,5' type="text" />
                                        </div>
                                        <div className="collection__details__nft-img">
                                            <img className='collection__details__nft__img-inner' src={solanaIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            <div className="collection__details-preview">
                                <div className="collection__details__preview-title">
                                    <p className="collection__details__preview__title-inner">
                                        Preview
                                    </p>
                                </div>
                            <div className="collection__details__preview-back">
                                <div className="collection__details__preview__back-inner"></div>
                                <div className="collection__details__preview__img-wrapper">
                                    <div className="">
                                    <img className='collection__details__preview-img__inner' src={solanaIcon} alt="" />
                                    </div>
                                <div className="collection__details__preview-name">
                                     <p className="collection__details__preview__name-inner">
                                    0.05
                                </p>
                              </div>
                            </div>
                            </div>
                            <div className="collection__details__preview-bottom">
                                <p className="collection__details__preview__bottom-inner">
                                    NFT #1
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="collection__details__secondary__mint-wrapper">
                        <SecondaryMint title={'Secondary Royalty Split'} />
                        <SecondaryMint title={'Mint funds Split'} />
                    </div>
                </div>
            </div>
            <div className="collection__details__btn-next">
                <button className='collection__details__btn__next-inner'>
                    Next
                </button>
            </div>
        </div>
	</div>
</div>
    )
}

export default GenerateItem