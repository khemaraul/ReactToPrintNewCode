import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';
import { Test } from './Test';
import PrintImg from './print.jpg';

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
        {/* <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => componentRef.current}
        /> */}
      <button style={{ marginLeft: "700px" }} onClick={handlePrint}><img src={PrintImg} width="20px" height="20px" /></button>
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div>
      
//         <h1>hello</h1>

//     </div>
//   );
// }

// export default App;


