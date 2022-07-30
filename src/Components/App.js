import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header"
import Movies from "./Movies";
import Sessions from "./Sessions";

function App() {
    return (
       <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Movies />}/>
                <Route path="/sessions/:IdSession" element={<Sessions />}/>
            </Routes>
       </BrowserRouter>
    );
}

export default App;