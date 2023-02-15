import React from "react";
import "./App.css";

function App() {
  const number = 165;
  const rows = Math.floor(number / 20);
  const peopleInLastRow = number - rows * 20;
  const arrIncrement1 = new Array(rows === 0 ? peopleInLastRow : 20).fill(0);
  const arrDecrement1 = new Array(rows === 1 ? peopleInLastRow : 20).fill(0);
  const arrIncrement2 = new Array(rows === 2 ? peopleInLastRow : 20).fill(0);
  const arrDecrement2 = new Array(rows === 3 ? peopleInLastRow : 20).fill(0);
  const arrIncrement3 = new Array(rows === 4 ? peopleInLastRow : 20).fill(0);
  const arrDecrement3 = new Array(rows === 5 ? peopleInLastRow : 20).fill(0);
  const arrIncrement4 = new Array(rows === 6 ? peopleInLastRow : 20).fill(0);
  const arrDecrement4 = new Array(rows === 7 ? peopleInLastRow : 20).fill(0);
  const arrIncrement5 = new Array(rows === 8 ? peopleInLastRow : 20).fill(0);
  const arrDecrement5 = new Array(rows === 9 ? peopleInLastRow : 20).fill(0);
  const arrIncrement6 = new Array(rows === 10 ? peopleInLastRow : 20).fill(0);
  const arrDecrement6 = new Array(rows === 11 ? peopleInLastRow : 20).fill(0);
  const arrIncrement7 = new Array(rows === 12 ? peopleInLastRow : 20).fill(0);

  const restPeopleForIncrement = new Array(
    20 -
      ((rows === 0 && arrIncrement1.length) ||
        (rows === 2 && arrIncrement2.length) ||
        (rows === 4 && arrIncrement3.length) ||
        (rows === 6 && arrIncrement4.length) ||
        (rows === 8 && arrIncrement5.length) ||
        (rows === 10 && arrIncrement6.length))
  ).fill(0);
  const restPeopleForDecrement = new Array(
    20 -
      ((rows === 1 && arrDecrement1.length) ||
        (rows === 3 && arrDecrement2.length) ||
        (rows === 5 && arrDecrement3.length) ||
        (rows === 7 && arrDecrement4.length) ||
        (rows === 9 && arrDecrement5.length) ||
        (rows === 11 && arrDecrement6.length))
  ).fill(0);

  return (
    <div class="container">
      {/* ========== 1 - 20 ========= */}
      <ul
        class={`${
          rows >= 1 ? "verticalActive" : "verticalInactive"
        } progressbar-increment1 progressbar lastVerticalLine`}
      >
        {arrIncrement1.map((a) => (
          <li class={`${rows >= 0 && "active"} verticalGap`}></li>
        ))}
        {rows === 0 &&
          restPeopleForIncrement.map((a) => (
            <li class={`${rows >= 1 && "active"} verticalGap`}></li>
          ))}
      </ul>
      {/* ========== 20 - 40 ========= */}
      <ul
        class={`${
          rows >= 2 ? "verticalActive" : "verticalInactive"
        } progressbar-decrement1 progressbar firstVerticalLine`}
      >
        {rows === 1 &&
          restPeopleForDecrement.map((a) => (
            <li class={`${rows >= 2 && "active"} verticalGap`}></li>
          ))}
        {arrDecrement1.map((a) => (
          <li class={`${rows >= 1 && "active"} verticalGap`}></li>
        ))}
      </ul>
      {/* ========== 40 - 60 ========= */}
      <ul
        class={`${
          rows >= 3 ? "verticalActive" : "verticalInactive"
        } progressbar-increment2 progressbar lastVerticalLine`}
      >
        {arrIncrement2.map((a) => (
          <li class={`${rows >= 2 && "active"} verticalGap`}></li>
        ))}
        {rows === 2 &&
          restPeopleForIncrement.map((a) => (
            <li class={`${rows >= 3 && "active"} verticalGap`}></li>
          ))}
      </ul>
      {/* ========== 60 - 80 ========= */}
      <ul
        class={`${
          rows >= 4 ? "verticalActive" : "verticalInactive"
        } progressbar-decrement2 progressbar firstVerticalLine`}
      >
        {rows === 3 &&
          restPeopleForDecrement.map((a) => (
            <li class={`${rows >= 4 && "active"} verticalGap`}></li>
          ))}
        {arrDecrement2.map((a) => (
          <li class={`${rows >= 3 && "active"} verticalGap`}></li>
        ))}
      </ul>
      {/* ========== 80 - 100 ========= */}
      <ul
        class={`${
          rows >= 5 ? "verticalActive" : "verticalInactive"
        } progressbar-increment3 progressbar lastVerticalLine`}
      >
        {arrIncrement3.map((a) => (
          <li class={`${rows >= 4 && "active"} verticalGap`}></li>
        ))}
        {rows === 4 &&
          restPeopleForIncrement.map((a) => (
            <li class={`${rows >= 5 && "active"} verticalGap`}></li>
          ))}
      </ul>
      {/* ========== 100 - 120 ========= */}
      <ul
        class={`${
          rows >= 6 ? "verticalActive" : "verticalInactive"
        } progressbar-decrement3 progressbar firstVerticalLine`}
      >
        {rows === 5 &&
          restPeopleForDecrement.map((a) => (
            <li class={`${rows >= 6 && "active"} verticalGap`}></li>
          ))}
        {arrDecrement3.map((a) => (
          <li class={`${rows >= 5 && "active"} verticalGap`}></li>
        ))}
      </ul>
      {/* ========== 120 - 140 ========= */}
      <ul
        class={`${
          rows >= 7 ? "verticalActive" : "verticalInactive"
        } progressbar-increment4 progressbar lastVerticalLine`}
      >
        {arrIncrement4.map((a) => (
          <li class={`${rows >= 6 && "active"} verticalGap`}></li>
        ))}
        {rows === 6 &&
          restPeopleForIncrement.map((a) => (
            <li class={`${rows >= 7 && "active"} verticalGap`}></li>
          ))}
      </ul>
      {/* ========== 140 - 160 ========= */}
      <ul
        class={`${
          rows >= 8 ? "verticalActive" : "verticalInactive"
        } progressbar-decrement4 progressbar firstVerticalLine`}
      >
        {rows === 7 &&
          restPeopleForDecrement.map((a) => (
            <li class={`${rows >= 8 && "active"} verticalGap`}></li>
          ))}
        {arrDecrement4.map((a) => (
          <li class={`${rows >= 7 && "active"} verticalGap`}></li>
        ))}
      </ul>
      {/* ========== 160 - 180 ========= */}
      <ul
        class={`${
          rows >= 9 ? "verticalActive" : "verticalInactive"
        } progressbar-increment5 progressbar lastVerticalLine`}
      >
        {arrIncrement5.map((a) => (
          <li class={`${rows >= 8 && "active"} verticalGap`}></li>
        ))}
        {rows === 8 &&
          restPeopleForIncrement.map((a) => (
            <li class={`${rows >= 9 && "active"} verticalGap`}></li>
          ))}
      </ul>
      {/* ========== 180 - 200 ========= */}
      <ul
        class={`${
          rows >= 10 ? "verticalActive" : "verticalInactive"
        } progressbar-decrement5 progressbar firstVerticalLine`}
      >
        {rows === 9 &&
          restPeopleForDecrement.map((a) => (
            <li class={`${rows >= 10 && "active"} verticalGap`}></li>
          ))}
        {arrDecrement5.map((a) => (
          <li class={`${rows >= 9 && "active"} verticalGap`}></li>
        ))}
      </ul>
      {/* ========== 200 - 220 ========= */}
      <ul
        class={`${
          rows >= 9 ? "verticalActive" : "verticalInactive"
        } progressbar-increment6 progressbar lastVerticalLine`}
      >
        {arrIncrement6.map((a) => (
          <li class={`${rows >= 10 && "active"} verticalGap`}></li>
        ))}
        {rows === 10 &&
          restPeopleForIncrement.map((a) => (
            <li class={`${rows >= 11 && "active"} verticalGap`}></li>
          ))}
      </ul>
      {/* ========== 220 - 240 ========= */}
      <ul
        class={`${
          rows >= 12 ? "verticalActive" : "verticalInactive"
        } progressbar-decrement6 progressbar firstVerticalLine`}
      >
        {rows === 11 &&
          restPeopleForDecrement.map((a) => (
            <li class={`${rows >= 12 && "active"} verticalGap`}></li>
          ))}
        {arrDecrement6.map((a) => (
          <li class={`${rows >= 11 && "active"} verticalGap`}></li>
        ))}
      </ul>
      {/* ========== 240 - 260 ========= */}
      <ul class="progressbar-increment7 progressbar">
        {arrIncrement7.map((a) => (
          <li class={`${rows >= 12 && "active"} verticalGap`}></li>
        ))}
        {rows === 12 &&
          restPeopleForIncrement.map((a) => (
            <li class={`${rows >= 13 && "active"} verticalGap`}></li>
          ))}
      </ul>

      {/* <li class="tooltip-container">
          <span class="tooltip">
            <img
              src={require("./assets/a.png")}
              style={{ width: "100px", height: "50px" }}
            />
          </span>
        </li> */}
    </div>
  );
}

export default App;
