import React from "react";
import "./App.css";
import { NoteKeyboard } from "./components/NoteKeyboard";
import { Quiz } from "./components/Quiz";

function App() {
  return (
    <div className="container flex-1 flex flex-col mx-auto pt-10 p-4 overflow-x-hidden">
      <Quiz></Quiz>
      <NoteKeyboard></NoteKeyboard>
    </div>
  );
}

export default App;
