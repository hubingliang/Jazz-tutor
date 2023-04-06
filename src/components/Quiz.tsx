import _ from "lodash";
import { memo, useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { answerState } from "../atom/answer";
import { chordQuizState } from "../atom/quiz";
import { getRandomChord } from "../lib/music";

// ["C", "F", "Bb", "Eb", "Ab", "Db", "F#", "B", "E", "A", "D", "G"]
// ["maj7", "m7", "7", "dim7", "m7b5"]

enum QuizStatus {
  NORMAL,
  SUCCESS,
  FAILURE,
}

export const Quiz = memo(() => {
  const [answer, setAnswer] = useRecoilState(answerState);
  const [chordQuiz, setChordQuiz] = useRecoilState(chordQuizState);
  const [quizStatus, setQuizStatus] = useState<QuizStatus>(QuizStatus.NORMAL);
  const checkAnswer = useCallback(
    (answer: string[]) => {
      if (_.every(answer, Boolean)) {
        const isCorrect = _.isEqual(answer, chordQuiz.notes);
        if (isCorrect) {
          setQuizStatus(QuizStatus.SUCCESS);
          setTimeout(() => {
            reset();
          }, 500);
        } else {
          setQuizStatus(QuizStatus.FAILURE);
          setTimeout(() => {
            setAnswer(["", "", "", ""]);
            setNeedShowHint(true);
            setQuizStatus(QuizStatus.NORMAL);
          }, 500);
        }
      }
    },
    [chordQuiz, answer]
  );
  const reset = useCallback(() => {
    setChordQuiz(getRandomChord());
    setNeedShowHint(false);
    setAnswer(["", "", "", ""]);
    setQuizStatus(QuizStatus.NORMAL);
  }, [chordQuiz]);
  const [needShowHint, setNeedShowHint] = useState(false);
  useEffect(() => {
    if (_.every(answer, Boolean)) {
      checkAnswer(answer);
    }
  }, [answer, checkAnswer]);
  return (
    <div className="flex-1 flex flex-col">
      {/* <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Jazz tutor</h2>
          <p>Jazz up your music theory skills with us!</p>
        </div>
      </div> */}
      <h1 className="text-6xl font-bold music-text text-center">
        {chordQuiz.symbol}
      </h1>

      <div className="card bg-base-100 flex-1 my-2">
        <div className="card-body items-center text-center">
          {needShowHint && (
            <div className="flex">
              {chordQuiz.notes.map((note, i) => (
                <div className="indicator" key={note}>
                  <span className="indicator-item indicator-center indicator-bottom badge badge-primary">
                    {chordQuiz.intervals[i]}
                  </span>
                  <kbd className="kbd music-text text-3xl bg-green-100">{note}</kbd>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl my-4 mb-10">
        <div className="card-body items-center text-center">
          <h1 className="text-3xl music-text text-center h-[66px] flex">
            {answer.map((note, i) => (
              <kbd
                className={`kbd ${
                  quizStatus === QuizStatus.SUCCESS
                    ? "bg-green-100"
                    : quizStatus === QuizStatus.FAILURE
                    ? "bg-red-100"
                    : ""
                }`}
                key={i}
              >
                {note}
              </kbd>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
});
