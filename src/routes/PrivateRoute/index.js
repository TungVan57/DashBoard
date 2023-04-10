import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const PrivateRoute = ({page}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem(`token`)

    useEffect(() => {
        if(!token){
            navigate("/");
        }
    },[])

    return(
        <div>{page}</div>
    )
}

export default PrivateRoute;