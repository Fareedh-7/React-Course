import React from "react";
import "../CSS/App.css";
/*
const HeaderComponent = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", { className: "header" }, "This is Header"),
    React.createElement("p", { className: "slogan" }, "Learn new Something"),
  );
};

export default HeaderComponent;
*/

const HeaderComponent = () => {
  let customCSS = 'code';
  const loggedIn = false;
  let user = loggedIn ? <p>User Logged In</p> : <p>Please Log In again</p>;
  let item = ['Item1','Item2','Item3'];
  return (
    <>
      <h1 className="header">This is header</h1>
      <p className="slogan">Learn new something</p>

      {/* JavaScript Expression in JSX */}
      <p className={customCSS} style={{textAlign:"center",fontSize:"20px"}}>25+40={25+40}</p>

      {/* Conditional Rendering */}
      <p style={{textAlign:"center",fontFamily:'sans-serif'}}>{user}</p>

      {/* Handling List in JSX */}
      <ul>
        {item.map((item,index)=>
          <li key={index}>{item}</li>
        )}
      </ul>
    </>
  )
}

export default HeaderComponent
