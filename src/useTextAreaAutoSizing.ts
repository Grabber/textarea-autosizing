import { useEffect } from "react";

const useTextAreaAutoSizing = (
  textAreaRef: HTMLTextAreaElement | null,
  textAreaValue: string
) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "0px";
      textAreaRef.style.height = textAreaRef.scrollHeight + "px";
    }
  }, [textAreaRef, textAreaValue]);
};

export default useTextAreaAutoSizing;