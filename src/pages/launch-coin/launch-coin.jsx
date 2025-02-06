import LaunchCard from "../../components/components-launch-coin/launch-card/launch-card"
import LaunchHeader from "../../components/components-launch-coin/launch-header/launch-header"
import LaunchInput from "../../components/components-launch-coin/launch-input/launch-input"
import './launch-coin.css'


const LaunchCoin = () => {
    return (
        <div className="container">
            <LaunchHeader />
            <LaunchCard />
            <div className="launch__coin__page-wrapper">
                <LaunchInput />
            </div>
        </div>
    )
}

export default LaunchCoin