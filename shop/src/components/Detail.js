import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components';
import './Detail .scss';
import { 재고context } from "../App";
import Nav from "react-bootstrap/Nav";
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";
//import { useParams } from "react-router";
//import { useParams } from "react-router-dom/cjs/react-router-dom";
function Detail(props) {
    let history = useHistory();
    let { id } = useParams();
    const { shoes } = props;
    //console.log(shoes);
    let findMall = shoes.find((shoe) => shoe.id == id);
   // console.log(findMall);


    // let 박스 = styled.div` padding : 20px; `;
    // let 제목 = styled.h4` font-size : 25px; 
    //                       color : ${(props) => props.색상}; `;

    // let DIV = styled.div`

    //     border: 1px solid blue;
    //     background : ${(props) => props.color};`;

    let [alert, alert변경] = useState(true);
    let [inputData, inputData변경] = useState('');
    useEffect(() => {
        let 타이머 = setTimeout(() => {
            alert변경(!alert);
           // console.log(alert);
        }, 2000);

        return () => { clearTimeout(타이머); };

    }, [inputData]);

    const 주문하기 = () => {

        props.재고변경([9, 10, 11]);

    };
    let [누른탭, 누른탭변경] = useState(0);
    let [스위치, 스위치변경] = useState(false);

    return (
        <div className="container">
            {/* <박스>

                <제목 색상={"red"}>Details 상세페이지</제목>

                <제목 색상="blue">안녕하세요2</제목>

            </박스>
            <DIV color="yellow"  >
                fasdf
                <div className="col-md-6">asdfsf</div>

            </DIV> */}
            <div className="red">
                레드존
                <p className="main-color">메인컬d러존</p>
            </div>
            {inputData}

            <input onChange={(e) => { inputData변경(e.target.value) }} />
            {
                alert === true ? (
                    <div className="my-alert2">
                        <p>재고가 얼마 남지 않았습니다</p>
                    </div>
                ) : null


            }

            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1
                            }.jpg`}
                        width="100%"
                        alt="image1"
                    />
                </div>
                <div ><Info 재고={props.재고}></Info></div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{findMall.title}</h4>
                    <p>{findMall.content}</p>
                    <p>{findMall.price}원</p>
                    <button className="btn btn-danger" onClick={() => { 주문하기() }}>주문하기</button>
                    <button className="btn btn-danger" onClick={() => { props.dispatch( {type : '항목추가',payload : {id : 2, name : '새로운상품', quan : 1}}  );
                                                                        console.log("완료",props.state);
                                                                        history.push('/cart'); 
                                                                        //window.location.reload();
                                                                        
                                                                        
                                                                        }}>항목추가</button>
                    <button className="btn btn-primary m-1" onClick={() => { history.goBack(); }}>뒤로가기</button>
                    <button className="btn btn-primary m-1" onClick={() => { history.push("/"); }}>뒤로가기2</button>
                </div>

            </div>

            {/* <Nav variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={() => { 누른탭변경(0) }}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => { 누른탭변경(1) }}>Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => { 누른탭변경(2) }}>Option 2</Nav.Link>
                </Nav.Item>
            </Nav>
            <CSSTransition in={스위치} classNames="wow" timeout={500}>

            <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />

            </CSSTransition>  */}

            <Nav variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={() => { 스위치변경(false); 누른탭변경(0) }}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => { 스위치변경(false); 누른탭변경(1) }}>Option 2</Nav.Link>
                </Nav.Item>
            </Nav>
            <CSSTransition in={스위치} classNames="wow" timeout={500}>
                <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
            </CSSTransition>


        </div>
    );
};

function TabContents(props) {

    if (props.누른탭 === 0) {

        return <div>내용0<br /><br /></div>
    }

    else if (props.누른탭 === 1) {

        return <div>내용1<br /><br /></div>
    }

    else if (props.누른탭 === 2) {

        return <div>내용2<br /><br /></div>

    }
}

function TabContent(props){

    useEffect( ()=>{ props.스위치변경(true);});
 
      //탭내용 컴포넌트가 로드될 때 true });
    
     if (props.누른탭 === 0){
 
            return <div>내용0<br /><br /></div>
 
     }else if (props.누른탭 === 1){
 
        return <div>내용1<br /><br /></div>
 
      }else if (props.누른탭 === 2){
 
        return <div>내용2<br /><br /></div>

        }

    

}

function ddd() {

    return (<div>내용0</div>);
}


function Info() {
    let 재고 = useContext(재고context);
    return (
        <p>재고: {재고[0]}</p>
    )
}
function state를props화(state){
   
     return {
   
        state : state.reducer,
   
        alert열렸니 : state.reducer2
   
     }
   
   }

export default connect(state를props화)(Detail)