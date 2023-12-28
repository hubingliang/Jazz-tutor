import React from "react";
import { NoteKeyboard } from "@/components/NoteKeyboard";
import { Quiz } from "@/components/Quiz";
import { useSelections } from "ahooks";
import { RandomCard } from "./components/RandomCard";
import { useRecoilState } from "recoil";
import { randomConfigState, randomState } from "@/atom/random";

function Card() {
  const [randomData, setRandomData] = useRecoilState(randomState);
  const [randomConfig, setRandomConfig] = useRecoilState(randomConfigState);
  const keys = [
    "C",
    "F",
    "Bb",
    "Eb",
    "Ab",
    "Db",
    "Gb",
    "B",
    "E",
    "A",
    "D",
    "G",
  ];
  const times = ["4/4", "3/4", "5/4", "7/4"];
  const positions = ["0-5", "3-7", "5-9", "7-11"];
  const random = () => {
    const { keys, times, positions } = randomConfig;

    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomTime = times[Math.floor(Math.random() * times.length)];
    const randomPosition =
      positions[Math.floor(Math.random() * positions.length)];
    setRandomData({
      key: randomKey,
      time: randomTime,
      position: randomPosition,
    });
  };
  return (
    <div className="container h-full mx-auto p-4 py-8 overflow-x-hidden bg-base-200">
      <RandomCard
        data={["C", "F", "Bb", "Eb", "Ab", "Db", "Gb", "B", "E", "A", "D", "G"]}
        value={randomData.key}
        configKey="keys"
      ></RandomCard>
      <div className="divider"></div>
      <RandomCard
        data={["4/4", "3/4", "5/4", "7/4"]}
        configKey="times"
        value={randomData.time}
      ></RandomCard>
      <div className="divider"></div>
      <RandomCard
        data={["0-5", "3-7", "5-9", "7-11"]}
        configKey="positions"
        value={randomData.position}
      ></RandomCard>
      <a href="irealbook://Song Title=LastName FirstName=Style=Ab=n=T44*A{C^7 |A-7 |D-9 |G7#5 }">
        Song Title
      </a>
      <button
        className="btn btn-primary absolute bottom-4 right-4"
        onClick={random}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
          />
        </svg>
        Random
      </button>
    </div>
  );
}

export default Card;
