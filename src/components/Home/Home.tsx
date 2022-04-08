import "./home.scss"
import { Authorization } from "./Authorization"
import { useNavigate } from "react-router-dom"

export function Home() {
    const navigate = useNavigate()
    return <div id="homeComponent">
            <h1>CashFlow</h1>
            <h2 className="greeting">Welcome back!</h2>
            <Authorization />
            <button className="btnLog" onClick={() => {
                navigate("/report")
            }}>Sign in</button>
    </div>
}