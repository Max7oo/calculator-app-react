import "./numpad.css";

function Numpad({ result, setResult }) {
  const doMath = (e) => {
    if (result[0] === 0) {
      result.shift();
    }
    setResult([...result, e]);
  };

  const delNumber = () => {
    console.log(result);
    const newResult = result.slice(0, result.length - 1);
    setResult(newResult);
  };

  const resetResult = () => {
    setResult([0]);
  };

  const calculateResult = () => {
    console.log(result.join(""));
    setResult([eval(result.join(""))]);
  };

  return (
    <section id="numpad">
      <span onClick={() => doMath(7)}>7</span>
      <span onClick={() => doMath(8)}>8</span>
      <span onClick={() => doMath(9)}>9</span>
      <span className="special" onClick={() => delNumber()}>
        DEL
      </span>
      <span onClick={() => doMath(4)}>4</span>
      <span onClick={() => doMath(5)}>5</span>
      <span onClick={() => doMath(6)}>6</span>
      <span onClick={() => doMath("+")}>+</span>
      <span onClick={() => doMath(1)}>1</span>
      <span onClick={() => doMath(2)}>2</span>
      <span onClick={() => doMath(3)}>3</span>
      <span onClick={() => doMath("-")}>-</span>
      <span onClick={() => doMath(".")}>.</span>
      <span onClick={() => doMath(0)}>0</span>
      <span onClick={() => doMath("/")}>/</span>
      <span onClick={() => doMath("*")}>x</span>
      <span className="special" onClick={() => resetResult()}>
        RESET
      </span>
      <span className="result" onClick={() => calculateResult()}>
        =
      </span>
    </section>
  );
}

export default Numpad;
