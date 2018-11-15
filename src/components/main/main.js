import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Series from "../../containers/series/series";
import SingleSeries from "../../containers/series/single-series";

const Main = props => (
    <Switch>
        <Route exact path={"/"} component={Series} />
        <Route exact path={"/series/:id"} component={SingleSeries} />
    </Switch>
);

export default Main;