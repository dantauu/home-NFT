import CollectionDetails from "../../components/components-new-coll/collection-details/collection-details"
import ProgressBar from "../../components/components-new-coll/progress-bar/progress-bar"


const NewCollection =() => {
    return (
        <div className="container">
            <ProgressBar />
            <CollectionDetails />
        </div>
    )
}

export default NewCollection