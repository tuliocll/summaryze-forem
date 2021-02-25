import style from "./FooterCotnainer.module.css";

function FooterContainer() {
  return (
    <footer className={style.container}>
      Summaryze DEV - {new Date().getFullYear()}
    </footer>
  );
}

export default FooterContainer;
