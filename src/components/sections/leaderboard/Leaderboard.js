import React from "react";
import {
  Leaderboards,
  LeaderboardsInfo,
  LeaderboardsInfoAll,
} from "./LeaderboardStyle";
import { Col, Container, Row } from "../../../app/Style";
import LeaderboardList from "./LeaderboardList";

const Leaderboard = () => {
  return (
    <Leaderboards className="leaderboards" style={{ marginTop: "30px" }}>
      <Container
        fluid={true}
        className="leaderboards__container padding-top-bootom"
      >
        <LeaderboardsInfo className="leaderboards__info">
          <h2>Leaderboard</h2>
          <LeaderboardsInfoAll className="leaderboards__info-all">
            <p>
              <span></span> All Time Edits
            </p>
            <p>
              <span></span> Edits This Week
            </p>
          </LeaderboardsInfoAll>
        </LeaderboardsInfo>
        <Row>
          <Col md="6">
            <LeaderboardList
              name="Samara"
              numberOne="2,429,654"
              numberTwo="12,415"
              numberFirstWidth="90%"
              numberSecondWidth="92%"
              avatarColor="black"
              path="/"
            />
          </Col>
          <Col md="6">dfgdf</Col>
        </Row>
      </Container>
    </Leaderboards>
  );
};

export default Leaderboard;
