import React from "react";
// import user from "../data/user";

function Links(prop) {
  console.log('Links Prop:', prop)
  return (
    <div>
      <h3>Links</h3>
      <a href={prop.github}></a>
      <a href={prop.linkedin}></a>
    </div>
  )
}

function About(props) {
  console.log("props:", props)
  if(props.bio) {
    <p>{props.bio}</p>
  } else {
    return null
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin}/>

    </div>
  );
}

export default About;
