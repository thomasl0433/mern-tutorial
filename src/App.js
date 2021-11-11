import React from "react";
import { Route } from 'react-router-dom';

import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Route exact path="/">
                    <RecordList />
                </Route>
                <Route path="/edit/:id" component={Edit} />
                <Route path="/create">
                    <Create />
                </Route>
            </div>
        );
    }
}