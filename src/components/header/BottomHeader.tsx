import { LuMenu } from "react-icons/lu";
import { IStateProps } from "../../../type";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "@/store/nextSlice";
import { signOut } from "next-auth/react";

const BottomHeader = () => {
  const { userInfo } = useSelector((state: IStateProps) => state.next);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    const confirm = window.confirm("Are you sure you want to sigh out?");

    if (confirm) {
      signOut();
      dispatch(removeUser());
    }
  };
  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
      <p className="flex items-center gap-1 h-8  px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        <LuMenu className="text-xl" /> All
      </p>
      <p className="hidden md:inline-flex items-center h-8  px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Today's Deals
      </p>
      <p className="hidden md:inline-flex items-center h-8  px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Customer Service
      </p>
      <p className="hidden md:inline-flex items-center h-8  px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Registry
      </p>
      <p className="hidden md:inline-flex items-center h-8  px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Gift Cards
      </p>
      <p className="hidden md:inline-flex items-center h-8  px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Sell
      </p>
      {userInfo && (
        <button
          onClick={handleSignOut}
          className="hidden md:inline-flex items-center h-8  px-2 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default BottomHeader;
