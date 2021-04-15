import { useState, useEffect } from "react";

export default function AppBar() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop >= 80);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div
      className="grid grid-cols-2 p-5 fixed w-full bg-black-transparent duration-700 z-50"
      style={{ backgroundColor: scrolling && "#202020" }}
    >
      <div className="flex items-center">
        <img
          src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5ee1607c3e19907b81f310cb_getcraft-logo.svg"
          alt="getcraft"
        />
        <p className="pl-5 cursor-pointer text-white font-epilogue">Directory</p>
        <p className="pl-5 cursor-pointer text-white font-epilogue">Jobs</p>
        <p className="pl-5 flex items-center cursor-pointer text-white font-epilogue">
          Community
          <img
            src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5f16a8934334a73654a8563e_arrow%20down%20icon.png"
            className="h-3 w-3 ml-2"
            alt="chevron-bottom"
          />
        </p>
      </div>
      <div className="flex items-center justify-end text-white">
        <p className="pl-5 cursor-pointer text-white font-epilogue">Apply as creator</p>
        <p className="pl-5 cursor-pointer flex items-center text-white font-epilogue">
          Login
          <img
            src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5ee1667cf62b2731856fc129_login.png"
            className="h-7 w-7 ml-1"
            alt="chevron-bottom"
          />
        </p>
        <button className="ml-5 bg-primary text-center p-2 text-white outline-none font-epilogue">
          Register
        </button>
        <button className="ml-5 p-2 text-white border-white border outline-none font-epilogue">
          Need Help?
        </button>
      </div>
    </div>
  );
}
