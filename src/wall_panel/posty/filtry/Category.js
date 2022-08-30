import React from "react";

class KategoriaComponent extends React.Component {
    state = {
        id: "",
        nazwa: ""
    }

    componentDidMount() {
        this.setState(this.props.data);
    }

    render() {
        return(
        <option value={this.state.id}>{this.state.nazwa}</option>
        )
    }
}

export default KategoriaComponent;