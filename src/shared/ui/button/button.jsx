const Button = ({ buttonClass, buttonText, onClick }) => {
    return (
			<div onClick={onClick} className='button__wrapper'>
				<button className={buttonClass}>
                    {buttonText}
                </button>
			</div>
		)
}

export default Button