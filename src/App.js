import { AddKontak, ListKontak } from "./components";

function App() {
    return (
        <div style={{ padding: "30px" }}>
            <h2>Kontak App</h2>
            <AddKontak />
            <hr />
            <ListKontak />
        </div>
    );
}

export default App;
