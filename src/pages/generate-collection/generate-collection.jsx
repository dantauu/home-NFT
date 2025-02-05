import GenerateItem from "../../components/components-generate-coll/generate-item/generate-item"
import GenerateProgress from "../../components/components-generate-coll/generate-progress/generate-progress"

const GenerateCollection = () => {
    return (
        <div className="container-colllection-generate">
            <GenerateProgress />
            <GenerateItem />
        </div>
    )
}

export default GenerateCollection