// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connectWS } from "../ws";

export default function Home(){

  const nav = useNavigate();
  const myId = Number(localStorage.getItem("userId"));

  const [notiMap, setNotiMap] = useState({}); 
  // 예: { "2": 3 , "5": 1 }

  const loginAs = (id)=>{
    localStorage.setItem("userId", id);
    alert(id+"번 유저로 접속되었습니다");
    window.location.reload();
  }

  const goRoomManual = ()=>{
    const opp = prompt("상대방 ID 입력");
    if(opp) nav("/room/"+opp);
  }

  useEffect(()=>{
    if(!myId) return;

    const ws = connectWS(myId, (raw)=>{
      const [cmd, fromId] = raw.split(":");

      if(cmd==="NEW_MESSAGE"){
        setNotiMap(prev=>{
          const newCount = (prev[fromId] || 0) + 1;
          return { ...prev, [fromId]: newCount };
        });
      }
    });

    return ()=>ws.close();
  },[myId]);


  return(
    <div style={{padding:40, fontFamily:"sans-serif"}}>
      <h2>유저 선택</h2>

      <div style={{display:"flex", gap:10, marginBottom:20}}>
        <button onClick={()=>loginAs(1)}>사용자로 선택</button>
        <button onClick={()=>loginAs(2)}>관리자로 선택</button>
      </div>

      <button 
        onClick={goRoomManual} 
        style={{
          padding:"10px 20px",
          marginBottom:30,
          background:"#e2e2e2",
          borderRadius:8,
          cursor:"pointer"
        }}
      >
        채팅방 들어가기
      </button>

      {/* 알림 박스 리스트 */}
      <div style={{marginTop:20}}>
        {Object.entries(notiMap).map(([from, count])=>(
          <div
            key={from}
            onClick={()=>{
              setNotiMap(prev=>{
                const copy = {...prev};
                delete copy[from];
                return copy;
              });

              nav("/room/"+from);
            }}
            style={{
              background:"#fff3cd",
              border:"1px solid #f1c04c",
              padding:"15px 20px",
              borderRadius:"10px",
              cursor:"pointer",
              minWidth:"260px",
              textAlign:"center",
              fontSize:"16px",
              fontWeight:"500",
              color:"#856404",
              boxShadow:"0 2px 5px rgba(0,0,0,0.08)",
              marginBottom:"12px"
            }}
          >
            새 메시지 도착! (보낸사람: {from}) - {count}개
          </div>
        ))}
      </div>
    </div>
  );
}
