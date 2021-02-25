import Image from "next/image";
import style from './NoContent.module.css';

function NoContent() {
  return (
    <div className={style.container}>
      <Image src="/images/no-data.svg" width={300} height={150} />
      <p>Theres no data</p>
      <p>Put a url and generate!</p>
    </div>
  );
}

export default NoContent;
