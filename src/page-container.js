import React from "react";
//importing the
import { Editor, EditorState } from "draft-js";

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //after setting the EditorState empty you have to pass the state as a prop to the Editor Component
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
  }

  //need to create this onChange function and pass it to the Editor as a props, this function handles the state when
  onChange(editorState) {
    this.setState({
      editorState
    });
  }

  render() {
    return (
      <div>
        {/*Editor Component that was imported from draft.js*/}
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export default PageContainer;
