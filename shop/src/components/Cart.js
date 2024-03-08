import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { connect ,useSelector, useDispatch} from 'react-redux';
import {useRef} from 'react';


function Cart(props) {
    let item = useSelector((state) => state.reducer );
    let alertShow = useSelector((state) => state.reducer2 );
 //   let state = useSelector((state) => state );
   //console.log("item",item);
   let dispatch = useDispatch();

   const myRef = useRef(null);
   let [count,setCount] = useState(0);
   let [age,setAge] = useState(20);
   useEffect(()=>{
    myRef.current.focus();
    if(count !=0 && count <3 ){
        setAge(age+1);
    }
   },[count])





    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map((a, i) => {
                            return (
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.quan}</td>
                                    <td><button onClick={() => { dispatch({ type: '수량증가', idx: i }) }}> + </button>
                                        <button onClick={() => { dispatch({ type: '수량감소', idx: i }) }}> - </button> </td>
                                </tr>
                            )

                        })


                    }
                    


                </tbody>
            </Table>
            {
                        alertShow === true ? (
                            <div className="my-alert2">
                                <p>지금 구매하시면 신규할인 20% </p>
                                <button onClick={() => { dispatch({ type: "close" }) }}>닫기</button>
                            </div>

                        ) : null
            }

            <input ref={myRef}></input>
            <div>
                안녕하세요 전 {age} 살 입니다.
                <button onClick={()=>{
                            setCount(count+1);
                            console.log("count",count);
                            
                            if(count<3){
                                setAge(++age);
                            } 
                                
                            }}>나이 추가</button>
            </div>
        </div>
    )
}


// function state를props화(state) {
//    // console.log(state);

//     return {
//         item: state.reducer,

//         alertShow: state.reducer2
//     }

// }

export default (Cart)