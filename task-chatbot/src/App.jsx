import { useState } from "react";
import "./App.css";

const itemTabs = [
  "불타는 대검",
  "얼어붙은 창",
  "폭풍의 활",
  "용가죽 갑옷",
  "수정 방패",
  "은빛 보호 투구",
  "힐링 포션",
  "마나 포션",
  "힘의 물약",
  "파이어볼 스크롤",
  "텔레포트 스크롤",
  "시간 감속 마법서",
  "하늘 민들레",
  "바다의 조개껍질",
  "고대 뼛조각",
  "행운의 반지",
  "시간여행 시계",
  "백엔드 개발자의 펜",
];

function App() {
  const [messages, setMessages] = useState([]);

  // 메시지 전송 함수
  const sendMessage = async (text) => {
    // 사용자 메시지 먼저 화면에 표시
    setMessages((prev) => [...prev, { sender: "user", text }]);

    try {
      const res = await fetch("http://192.168.2.29:8090/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "kim",
          message: text,
        }),
      });

      // ▼ 응답이 JSON인지 확인
      const data = await res.json();

      if (data?.response) {
        setMessages(data.response); // 서버에서 내려온 전체 메시지로 갱신
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: "응답 형식이 올바르지 않습니다." },
        ]);
      }
    } catch (error) {
      console.error("Fetch Error:", error);

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "서버와 통신할 수 없습니다." },
      ]);
    }
  };

  return (
    <div className="shop-wrapper">
      <h2 className="shop-title">용사마트 챗봇</h2>
      <p className="shop-sub">아이템을 선택해보세요:</p>

      {/* 아이템 탭 */}
      <div className="item-tab-container">
        {itemTabs.map((item, i) => (
          <button
            key={i}
            className="item-tab"
            onClick={() => sendMessage(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* 채팅 영역 */}
      <div className="chat-container">
        {messages.map((m, i) => (
          <div key={i} className={`chat-bubble ${m.sender}`}>
            {m.text}
          </div>
        ))}
      </div>

      {/* 입력창 */}
      <div className="input-panel">
        <input
          placeholder="메시지를 입력하세요…"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <button>전송</button>
      </div>
    </div>
  );
}

export default App;
