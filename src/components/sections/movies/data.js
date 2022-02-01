/** @format */

import { FaList } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const data = [
  {
    title: "Add to list",
    icon: <FaList size={13} color="black" />,
    path: "/",
  },
  {
    title: "Favorite",
    icon: <MdFavorite size={13} color="black" />,
    path: "/",
  },
  {
    title: "Watchlist",
    icon: <BsFillBookmarkFill size={13} color="black" />,
    path: "/",
  },
  {
    title: "Your rating",
    icon: <AiFillStar size={13} color="black" />,
    path: "/",
  },
];
export default data;
