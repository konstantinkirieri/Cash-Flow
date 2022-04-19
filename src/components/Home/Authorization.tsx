import React from "react";

export function Authorization() {
    return <div className="authorization">
        <div className="auth_elem">
            <span>e-mail</span>
            <input />
        </div>
        <div className="auth_elem">
            <span>password</span>
            <input type="password"/>
        </div>
    </div>
}