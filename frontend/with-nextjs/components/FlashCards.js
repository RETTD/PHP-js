import { Input, Button } from "rsuite";
import { useState, useEffect } from "react";

const BoxFlashCard = ({ state }) => {
  const [visible, setVisible] = useState(true);
  const [word, setWord] = useState();
  const [polish, setPL] = useState();
  const [english, setENG] = useState();
  const [index, setIndex] = useState(0);
  const [succes, setSucces] = useState();
  const [error, setError] = useState(false);

  function checkWord() {
    if (word == polish[index]) {
      setSucces(true);
    } else {
      setError(true);
    }
  }
  useEffect(() => {
    if (succes) {
      setVisible(false);
      setIndex(index + 1);
      setSucces(false);
      setError(false);
      setTimeout(() => {
        setVisible(true);
      }, 500);
    }
  }, [succes]);

  useEffect(() => {
    if (state) {
      const tempPolish = [];
      const tempEnglish = [];
      state.map((word) => {
        tempPolish.push(word.polish);
        tempEnglish.push(word.english);
      });
      setENG(tempEnglish);
      setPL(tempPolish);
    }
  }, [state]);

  return english && visible && polish ? (
    <div>
      <div className="box">
        <div className="english">{english[index]}</div>
        <div className="input">
          <p>Podaj polskie słowo</p>
          <Input
            onChange={(value) => {
              setWord(value);
            }}
          />
        </div>
        <Button appearance="primary" color="green" onClick={() => checkWord()}>
          Sprawdź!
        </Button>
        {error && <p>Spróbuj ponownie</p>}
      </div>
      <a style={{ marginLeft: 150 }} href="../">
        Wróć na stronę główną
      </a>
      <style jsx>{`
        .box {
          border: 1px solid blue;
          border-radius: 15px;
          background-color: white;
          min-width: 450px;
          min-height: 350px;
          flex-basis: 50%;
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 25px;
        }
        .input {
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .english {
          margin-bottom: 35px;
          margin-top: 50px;
          font-size: 20px;
        }
        .polish {
          margin-bottom: 35px;
        }
      `}</style>
    </div>
  ) : (
    <div />
  );
};
export default BoxFlashCard;
