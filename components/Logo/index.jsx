import style from "./Logo.module.css";

function Logo({ nav }) {
  return (
    <h1 className={`${style.title} ${nav && style.nav}`}>
      <b>Summaryze</b> Forem 🌱
    </h1>
  );
}

export default Logo;
