import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 맛집",
    "여자",
  ]);
  let posts = "강남 고기 맛집";

  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modal변경] = useState(false);

  function 제목바꾸기() {
    // 글제목변경(['여자 코드 추천','강남 라면맛집','엑셀독학']);
    var newArray = [...글제목]; // deepCopy
    newArray[0] = "여자코트 추천";
    newArray[2] = "리액트 실습";
    글제목변경(newArray);
  }

  function 따봉변경하기(i,num) {
    let newA = [...따봉];
    newA[i] = newA[i] + num;
    따봉변경(newA);
    console.log(따봉);
  }

  function 정렬하기() {
    var newArray = [...글제목];
    const sortArray = newArray.sort();
    글제목변경(sortArray);
    console.log(sortArray);
  }

  function 반복된UI() {
    const 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>Hello</div>);
    }
    return 어레이;
  }
  const addToSave = () =>{
    let arrCopy =[...글제목];
    arrCopy.unshift(입력값);
    글제목변경(arrCopy);

    let 따봉복사 = [...따봉];
    따봉복사.unshift(0);
    따봉변경(따봉복사);
  }

  let [누른제목, 누른제목변경] = useState(0);
  let [입력값,입력값변경] = useState("입력하세요");

  return (
    <div className="App">
      <div className="black-nav">
        <div> 개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}> 제목 변경</button>
      <button onClick={정렬하기}> 정렬하기</button>
      <button  onClick={() => {   modal변경(!modal);     }} >  모달   </button>
      <hr></hr>
      <input value={입력값} onChange={(e)=>입력값변경(e.target.value)}></input>
      <input value={입력값} onChange={(e)=>입력값변경(e.target.value)}></input>
      <button onClick={addToSave}>저장</button>

      {글제목.map((글, i) => (
        <div className="list" key={글}>
          <h3 onClick={() => { 누른제목변경(i); }}>{글}
          <span onClick={() =>{따봉변경하기(i,-1); }}> 👎</span> 
          <span onClick={() =>{따봉변경하기(i,1); }}> 👍</span>{따봉[i]} {(따봉[i]>=0===true ? '😁' : '😒')}</h3>
          <p> 2월 17일 </p>
          <hr />
        </div>
      ))}

      <button  onClick={() => {  누른제목변경(0); modal변경(!modal);   }} > 버튼1  </button>
      <button  onClick={() => {  누른제목변경(1);   }} >   버튼2      </button>
      <button  onClick={() => {  누른제목변경(2);   }} >  버튼3      </button>
      
      {modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null}
      <Modal2 글제목={글제목} 누른제목={누른제목} />
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <Profile/>
    </div>
  );
}

function Modal2({글제목,누른제목}) {
  return (
    <div className="modal">
      <h2>{글제목[누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}


class Profile extends React.Component {

  constructor(){
    super();
    this.state = { name : 'Kim', age : 30 } 
  }

  changeName(){
    this.setState({name:"이순신",age:"111"});
  }
  // 화살표함수 사용하면 bind 생략 가능 
  changeName2=()=>{
    this.setState({name:"이순신2",age:"111"});
  }
    

   render(){
    return (
    <div>
      <h3> 저는 { this.state.name } 입니다 </h3>
      <button onClick={ ()=>{ this.setState( {name : 'Park'} ) } }> 버튼 </button>
      <button onClick={ this.changeName.bind(this) }> 버튼 </button>
      <button onClick={ this.changeName2 }> 버튼 </button>
    </div>
  )

} }



export default App;