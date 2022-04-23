import "./home.scss"
//import { Authorization } from "./Authorization";
import React, { useState, useEffect } from "react";
import { useSelector, connect, shallowEqual } from "react-redux";
import { changeName, toggleCheckbox } from "../../components/store/auth/actions";
import { selectName } from "../../components/store/auth/selectors";
import { onValue, set } from "firebase/database";
import { logOut, userRef } from "../../services/firebase";

export const Home = ({ checkboxValue, setName, changeChecked }: any) => {
    const name = useSelector(selectName, shallowEqual);
    const [value, setValue] = useState(name);

    useEffect(() => {
        const unsubscribe = onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          setName(userData?.name || "");
        });

        return unsubscribe;
  }, [setName]);

const handleChangeText = (e: any) => {
    setValue(e.target.value);
  };

  const handleChange = () => {
    changeChecked();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    set(userRef, {
      name: value,
    });
  };

  const handleLogOutClick = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <div id="homeComponent">
            <h1>CashFlow</h1>
            <h2 className="greeting">Welcome back!</h2>
      <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
      <form className="signForm" onSubmit={handleSubmit}>
        <input
          className="signInput"
          type="text"
          value={value}
          onChange={handleChangeText}
        />
        <input className="signBtn" type="submit" />
      </form>
      <button className="dlt_button signout" onClick={handleLogOutClick}>
        SIGN OUT
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
    name: state.home.name,
    checkboxValue: state.home.checkbox,
  });

  const mapDispatchToProps = (dispatch: any) => ({
    changeChecked: () => dispatch(toggleCheckbox),
    setName: (newName: any) => dispatch(changeName(newName)),
  });

  export const ConnectedHome = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);

//export function Home() {
 
//    return <div id="homeComponent">
//            <h1>CashFlow</h1>
//            <h2 className="greeting">Welcome back!</h2>
//            <Authorization />
//            <button className="btnLog" >Sign in</button>
//    </div>
//}