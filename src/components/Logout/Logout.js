import {logout} from "../../services/authService";
import {useNavigate} from "react-router-dom";

export const Logout = () => {
    let navigate = useNavigate()
    logout()


    return (

        navigate('/login')
    )
}