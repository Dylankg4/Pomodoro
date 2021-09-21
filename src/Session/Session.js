import React from "react"
import {secondsToDuration, minutesToDuration} from "../utils/duration"
import ProgressBar from "../ProgressBar/ProgressBar"

export default function Session({session, focusDuration, breakDuration, pausing}){
    if (!session) return null

    const pauser = pausing ? "": "Pausing"

    return(
        <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for {session?.label === "Focusing" ? minutesToDuration(focusDuration): minutesToDuration(breakDuration)} minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
            <h2>{pauser}</h2>
          </div>
        </div>
      </div>
    )
}

