import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header"
import Movies from "./Movies";

function App() {
    return (
       <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Movies />}/>
            </Routes>
       </BrowserRouter>
    );
}

export default App;