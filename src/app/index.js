import { Fragment, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/header/index";
import Sticky from "react-stickynode";
const App = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <Fragment>
      <Router>
        <Sticky innerZ={1000} top={0} onStateChange={handleStateChange}>
          <Header headerClass={isSticky ? "sticky" : "unsticky"} />
        </Sticky>
      </Router>
    </Fragment>
  );
};

export default App;
