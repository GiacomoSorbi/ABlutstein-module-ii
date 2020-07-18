import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Painting from "./pages/Painting";
import ThingsTodo from "./pages/ThingsToDo";
import BookSearch from "./pages/BookSearch";
import CharacterPage from "./pages/CharacterPage";

//Switch renders the first child <Route> or <Redirect> that matches the location
//Route render some UI when its path matches the current URL
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/painting" exact>
        <Painting />
      </Route>

      <Route path="/book" exact>
        <BookSearch />
      </Route>

      <Route path="/things-to-do" exact component={ThingsTodo} />
      <Route path="/characters" component={CharacterPage} />
      <Route
        path="*"
        render={() => (
          <img
            alt="404"
            src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
          />
        )}
      />
    </Switch>
  );
}

export default App;
