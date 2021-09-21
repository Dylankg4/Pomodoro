import React from "react"
import {minutesToDuration} from "../utils/duration"


export default function FocusDuration({focusDuration, setFocusDuration, session}){
    function increaseFocusDuration(){
        if(focusDuration === 60) return
        return setFocusDuration(current => current+5)
      }
    
      function decreaseFocusDuration(){
        if(focusDuration === 5) return
        return setFocusDuration((current)=>current -5)
      }

      return(
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration */}
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={decreaseFocusDuration}
              disabled={session}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={increaseFocusDuration}
              disabled={session}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
        
      )
}