import Image from "next/image";
import style from "./HowToUseContainer.module.css";

function HowToUseContainer() {
  return (
    <div className={style.container}>
      <h1 id="how-to-use-it">How to use it</h1>

      <Image
        src="/images/how-to.gif"
        layout="responsive"
        width={300}
        height={150}
      />

      <ul>
        <li>
          You need to use{" "}
          <a href="https://dev.to/p/editor_guide#markdown-links">
            Anchored links on your topic titles.
          </a>
        </li>

        <li>Copy draf or post url and past here on the url field.</li>

        <li>Press "Generate" button.</li>

        <li>Copy the code on paste it on your post.</li>
      </ul>
    </div>
  );
}

export default HowToUseContainer;
