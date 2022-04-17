import "./home.scss"
import { Authorization } from "./Authorization";

export function Home() {
 
    return <div id="homeComponent">
            <h1>CashFlow</h1>
            <h2 className="greeting">Welcome back!</h2>
            <Authorization />
            <button className="btnLog" >Sign in</button>
    </div>
}