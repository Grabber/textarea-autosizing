import { useEffect } from "react";

const useTextAreaAutoSize = (
  textAreaRef: HTMLTextAreaElement | null,
  valueStr: string
) => {
  useEffect(() => {
    if (textAreaRef) {
      const s = textAreaRef.innerHTML.length == 0 ? -1 : 0;

      textAreaRef.style.height = "0px";
      textAreaRef.style.height = s + textAreaRef.scrollHeight + "px";
    }
  }, [textAreaRef, valueStr]);
};

export default useTextAreaAutoSize;