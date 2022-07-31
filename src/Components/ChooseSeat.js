import { useState } from "react";
import { useParams } from "react-router-dom";

function ChooseSeat() {
    const { IdSession } = useParams();
    let [sessionlist, setSessionlist] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${IdMovie}/showtimes`);

        promise.then( (response) => {
            setSessionlist(response.data);
        });
    }, [IdSession]);


    return (
        <>
            <div>ola</div>
        </>
    );
}

export default ChooseSeat;