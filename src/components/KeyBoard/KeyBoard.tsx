import React, { useState } from "react";
import "./KeyBoard.scss";

export const KeyBoard = (value: any) => {
    const [inputValue, setInputValue] = useState("");

    const clickBtn = (e: any) => {
        e.preventDefault();
        let value = e.target.value;
        setInputValue(inputValue + value);
    };

    const deleteValue = (e: any) => {
        e.preventDefault();
        setInputValue(inputValue.slice(0, -1));
    };

    return (
        <>
        <form className="kbd-form">
            <input
                className="input-amount"
                type="text"
                placeholder="Enter amount"
                value={inputValue} onChange={clickBtn}
            />
            <div className="keyboard-wrap">
                <button className="keybrd-btn" value="1" onClick={clickBtn}>
                    1
                </button>
                <button className="keybrd-btn" value="2" onClick={clickBtn}>
                    2
                </button>
                <button className="keybrd-btn" value="3" onClick={clickBtn}>
                    3
                </button>
                <button className="keybrd-btn" value="4" onClick={clickBtn}>
                    4
                </button>
                <button className="keybrd-btn" value="5" onClick={clickBtn}>
                    5
                </button>
                <button className="keybrd-btn" value="6" onClick={clickBtn}>
                    6
                </button>
                <button className="keybrd-btn" value="7" onClick={clickBtn}>
                    7
                </button>
                <button className="keybrd-btn" value="8" onClick={clickBtn}>
                    8
                </button>
                <button className="keybrd-btn" value="9" onClick={clickBtn}>
                    9
                </button>
                {/* <div className="keybrd-btn">
                    <img className="img-btn" src="../images/Icons/ok.png" alt="ok" />
                </div> */}
                 <button className="keybrd-btn" value="." onClick={clickBtn}>
                    .
                </button>
                <button className="keybrd-btn" value="0" onClick={clickBtn}>
                    0
                </button>
                <div className="keybrd-btn" onClick={deleteValue}>
                    <img className="img-btn" src="../images/Icons/back_arrow.png" alt=""/>
                </div>
            </div>
        </form>
        
      </>
    );
}