import { ProgressItem } from "../../components-new-coll/progress-bar/progress-bar";

const GenerateProgress = () => {
    return (
         <div className="progress__full__item-wrapper">
            <ProgressItem classLine={'progress__bar-line'} number={1} text={'Details'} />
            <ProgressItem classLine={'progress__bar-line'} number={2} text={'Generate'} />
            <ProgressItem classLine={'progress__bar-line'} number={3} text={'Upload'} />
            <ProgressItem classLine={'progress__bar-line'} number={4} text={'Deploy'} />
            <ProgressItem number={5} text={'Success!'} />
        </div>
    )
}

export default GenerateProgress