import React from 'react';
import './App.css';
import Header from './headerComponent/Header';
import Sidebar from './sidebarComponent/Sidebar';
import Feed from './feedComponent/Feed';
import Widgets from './widgetComponent/Widgets';

function App() {
  return (
    <div className="app">
      
	  <Header />
	  
	  <div className='app__body'>
		<Sidebar />
		<Feed />
		<Widgets />
	  </div>
	  
    </div>
  );
}

export default App;
