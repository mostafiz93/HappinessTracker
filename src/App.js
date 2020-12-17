import React from 'react';
// import { Sidebar } from 'semantic-ui-react';
import './App.css';
import TopBar from './topBar/topBar'
import SideBar from './sideBar/sideBar'
import Content from './content/content'

function App() {
  return (
    <div className="main">
      <TopBar className="first"/>
      <SideBar className="second"/>
      <Content className="third"/>
	  </div>
  );
}

export default App;
