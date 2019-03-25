import React from "react";

export default class RecentBlogPosts extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        //fetch from redux store after setup
    }
    render() {
        return (
            <div className="recent-blog-container">
                <h2> Most Recent </h2>
                <div className="recent-post">
                    <img src="" />
                    <h3>Headling</h3>
                </div>
            </div>
        );
    }
}
