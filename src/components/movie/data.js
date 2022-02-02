/** @format */

import { FaListUl } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
import { CgSmartHomeHeat } from "react-icons/cg";

const data = {
  overView: [
    { path: "/", name: "Main", id: 0 },
    { path: "/", name: "Alternative Titles", id: 1 },
    { path: "/", name: "Cast & Crew", id: 2 },
    { path: "/", name: "Release Dates", id: 3 },
    { path: "/", name: "Translations", id: 4 },
    { path: "/", name: "Watch Now", id: 5 },
    { path: "/", name: "Changes", id: 5 },
  ],
  media: [
    { path: "/", name: "Backdrops", id: 0 },
    { path: "/", name: "Logos", id: 1 },
    { path: "/", name: "Posters", id: 2 },
    { path: "/", name: "Videos", id: 3 },
  ],
  fandom: [
    { path: "/", name: "Disscussions", id: 0 },
    { path: "/", name: "Reviews", id: 1 },
  ],
  share: [
    { path: "/", name: "Share Link", id: 0 },
    { path: "/", name: "Facebook", id: 1 },
    { path: "/", name: "Tweet", id: 2 },
  ],
  infosAction: [
    { progressbar: true, id: 1 },
    { icon: <FaListUl color="white" size={16} />, info: "Add to list", id: 2 },
    {
      icon: <MdFavorite color="white" size={16} />,
      info: "Mark as favorite",
      id: 3,
    },
    {
      icon: <BsFillBookmarkFill color="white" size={16} />,
      info: "Add to your watchlist",
      id: 4,
    },
    { icon: <AiFillStar color="white" size={16} />, info: "Rate It!", id: 5 },
  ],
  additonalInfos: [
    { icon: <AiFillFacebook color="black" size={27} />, id: 1 },
    { icon: <FaTwitter color="black" size={27} />, id: 2 },
    { icon: <FaInstagram color="black" size={27} />, id: 3 },
    { icon: <FiPlay color="black" size={27} />, id: 4 },
    { icon: <CgSmartHomeHeat color="black" size={27} />, id: 5 },
  ],
};
export default data;
