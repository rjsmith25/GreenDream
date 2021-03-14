import React from "react";

function RoomDetailSteps({ steps }) {
  let content = null;
  if (steps === 1) {
    content = (
      <>
        <div className="step-checked">
          <i className="fas fa-check"></i>
        </div>
        <hr />
        <div className="step-2">2</div>
        <hr />
        <div className="step-3">3</div>
      </>
    );
  }

  if (steps === 2) {
    content = (
      <>
        <div className="step-checked">
          <i className="fas fa-check"></i>
        </div>
        <hr />
        <div className="step-checked">
          <i className="fas fa-check"></i>
        </div>
        <hr />
        <div className="step-3">3</div>
      </>
    );
  }

  if (steps === 3) {
    content = (
      <>
        <div className="step-checked">
          <i className="fas fa-check"></i>
        </div>
        <hr />
        <div className="step-checked">
          <i className="fas fa-check"></i>
        </div>
        <hr />
        <div className="step-checked">
          <i className="fas fa-check"></i>
        </div>
      </>
    );
  }

  return <div className="steps flex">{content}</div>;
}

export default RoomDetailSteps;
