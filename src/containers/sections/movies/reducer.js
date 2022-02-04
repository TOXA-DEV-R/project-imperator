/** @format */

const tabsReducer = (listName) => {
  switch (listName) {
    case "streaming":
      return { ctrol: true, category: "popular" };
    case "for_rent":
      return { ctrol: true, category: "top_rated" };
    case "thisWeek":
      return { ctrol: true, category: "top_rated" };
    case "in_theatre" || "movies":
      return { ctrol: true, category: "upcoming" };
    case "recommendations" || "today":
      return { ctrol: true, category: "804435/recommendations" };
    case "now_playing":
      return { ctrol: true, category: "now_playing" };
    case "on_tv":
      return { ctrol: false };
    default:
      return listName;
  }
};

export default tabsReducer;
