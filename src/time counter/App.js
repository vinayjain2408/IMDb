import {useState } from 'react';
// import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [intervalId, setIntervalId] = useState(null);
  const [pausebtn , setPausebtn] = useState(false)

  function changeInput(e) {
    setInputValue(parseInt(e.target.value));

  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!intervalId && inputValue > 0) {
      const id = setInterval(() => {
        setInputValue((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
      }, 1000);
      setIntervalId(id);
      console.log(id)
    }
  }

  function handlePause(e){
    e.preventDefault()
    if(intervalId && !pausebtn){
        clearInterval(intervalId)
        setPausebtn(true)
    }
    else if(!intervalId && pausebtn){
      const id = setInterval(()=>{
        setInputValue((prevValue)=>(prevValue > 0 ? prevValue -1 : prevValue))
      })
      setIntervalId(id)
      setPausebtn(false)
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          placeholder='Enter Number'
          value={inputValue}
          onChange={changeInput}
        />
        <button type='submit'>Submit</button>
        <button onClick={handlePause}>{
          !pausebtn ? "pause" : "Resume"
        }</button>
      </form>
    </>
  );
}

export default App;
