import loopIcon from '../../../../public/assets/loop.svg'

const Input = () => {
    return (
			<label htmlFor='input'>
				<div className='input__wrapper'>
					<div className='input-item'>
						<input id='input' className='input-inner' type='text' />
					</div>
					<div className='input__item__img'>
						<img className='input__item__img-inner' src={loopIcon} alt='' />
					</div>
				</div>
			</label>
		)
}

export default Input