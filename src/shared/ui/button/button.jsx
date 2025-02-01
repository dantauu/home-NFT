const Button = ({ buttonClass, buttonText }) => {
    return (
			<div className='button__wrapper'>
				<button className={buttonClass}>
                    {buttonText}
                </button>
			</div>
		)
}

export default Button