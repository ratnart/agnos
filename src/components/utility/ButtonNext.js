import React,{ useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "../../context/FormContext";

const ButtonNext = (props) => {
  const navigate = useNavigate();

  const formCtx = useContext(FormContext);

  const onClickHandler = () => {
    navigate(props.to);
  };

  let disabled = false;

  let style =
    "w-64 h-10 translate-x-[-3%] enabled:border-cyan-500 enabled:border-2 enabled:bg-gradient-to-r from-cyan-500 to-blue-500 text-cyan-50 rounded-md text-lg  font-header font-medium sm:text-xl enabled:hover:border-gray-400 disabled:bg-gray-100 disabled:text-gray-300";

  if (props.name === "stomach") if (!formCtx.selectedStomach) disabled = true;

  if (props.name === "hand") {
    style += " 500:h-8";
    if (!formCtx.selectedHand) disabled = true;
  }
  return (
    <button onClick={onClickHandler} className={style} disabled={disabled}>
      ต่อไป
    </button>
  );
};

export default React.memo( ButtonNext);
