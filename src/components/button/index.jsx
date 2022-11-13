import style from "./button.module.scss";

const Button = ({ className, title, icon }) => {
  return (
    <>
      <button className={`${style.btn} ${className}`}>
        {icon && <img src={icon} alt={"button icon"} />}
        {title}
      </button>
    </>
  );
};

export default Button;
