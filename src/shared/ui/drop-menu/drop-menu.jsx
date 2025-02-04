import { useContext } from "react"
import { DropHeaderContext } from "../../../app/App"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"


const DropMenu = ({ textFirst, textSecond, textTherd }) => {
    const { dropHeader } = useContext(DropHeaderContext)
    return (
        <>
        <AnimatePresence>
            {dropHeader && (
                <motion.div 
                    className='drop__menu-wrapper'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3}}
                    >
				    <Link className='drop__menu__item-wrapper'>
					    <p className='drop__menu-item'>{textFirst}</p>
				    </Link>
				    <Link className='drop__menu__item-wrapper'>
					    <p className='drop__menu-item'>{textSecond}</p>
				    </Link>
				    <Link className='drop__menu__item-wrapper'>
					    <p className='drop__menu-item'>{textTherd}</p>
				    </Link>
			    </motion.div>
            )}
            </AnimatePresence>
            </>
		)
}

export default DropMenu