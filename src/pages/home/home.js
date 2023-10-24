import Header from "../../components/header/header";
import Numpad from "../../components/numpad/numpad";
import Result from "../../components/result/result";
import "./home.css";

function Home({ result, setResult }) {
  return (
    <div>
      <Header />
      <Result result={result} />
      <Numpad result={result} setResult={setResult} />
    </div>
  );
}

export default Home;
