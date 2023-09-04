import React from "react";
import { NoteKeyboard } from "@/components/NoteKeyboard";
import { Quiz } from "@/components/Quiz";

function Chord() {
  return (
    <div className="container h-full flex flex-col mx-auto p-4 py-8 overflow-x-hidden justify-between">
      <Quiz></Quiz>
      <NoteKeyboard></NoteKeyboard>
    </div>
  );
}

export default Chord;
