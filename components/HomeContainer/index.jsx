import Image from "next/image";
import style from "./HomeContainer.module.css";
import Logo from "../Logo";

function HomeContainer() {
  return (
    <div className={style.container}>
      <div className={style.container__primary}>
        <Logo />
      </div>

      <div className={style.container__secondary}>
        <Image src="/images/vector.svg" width={400} height={300} />
      </div>
    </div>
  );
}

export default HomeContainer;
