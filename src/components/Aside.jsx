import "../index.css";
import Home from "../icons/Home.js";
import Search from "../icons/Search.js";
import Explore from "../icons/Explore.js";
import Reels from "../icons/Reels.js";
import Messenger from "../icons/Messenger.js";
import Notifications from "../icons/Notifications.js";
import Create from "../icons/Create.js";


function Aside() {
  const className =
    "py-4 px-2 flex gap-4 font-extrabold hover:bg-[#c4c4c434] rounded-lg max-[1000px]:py-4";
  return (
    <>
      <div className="flex flex-col gap-2 dark:text-white cursor-pointer max-[639px]:hidden">
        <span className={className}>
          <Home />
          <p className="side-icons">Home</p>
        </span>
        <span className={className}>
          <Search />
          <p className="side-icons">Search</p>
        </span>
        <span className={className}>
          <Explore />
          <p className="side-icons">Explore</p>
        </span>
        <span className={className}>
          <Reels />
          <p className="side-icons">Reels</p>
        </span>
        <span className={className}>
          <Messenger />
          <p className="side-icons">Messenger</p>
        </span>
        <span className={className}>
          <Notifications />
          <p className="side-icons">Notifications</p>
        </span>
        <span className={className}>
          <Create />
          <p className="side-icons">Create</p>
        </span>
        <span className="py-4 px-2 flex gap-4 font-base hover:bg-[#c4c4c434] rounded-lg max-h-[1165px]:hidden">
          <img src='' className="h-6 rounded-full" alt="logo" />
          <p className="side-icons">Profile</p>
        </span>
      </div>
    </>
  );
}

export default Aside;
