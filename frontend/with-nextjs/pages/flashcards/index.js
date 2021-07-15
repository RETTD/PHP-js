import axios from "axios";
import { Service } from "axios-middleware";
import BoxFlashCard from "../../components/FlashCards";
import Header from "../../components/Header";
import "rsuite/styles/less/index.less";
import { useState } from "react";

const FlashCards = () => {
  const service = new Service(axios);
  const url = "http://localhost:8012/words.php";
  const [state, setState] = useState();
  service.register({
    onRequest(config) {
      // console.log("onRequest");
      return config;
    },
    onSync(promise) {
      // console.log("onSync");
      return promise;
    },
    onResponse(response) {
      // console.log("onResponse");
      return response;
    },
  });

  // console.log("Ready to fetch.");

  // Just use axios like you would normally.

  if (!state) {
    axios(url).then(({ data }) => {
      setState(data);
    });
  }

  // console.log('state', state);
  return (
    <div>
      <Header />
      <div className="page">
        <BoxFlashCard state={state} />
        <style jsx>{`
          .page {
            background-color: #eee9da;
            width: auto;
            height: 100vh;
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    </div>
  );
};
export default FlashCards;
