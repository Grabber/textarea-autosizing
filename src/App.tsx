import { useRef, useState } from "react";

import useTextAreaAutoSizing from "./useTextAreaAutoSizing";

import "./index.css";

export default function App() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useTextAreaAutoSizing(textAreaRef.current, textAreaValue);

  const handleTextAreaOnChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(evt.target?.value);
  };

  return (
    <>
    <div className="app">
      <div className="textarea-autosize-container">
        <textarea id="textarea-autosize"
                  onChange={handleTextAreaOnChange}
                  placeholder="Type a message"
                  ref={textAreaRef}
                  rows={1}
                  value={textAreaValue}
                  autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck="false"/>
      </div>
    </div>
    </>
  );
}