import { useEffect } from "react";

const useTextAreaAutoSize = (
  textAreaRef: HTMLTextAreaElement | null,
  valueStr: string
) => {
  useEffect(() => {
    if (textAreaRef) {
      var s = 0;

      if (textAreaRef.innerHTML.length == 0)
        s = -1;

      if (textAreaRef.innerHTML.length > 1)
        s = +1;

      textAreaRef.style.height = "0px";
      textAreaRef.style.height = s + textAreaRef.scrollHeight + "px";
    }
  }, [textAreaRef, valueStr]);
};

export default useTextAreaAutoSize;