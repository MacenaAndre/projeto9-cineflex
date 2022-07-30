import { useParams } from "react-router-dom";

function Sessions() {
    const { IdSession } = useParams();
    console.log(IdSession);
}

export default Sessions;