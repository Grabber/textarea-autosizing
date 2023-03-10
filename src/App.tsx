import { useRef, useState } from "react";

import useTextAreaAutoSize from "./useTextAreaAutoSize";

import "./index.css";

export default function App() {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useTextAreaAutoSize(textAreaRef.current, value);

  const handleOnChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setValue(val);
  };

  return (
    <>

    <div className="app">
      <div className="container">
        <textarea id="textarea-autosize"
                        onChange={handleOnChange}
                        placeholder="Type a message"
                        ref={textAreaRef}
                        rows={1}
                        value={value}
                        autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck="false"/>
      </div>
    </div>
    </>
  );
}