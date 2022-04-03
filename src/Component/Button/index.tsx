import "./style.css";

type buttonProps = {
    label: any;
    onClick: any;
};


const Button = ({ onClick, label }:buttonProps) => {
  return (
    <>
      <button className="btn" onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
