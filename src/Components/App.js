import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseSeat from "./ChooseSeat";
import Header from "./Header"
import Movies from "./Movies";
import Sessions from "./Sessions";
import Success from "./Success";

function App() {
    const [infos1, setInfos1] = useState({})
    let [ids, setIds] = useState([]);
    let [name, setName] = useState("");
    let [cpf, setCpf] = useState("");

    return (
       <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Movies />}/>
                <Route path="/sessoes/:IdMovie" element={<Sessions />}/>
                <Route path="/assentos/:IdSession" element={<ChooseSeat 
                    setInfos1={setInfos1}
                    ids={ids}
                    setIds={setIds}
                    name={name}
                    setName={setName}
                    cpf={cpf}
                    setCpf={setCpf}
                />}/>
                <Route path="/sucesso" element={<Success 
                infos1={infos1}
                ids={ids}
                name={name}
                cpf={cpf}
                />}/>
            </Routes>
       </BrowserRouter>
    );
}

export default App;