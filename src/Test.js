import React from "react";

export const Test = React.forwardRef((props, ref) => {
    return (

      <div ref={ref}>
        My cool content here!
      </div>
      
    );
  });