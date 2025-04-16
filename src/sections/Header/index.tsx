import NavigationMenu from "./components/NavigationMenu";

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#eef7f7] h-44 flex flex-col px-20">
        <div className="flex items-center justify-between">
          <div>
            <span>Norm Engineering</span>
          </div>
          <div>
            <div>Çankaya, ANKARA </div>
            <div>https://norm-engineering.com/</div>
            <div>+90 543 685 73 66</div>
          </div>
        </div>
        <div className="h-1 w-full bg-white"></div>
        <NavigationMenu />
      </div>
    </div>
  );
};

export default Header;
