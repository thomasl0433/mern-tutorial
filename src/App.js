import React from "react";
import Create from "./components/create";
import Edit from "./components/edit";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Create />
                <h1 className=" m-auto d-inline border border-primary">MALONE</h1>
            </div>
        );
    }
}