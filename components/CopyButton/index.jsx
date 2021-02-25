import { AiOutlineCopy } from "react-icons/ai";
import { toast } from "react-toastify";

import style from "./CopyButton.module.css";

function copyButton({ containerRef }) {
  function copyClipBoard() {
    const range = document.createRange();
    range.selectNode(containerRef.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand("copy");
    toast("Code copied to clipboard!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "success",
    });
  }

  return (
    <button
      className={style.copy_button}
      data-tip="Copy to clipboard"
      onClick={copyClipBoard}
    >
      <AiOutlineCopy />
    </button>
  );
}

export default copyButton;
