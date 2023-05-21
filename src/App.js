import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState(["한식맛집", "양식맛집", "일식맛집"]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState("");
  const [a, setA] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h2>희연이의 맛집 Blog</h2>
      </div>
      {title.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal((cur) => !cur);
                setA(i);
              }}
            >
              {title[i]}
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                ❤️
              </span>
              {like[i]}
            </h4>
            <p>5월 14일 발행</p>
            <button className="delete"
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              글삭제
            </button>
          </div>
        );
      })}

      {modal ? <Modal title={title} a={a} /> : null}

      <input className="box"
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button className="btn"
        onClick={() => {
          let copy = [...title];
          copy.unshift(input);
          setTitle(copy);
        }}
      >
        글발행
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.a]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
