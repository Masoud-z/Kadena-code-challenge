import DarkModeSwitch from "./DarkModeSwitch";

const Navbar = () => {
  return (
    <div className="w-[100%] h-[50px] dark:bg-primary dark:text-white flex justify-end items-center bg-primary50 text-primary px-xs">
      <DarkModeSwitch />
    </div>
  );
};

export default Navbar;
