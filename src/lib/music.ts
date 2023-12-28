import { Chord } from "tonal";
import _ from "lodash";
import configNotes from "../data/note.json";
import chordTypes from "../data/chordType.json";

export const getRandomChord = (notes = configNotes) => {
  const randomNote = notes[_.random(0, notes.length - 1)];
  const randomChordType = chordTypes[_.random(0, chordTypes.length - 1)];
  return Chord.getChord(randomChordType, randomNote);
};
