import React, { useMemo } from "react";
import { NoteKeyboard } from "@/components/NoteKeyboard";
import { Quiz } from "@/components/Quiz";
import { useSelections } from "ahooks";
import { RandomCard } from "./components/RandomCard";
import { useRecoilState } from "recoil";
import { randomConfigState, randomState } from "@/atom/random";
import {
  CHORD_TYPES,
  GUITAR_POSITIONS,
  MUSIC_KEYS,
  MUSIC_TIMES,
} from "@/constants/music";
import _ from "lodash";
import { Chord } from "tonal";
import moment from "moment";

function Card() {
  const [randomData, setRandomData] = useRecoilState(randomState);
  const [randomConfig, setRandomConfig] = useRecoilState(randomConfigState);
  const random = () => {
    const { keys, times, positions, chordTypes } = randomConfig;

    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomTime = times[Math.floor(Math.random() * times.length)];
    const randomChordType =
      chordTypes[Math.floor(Math.random() * chordTypes.length)];
    const randomPosition =
      positions[Math.floor(Math.random() * positions.length)];
    setRandomData({
      key: randomKey,
      chords: _.shuffle(keys),
      time: randomTime,
      position: randomPosition,
      chordType: randomChordType,
    });
  };

  const ireaproUrl = useMemo(() => {
    const ireaproContent = randomData.chords
      .map((note, index) => {
        const bar = index === 0 ? "[" : index % 4 === 0 ? "[" : "|";
        //  index % 4 === 0 ? "[" : "|";
        return bar + note + randomData.chordType;
      })
      .join("");
    return `irealbook://${moment().format(
      "D-MM-YYYY"
    )}=Tutor Jazz=Medium Swing=C=n=T44*A${ireaproContent}Z`;
  }, [randomData]);
  console.log("ireaproUrl: ", ireaproUrl);

  return (
    <div className="container h-full mx-auto p-4 py-8 overflow-x-hidden bg-base-100">
      <RandomCard
        data={MUSIC_KEYS}
        value={randomData.chords}
        configKey="keys"
      ></RandomCard>
      <div className="divider"></div>
      <RandomCard
        data={MUSIC_TIMES}
        configKey="times"
        value={randomData.time}
      ></RandomCard>
      <div className="divider"></div>
      <RandomCard
        data={GUITAR_POSITIONS}
        configKey="positions"
        value={randomData.position}
      ></RandomCard>
      <div className="divider"></div>
      <RandomCard
        data={CHORD_TYPES}
        configKey="chordTypes"
        value={randomData.chordType}
      ></RandomCard>
      <div className="absolute bottom-4 right-4">
        <button className="btn btn-primary mr-2" onClick={random}>
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
        <a className="btn btn-accent" href={ireaproUrl}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
          irealpro
        </a>
      </div>
    </div>
  );
}

export default Card;
