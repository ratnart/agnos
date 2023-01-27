import { useContext } from "react";
import FormContext from "../../context/FormContext";

const Button = (props) => {
  const formCtx = useContext(FormContext);

  const onClickHandler = () => {
    if (props.topic === "abs") formCtx.updateStomach(props.name);
    else formCtx.updateHand(props.name);
    console.log(props.name);
  };

  const isHighlightStomach =
    props.topic === "abs" &&
    formCtx.selectedStomach &&
    (props.name === formCtx.selectedStomach ||
      formCtx.selectedStomach === "allOver");

  const isHighlightHand =
    props.topic === "finger" &&
    formCtx.selectedHand &&
    props.name === formCtx.selectedHand;

  const isActiveStomach =
    props.active &&
    formCtx.selectedStomach &&
    props.name === formCtx.selectedStomach;

  const isActiveHand =
    props.active && formCtx.selectedHand && props.name === formCtx.selectedHand;

  return (
    <>
      {props.style &&
        props.style.map((style) => (
          <button
            onClick={onClickHandler}
            className={`absolute translate-x-center translate-y-center top-1/2 left-1/2 z-50 bg-transparent ${style}`}
          ></button>
        ))}

      {(isHighlightStomach || isHighlightHand) && (
        <img
          src={props.highlight}
          className="w-[280px] 400:w-[400px] 500:w-[500px]   object-cover absolute translate-x-center translate-y-center z-20 top-1/2 left-1/2 "
          alt={`highlight ${props.name}`}
        />
      )}
      {(isActiveStomach || isActiveHand) && (
        <img
          src={props.active}
          className="w-[280px] 400:w-[400px] 500:w-[500px]  object-cover absolute translate-x-center translate-y-center z-20 top-1/2 left-1/2 "
          alt={`active ${props.name}`}
        />
      )}
    </>
  );
};

export default Button;
