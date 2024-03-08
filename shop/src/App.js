// App.js
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import Data from "./components/data";
import { useState, useContext, useEffect, memo } from "react";
import React from "react";
import { Route, Switch } from 'react-router-dom';
import Card from "./components/Card"
import Detail from "./components/Detail"
import axios from 'axios';
import Cart from './components/Cart.js';

export const 재고context = React.createContext();
function App() {

  let [shoes, shoes변경] = useState(Data);
  let [show, setShow] = useState(false);



  let [재고, 재고변경] = useState([10, 11, 12]);

  const loading = () => {
    return (
      <div>
        <h2>loading.......</h2>
      </div>
    )
  };

  const list = () => {
    return (
      <div className="row">
        {
          shoes.map((a, i) => {
            return (
              <재고context.Provider value={재고} key={i}>
                <Card shoes={shoes[i]} i={i} />
              </재고context.Provider>
            )
          })
        }
      </div>
    )

  }

  const loading2 = <div>로딩중......</div>

  return (
    <div className="App">

      <NavBar />
      <Container className="background">
        <h1>20% Season Off</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>

      <Switch>
        <Route exact path="/">
          <div className="container">
            <Parent name="이유리" who="철지유" />
            {show ? loading() : list()}
            {show ? loading2 : null}

            <button className="btn btn-primary"
              onClick={() => {
                //axios.get('https://codingapple1.github.io/shop/data2.json')
                axios.get('data2.json')
                  .then((result) => {
                    console.log(result.data);
                    setShow(true);
                    shoes변경([...shoes, ...result.data]);
                    setTimeout(() => {
                      setShow(false);
                    }, 1000);
                  })
                  .catch(() => {
                    console.log("실패");
                    setShow(true);
                  })
              }}>더보기</button>

          </div>
        </Route>
        <Route path="/detail" exact>

        </Route>
        <Route path="/detail/:id" exact>
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
          </재고context.Provider>
        </Route>
        <Route path="/cart" >
          <Cart></Cart>
        </Route>
      </Switch>






    </div>
  );
}

function Parent(props) {
  return (
    <div>
      <Child1 name={props.name} />
      <Child2 who={props.who} />
    </div>
  )
}

function Child1() {
  useEffect(() => {
    console.log('렌더링됨1')
  });
  return <div>렌더링됨1</div>
}

//불필요한 렌더링을 막는 memo 함수 
let Child2 = memo(function(){
  useEffect(() => {
    console.log('렌더링됨2')
  });
  return <div>렌더링됨2</div>
})


export default App;