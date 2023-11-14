import { HiArrowRight, HiOutlineMenuAlt3 } from 'react-icons/hi';
import LogoDesktop from '../assets/icons/Logo Desktop.png';
const Navbar = () => {
  return (
    <nav className="pt-[40px] px-[16px]">
      <div className="bg-orange_50 px-[16px] py-[10px] flex justify-center items-center w-full rounded-[6px] gap-x-[12px] laptop:py-[14px] laptop:gap-x-[23px]">
        <p className="font-bevietnam text-[14px] leading-[21px] text-white desktop:text-[18px] desktop:">
          Free Courses 🌟 Sale Ends Soon, Get It Now
        </p>
        <HiArrowRight
          size={20}
          className="text-white w-[20px] h-[20px] desktop:w-[24px] desktop:h-[24px]"
        />
      </div>
      <div className="py-[14px] flex justify-between items-center border-b border-b-white_95 laptop:px-[60px] desktop:px-[132px] desktop:pt-[20px] desktop:pb-[24px]">
        <div className="laptop:flex laptop:items-center">
          <img
            src={LogoDesktop}
            alt="Logo Mobile"
            className="w-[40px] h-[40px] laptop:w-[44px] laptop:h-[44px] laptop:mr-[50px] desktop:w-[54px] desktop:h-[54px]"
          />
          <ul className="laptop:flex gap-x-[26px] text-[14px] leading-[21px] items-center hidden desktop:text-[18px]">
            <li>
              <a
                className="py-[12px] px-[20px] bg-white_95 rounded-[6px] desktop:py-[14px] desktop:px-[24px]"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-[20px] text-[14px] desktop:text-[18px] desktop:gap-x-[30px] desktop:leading-[27px] leading-[21px]">
          <a href="#signup" className=" text-grey_15 ">
            Sign Up
          </a>
          <a
            href="#login"
            className="py-[12px] px-[20px] rounded-[6px] text-white bg-orange_50 desktop:py-[14px] desktop:px-[34px]"
          >
            Login
          </a>
          <HiOutlineMenuAlt3 size={34} className="laptop:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
