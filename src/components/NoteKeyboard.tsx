import { useSetRecoilState } from "recoil";
import { answerState } from "../atom/answer";
import notes from "../data/allNote.json";
import _ from "lodash";

const notePositionMap: {
  [index: string]: number[] | string[];
} = {
  Cbb: [5, 1],
  Cb: [4, 1],
  C: ["3", "1"],
  "C#": [2, 1],
  "C##": [1, 1],
  Dbb: [5, 2],
  Db: [4, 2],
  D: [3, 2],
  "D#": [2, 2],
  "D##": [1, 2],
  Ebb: [5, 3],
  Eb: [4, 3],
  E: [3, 3],
  "E#": [2, 3],
  "E##": [1, 3],
  Fbb: [5, 4],
  Fb: [4, 4],
  F: [3, 4],
  "F#": [2, 4],
  "F##": [1, 4],
  Gbb: [5, 5],
  Gb: [4, 5],
  G: [3, 5],
  "G#": [2, 5],
  "G##": [1, 5],
  Abb: [5, 6],
  Ab: [4, 6],
  A: [3, 6],
  "A#": [2, 6],
  "A##": [1, 6],
  Bbb: [5, 7],
  Bb: [4, 7],
  B: [3, 7],
  "B#": [2, 7],
  "B##": [1, 7],
};

export const NoteKeyboard = () => {
  const setAnswer = useSetRecoilState(answerState);

  return (
    <div className="h-[160px] overflow-scroll rounded-md">
      <div className="grid grid-cols-7 gap-1 grid-rows-5 max-w-2xl mx-auto">
        {notes.map((note) => {
          const [col, row] = notePositionMap[note];
          return (
            <button
              onClick={() => {
                setAnswer((answer) => {
                  const tmpAnswer = [...answer];
                  tmpAnswer[_.findIndex(answer, (o) => o === "")] = note;
                  console.log("tmpAnswer: ", tmpAnswer);
                  return tmpAnswer;
                });
              }}
              className={`btn music-text text-lg col-start-${row} row-start-${col}`}
              key={note}
            >
              {note}
            </button>
          );
        })}
      </div>
    </div>
  );
};
