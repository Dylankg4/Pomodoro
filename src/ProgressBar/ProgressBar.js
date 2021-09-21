import React from "react"

export default function ProgressBar({session, breakDuration, focusDuration}){
  if(!session) return null
    const barProgress = (
        100 - (session.timeRemaining /
    ((`${session.label}` === "Focusing" ? focusDuration : breakDuration) *
       60)) *
    100)
    return(
      <div className="row mb-2">
      <div className="col">
        <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={barProgress} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${barProgress}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
            </div>
            </div>
    )
}