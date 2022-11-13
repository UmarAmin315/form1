import style from "./input.module.scss";

const Input = ({
  label,
  type,
  value,
  name,
  onChange,
  inputClass,
  placeholder,
  className,
}) => {
  return (
    <>
      <div className={`${style.inputContainer} ${className}`}>
        {label && <label>{label}</label>}
        <div style={{ position: "relative" }}>
          <input
            className={inputClass}
            type={type || "text"}
            placeholder={placeholder || ""}
            name={name || ""}
            onChange={onChange && onChange}
            value={value && value}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
