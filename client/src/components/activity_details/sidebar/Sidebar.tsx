import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="row">
        <div className="card col m11 offset-m1">
          <div className="row mb-0">
            <div className="card col m12 sidebar-attendance-heading center-align mb-0">
              3 People Going
            </div>
          </div>
          <div className="row">
            <div className="col m12">
              <div className="collection">
                <a href="#!" className="collection-item">
                  <span className="badge">1</span>Alan
                </a>
                <a href="#!" className="collection-item">
                  <span className="new badge">4</span>Alan
                </a>
                <a href="#!" className="collection-item">
                  Alan
                </a>
                <a href="#!" className="collection-item">
                  <span className="badge">14</span>Alan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
