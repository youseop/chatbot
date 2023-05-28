import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";
import FirstPage from "./components/pages/FirstPage";
import ChatBotPage from "./components/pages/ChatBotPage";
import ResultPage from "./components/pages/ResultPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/chatbot" element={<ChatBotPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
