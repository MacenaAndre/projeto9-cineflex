import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseSeat from "./ChooseSeat";
import Header from "./Header"
import Movies from "./Movies";
import Sessions from "./Sessions";

function App() {
    return (
       <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Movies />}/>
                <Route path="/sessoes/:IdMovie" element={<Sessions />}/>
                <Route path="/assentos/:IdSession" element={<ChooseSeat />}/>
            </Routes>
       </BrowserRouter>
    );
}

export default App;