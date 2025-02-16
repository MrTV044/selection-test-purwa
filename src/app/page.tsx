"use client";

import React, { useState } from "react";
import "./globals.css";

export default function Home() {
  const [double, setDouble] = useState(Number);
  const [remove, setRemove] = useState("");
  const [dominoes, setDominoes] = useState<number[][]>([
    [6, 1],
    [4, 3],
    [1, 5],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
    [2, 2],
  ]);

  // 2. show double numbers
  function doubleDominoes() {
    let current = [...dominoes];
    let count = 0;
    for (let i = 0; i < current.length; i++) {
      if (current[i][0] === current[i][1]) {
        count++;
      }
    }
    setDouble(count);
    return;
  }

  // 3. sort the dominoes asc/desc order
  function descending() {
    setDominoes(
      [...dominoes].sort(function (a, b) {
        return b[0] + b[1] - (a[0] + a[1]) || b[0] - a[0];
      })
    );
    console.log(setDominoes);
  }

  function ascending() {
    setDominoes(
      [...dominoes].sort(function (a, b) {
        return a[0] + a[1] - (b[0] + b[1]) || a[0] - b[0];
      })
    );
    console.log(setDominoes);
  }

  // 4. remove duplicate

  // let arrayTotal: number[] = [];
  // console.log(arrayTotal);

  // for (let i = 0; i < dominoes.length; i++) {
  //   let a = dominoes[i][0] + dominoes[i][1];
  //   console.log(a);

  //   arrayTotal.push(a);
  //   console.log(arrayTotal);

  //   function findDuplicates(array: any[]) {
  //     return array.filter(
  //       (item: any, index: any) => array.indexOf(item) !== index
  //     );
  //   }
  //   let testing = findDuplicates(arrayTotal);

  //   if (testing.length !== arrayTotal.length - testing.length) {
  //     console.log(dominoes[i]);
  //   } else console.log(dominoes[i]);
  // }

  function removeDuplicate(dominoes: number[][]) {
    let arrayTotal: number[] = [];
    console.log(arrayTotal);

    function findDuplicates(array: any[]) {
      return array.filter(
        (item: any, index: any) => array.indexOf(item) !== index
      );
    }

    for (let i = 0; i < dominoes.length; i++) {
      let a = dominoes[i][0] + dominoes[i][1];
      console.log(a);

      arrayTotal.push(a);
      console.log(arrayTotal);

      let testing = findDuplicates(arrayTotal);

      if (testing.length !== arrayTotal.length - testing.length) {
        console.log(dominoes[i]);
      } else {
        console.log(dominoes[i]);
        setDominoes(dominoes[i]);
      }
    }
  }

  // 5. flip the numbers
  function flipDominoes() {
    let flipped = [...dominoes];
    for (let i = 0; i < flipped.length; i++) {
      const a = flipped[i][0];
      const b = flipped[i][1];
      flipped[i] = [b, a];
    }
    setDominoes(flipped);
  }
  console.log(flipDominoes);

  // 6. remove certain sum

  function removeSum() {
    setDominoes((prevDominoes) =>
      prevDominoes.filter(([a, b]) => a + b !== Number(remove))
    );
  }

  // 7. reset dominoes
  function resetDominoes() {
    setDominoes([
      [6, 1],
      [4, 3],
      [1, 5],
      [5, 1],
      [3, 4],
      [1, 1],
      [3, 4],
      [1, 2],
      [2, 2],
    ]);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container">
        <h1 className="title">Dominoes</h1>
        <div className="flex gap-2 bg-gray-100 p-2 rounded-md shadow text-center">
          {dominoes.map((array, index) => (
            <div key={index}>
              [{array[0]},{array[1]}]
            </div>
          ))}
        </div>

        <div className="section">
          <label className="label">Double Numbers</label>
          <p>{double}</p>
        </div>

        <div className="domino-container">
          {dominoes.map((array, index) => (
            <div key={index} className="domino-tile">
              {array[0]} <br />-<br /> {array[1]}
            </div>
          ))}
        </div>

        <div className="button-container">
          <button className="btn" onClick={ascending}>
            Ascending
          </button>
          <button className="btn" onClick={descending}>
            Descending
          </button>
          <button className="btn" onClick={doubleDominoes}>
            Doubles
          </button>
          <button className="btn" onClick={flipDominoes}>
            Flip
          </button>
          <button className="btn" onClick={() => removeDuplicate(dominoes)}>
            Remove Duplicate
          </button>
          <button className="btn" onClick={resetDominoes}>
            Reset
          </button>
        </div>

        <div className="section">
          <label className="label mr-2">Input Number</label>
          <input
            type="number"
            className="input-box"
            placeholder="input number to remove"
            value={remove}
            onChange={(e) => setRemove(e.target.value)}
          />
        </div>

        {/* Remove Button */}
        <button className="btn w-full mt-2" onClick={removeSum}>
          Remove
        </button>
      </div>
    </div>
  );
}
