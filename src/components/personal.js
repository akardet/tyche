import React from "react";

export default function Personal() {
  return (
    <div className="container">
      <div className="name">Sam Stone</div>
      <div className="title">Software Developer</div>
      <div className="metalinks">[bloop]</div>
      <div className="contact">
        <div className="contact-subcontainer">
          <div className="icon" />
          <div className="contact-info">myemail@gmail.com</div>
        </div>
        <div className="contact-subcontainer">
          <div className="icon" />
          <div className="contact-info">+1 (800) 555-1234</div>
        </div>
        <div className="contact-subcontainer">
          <div className="icon" />
          <div className="contact-info">Austin, TX</div>
        </div>
      </div>
    </div>
  );
}
