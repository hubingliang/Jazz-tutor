import { Chord } from "tonal";
import _ from "lodash";
import notes from "../data/note.json";
import chordTypes from "../data/chordType.json";

export const getRandomChord = () => {
  const randomNote = notes[_.random(0, notes.length - 1)];
  const randomChordType = chordTypes[_.random(0, chordTypes.length - 1)];
  return Chord.getChord(randomChordType, randomNote);
};
