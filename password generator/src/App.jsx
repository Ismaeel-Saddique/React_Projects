import { useState, useCallback, useEffect, useRef } from "react";
import './index.css'

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) str += "0123456789";
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^@_`{|}~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isNumber, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-100 max-w-md mx-auto shadow-md rounded-lg p-4 m-10 text-orange-500 bg-gray-700">
        <h1 className="text-3xl font-bold text-center text-orange-400 ">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden m-5 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full p-2"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          ></input>
          <button  onClick={copyPasswordToClipboard} className="outline-None bg-blue-700 px-4 py-2 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            ></input>
            <label>length :{length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            ></input>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="CharInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            ></input>
            <label htmlFor="CharInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
