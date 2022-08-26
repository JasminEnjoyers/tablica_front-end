import React from "react";

class PostComponent extends React.Component {
    state = {
        tytul: "",
        tekst: ""
    }

    constructor(props) {
        super();
        this.state.tytul = this.props;
        this.state.tekst = this.props;

    }


    render() {
        return (
            <div>
                <p>====================================</p>
                    {this.props.data.tytul}<br/>
                    {this.props.data.tekst}<br/>
            </div>
        );
    }
}

export default PostComponent;