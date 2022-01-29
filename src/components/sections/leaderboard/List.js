import { Link } from "react-router-dom";
import {
  LeaderboardsAvatar,
  LeaderboardsList,
  LeaderboardsProgresses,
  LeaderboardsProgress,
} from "./styles";

const List = ({
  name,
  numberOne,
  numberTwo,
  numberFirstWidth,
  numberSecondWidth,
  avatarColor,
  path,
}) => {
  return (
    <LeaderboardsList
      className="leaderboards__list"
      style={{ marginRight: "25px" }}
    >
      <LeaderboardsAvatar>
        <Link to={path}>
          <span
            style={{
              backgroundColor: avatarColor,
              width: "56px",
              height: "56px",
            }}
          >
            {name.slice(0, 1)}
          </span>
        </Link>
      </LeaderboardsAvatar>
      <LeaderboardsProgresses className="leaderboards__progresses">
        <h3 className="leaderboards__name">
          <Link to={name}>{name}</Link>
        </h3>
        <LeaderboardsProgress className="leaderboards__progress">
          <span style={{ width: numberFirstWidth, height: "8px" }}></span>
          <p>{numberOne}</p>
        </LeaderboardsProgress>
        <LeaderboardsProgress className="leaderboards__progress two">
          <span style={{ width: numberSecondWidth, height: "8px" }}></span>
          <p>{numberTwo}</p>
        </LeaderboardsProgress>
      </LeaderboardsProgresses>
    </LeaderboardsList>
  );
};

export default List;
