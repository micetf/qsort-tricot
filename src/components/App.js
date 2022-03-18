import Mythes from "./Mythes";
import propositions from "../propositions";

function App() {
    return (
        <div className="container">
            <Mythes mythes={propositions} />
        </div>
    );
}

export default App;
