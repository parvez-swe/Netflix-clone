import React from 'react';
import { useState, useEffect } from 'react';
import "./Nav.css";
const Nav = () => {
    const [show, showHandler] = useState(false);

    const transitionNavBar =() =>{
        if(window.scrollY > 100){
            showHandler(true);
        }
        else{
            showHandler(false);
        }
    };
    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return ()=>window.removeEventListener("scroll",transitionNavBar);
    },[]);
    // useEffect(() => {
    //     window.addEventListener("scroll", transitionNavBar);
    //     return ()=>  window.remove.EventListener("scroll", transitionNavBar);
    // }, []);
    

  return (
    <div className={`nav ${ show && "nav__black"}`}>
      <div className="nav__content">
        <img
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="netflix"
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav