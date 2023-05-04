// import logo from './logo.svg';
import './App.css';
import AaA from './child.js';
import TimerComponent from './timer';


function App() {
  
  const text = "인프런 수강생 여러분 화이팅!";
  const hell = function (){
    return (<h3>인프런 강의 너무 좋아</h3>);
  }

  const sayhell2 = function(){
    alert("어어어어어어");
  }
  
  return (
    <div>
      <h1> 안녕하세요 </h1>
      <h2> {text} </h2>
      {hell()}
      <div onClick={sayhell2}> 클릭해 주세요.</div>
      <TimerComponent />

      <AaA name={"로로"} age={27}/>
      <AaA age={27} name={"바바바"}/>
      

    </div>
  );
}

export default App;
