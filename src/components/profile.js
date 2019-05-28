import React from "react";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__name">Sam Stone</div>
      <div className="profile__title">Software Developer</div>
      <div className="profile__glyph">[bloop]</div>
      <div className="contact">
        <div className="contact__item">
          <div className="contact__item--icon" />
          <div className="contact__item--text">myemail@gmail.com</div>
        </div>
        <div className="contact__item">
          <div className="contact__item--icon" />
          <div className="contact__item--text">+1 (800) 555 -1234</div>
        </div>
        <div className="contact__item">
          <div className="contact__item--icon" />
          <div className="contact__item--text">Austin, TX</div>
        </div>
      </div>
    </div>
  );
}
