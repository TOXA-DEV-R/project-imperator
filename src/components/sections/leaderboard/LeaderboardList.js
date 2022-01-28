import { Link } from "react-router-dom";
import {
  LeaderboardsAvatar,
  LeaderboardsList,
  LeaderboardsProgresses,
  LeaderboardsProgress,
} from "./LeaderboardStyle";

const LeaderboardList = ({
  name,
  numberOne,
  numberTwo,
  numberFirstWidth,
  numberSecondWidth,
  avatarColor,
  path,
}) => {
  return (
    <LeaderboardsList className="leaderboards__list">
      <LeaderboardsAvatar>
        <Link to={path}>
          <span style={{ backgroundColor: avatarColor }}>s</span>
        </Link>
      </LeaderboardsAvatar>
      <LeaderboardsProgresses className="leaderboards__progresses">
        <h3 className="leaderboards__name">{name}</h3>
        <LeaderboardsProgress className="leaderboards__progress">
          <span style={{ width: numberFirstWidth }}></span>
          {numberOne}
        </LeaderboardsProgress>
        <LeaderboardsProgress className="leaderboards__progress two">
          <span style={{ width: numberSecondWidth }}></span>
          {numberTwo}
        </LeaderboardsProgress>
      </LeaderboardsProgresses>
    </LeaderboardsList>
  );
};

export default LeaderboardList;
