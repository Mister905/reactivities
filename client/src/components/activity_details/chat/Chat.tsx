import React from "react";

const Chat = () => {
  return (
    <div>
      <div className="row">
        <div className="card col s12 m12">
          <div className="row">
            <div className="col m12 center-align">
              <h4>Event Chat</h4>
            </div>
          </div>
          <div className="row">
            <div className="card-panel grey lighten-5 z-depth-1">
              <div className="row valign-wrapper">
                <div className="col s4 m2">
                  <img
                    src="images/yuna.jpg"
                    alt=""
                    className="circle responsive-img valign"
                  />
                </div>
                <div className="col s8 m10">
                  <span className="black-text">
                    This is a square image. Add the "circle" class to it to make
                    it appear circular.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m12">
              <textarea className="event-chat" cols={30} rows={10}></textarea>
              <button className="btn btn-custom right mt-10">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
