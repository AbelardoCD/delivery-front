import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import RoutesDashboard from "./routes/RotesDashboard";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/reduxStore";
function App() {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Switch>
          <Route component={() => <RoutesDashboard />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
