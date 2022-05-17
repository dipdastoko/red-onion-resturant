import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"

const useAuth = () => {
    const { foods, auths } = useContext(AuthContext);
    return {
        foods,
        auths
    }
}

export default useAuth;