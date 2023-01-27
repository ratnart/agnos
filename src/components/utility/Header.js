const Header = (props) => {
  return (
    <div className="text-lg sm:text-xl md:text-2xl font-header font-medium mt-[1px]">
      {props.name}
    </div>
  );
};

export default Header;
