import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  useEffect(() => {
    // Change tab heading
    document.title = 'Chat App';

    // Change favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = './back.ico';
    }
  }, []);
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
