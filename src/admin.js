import React from "react";
import ReactDOM from "react-dom";
import axios from "./axios.js";
import PageContainer from "./page-container.js";

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.saveDraft = this.saveDraft.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  saveDraft() {
    this.setState({ status: 1 });
    let { title, subTitle, contentText, status } = this.state;

    axios.post("/save-draft", {
      title,
      subTitle,
      contentText,
      status
    });
  }

  handleFormChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <PageContainer />
        <section className="fixed posts-overview">
          <h2>Posts</h2>
          <section className="post-details">
            <label className="admin-label">
              Title
              <textarea name="title" onChange={this.handleFormChange} />
            </label>

            <label className="admin-label">
              Subtitle
              <textarea name="subTitle" onChange={this.handleFormChange} />
            </label>

            <label className="admin-label">
              Text
              <textarea name="contentText" onChange={this.handleFormChange} />
            </label>
            {/*image upload for the images */}
            <button onClick={this.saveDraft} className="save-draft-btn">
              Save Draft
            </button>
          </section>
        </section>
      </div>
    );
  }
}
