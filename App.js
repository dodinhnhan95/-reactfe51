import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoStateless from './Components/DemoStateless';
import DemoStateFul from './Components/DemoStateFul';
import BaiTaplayout1 from './Components/BaiTapLayoutComponent/BaiTaplayout1';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';

function App() {
  return (
    <div className="App">
      {/* <DemoStateless/>
      <DemoStateFul/> */}
      {/* <BaiTaplayout1/> */}
      {/* <Databinding/> */}
      <HandleEvent/>
    </div>
  );
}

export default App;
