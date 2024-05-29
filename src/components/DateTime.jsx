import React from "react";

function DateTime() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="form-group">
            <input
              type="date"
              name="date"
              title="date"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="form-group">
            <input
              type="time"
              name="date"
              title="date"
              className="form-control"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateTime;
