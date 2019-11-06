import React from 'react';
import Header from './common/header'
import { GlobalStyle } from './style.js';
import { IconStyle } from './common/static/iconfont/iconfont.js'
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <IconStyle />
      <Header />
    </div>
  );
}

export default App;
