import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ChooseSeat() {
    const { IdSession } = useParams();
    let [seatlist, setSeatlist] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${IdSession}/seats`);

        promise.then( (response) => {
            setSeatlist(response.data);
        });
    }, [IdSession]);

    console.log(seatlist);


    return (
        <>
            <div>ola</div>
        </>
    );
}

export default ChooseSeat;