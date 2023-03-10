import { useEffect } from "react";

const useTextAreaAutoSize = (
  textAreaRef: HTMLTextAreaElement | null,
  valueStr: string
) => {
  useEffect(() => {

    if (textAreaRef) {
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, valueStr]);
};

export default useTextAreaAutoSize;