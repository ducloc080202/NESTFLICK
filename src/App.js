import React, { useEffect, useState ,useRef} from "react";
import ReactDOM from 'react-dom'
import Card from "./component/card";
import './App.css'
// 2d148a17
const App=()=>{
    const inputRef = useRef(null);
       
    const [data,setData]=useState([])
    var getMovie=(key)=>{
        let infoAPI=`https://www.omdbapi.com/?s=${key}&apikey=2d148a17`
        fetch(infoAPI,{
            referrerPolicy: "unsafe_url" 
        }
            )
            .then(function (res){
                return res.json();
            })
            .then(function(info){
                if(info.Response=="True"){
                    setData(info.Search)
                }else{
                    setData([])
                }
            })
    }
   
    function handleClick() {
        // console.log(inputRef.current.value);
        getMovie(inputRef.current.value);   
      }
  
   
    return(
        <>
            <div className="header">
                <h1>NESTFLICK</h1>
                <input ref={inputRef} id="search" placeholder="Nhập tên phim cần tìm..."></input>
                <button onClick={handleClick}>Tìm kiếm</button>
        </div>
        <div className="main">
        
        {
            data.length>0?
                data.map((item)=>{
                                return (
                                    <Card 
                                    Year={item.Year}
                                    Poster={item.Poster}
                                    Title={item.Title}
                                    />
                                )
                            }
                        )
                : 
                <p id='notfound'> không tìm thấy phim...</p>
        }
       
        </div>
        </>
    );
}

export default App;
