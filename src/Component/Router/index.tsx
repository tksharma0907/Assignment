import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardUI from "../Card";
import Detail from "../Detail";

const PageRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CardUI} />
        <Route exact path="/Detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
};
export default PageRouter;
