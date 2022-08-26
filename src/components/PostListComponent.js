import React from "react";
import PostComponent from "./PostComponent";
import getApiUrl from "../api/ApiUrl";

class PostListComponent extends React.Component{
    state = {
        data : [],
        posty: []
    }

    componentDidMount() {
        fetch(getApiUrl() + "api/posty/")
            .then(response => response.json())
            .then(data => {
                this.setState({data});
            });

    }

    render() {
        return(
            <div>
                {this.state.data.map(post => <PostComponent key = {post.id} data = {post}/>)}
            </div>
        );
    }


}

export default PostListComponent;