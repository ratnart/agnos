import Button from "./Button";
import ButtonNext from "./ButtonNext";
import Header from "./Header";

const PageLayout = (props) => {
  return (
    <>
      <Header name={props.header} />
      {props.parts.map((part) => (
        <Button
          key={part.name}
          highlight={part.highlight}
          active={part.active}
          name={part.name}
          topic={props.topic}
          style={part.style}
        />
      ))}
      <img
        src={props.mainPic}
        className={
          "w-[280px] 400:w-[400px] 500:w-[500px]  absolute translate-x-center translate-y-center top-1/2 left-1/2 z-10"
        }
        alt={`${props.name}`}
      />
      <ButtonNext to={props.to} name={props.name} />
    </>
  );
};

export default PageLayout;
