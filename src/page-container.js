import React from "react";
//importing the
import { Editor, EditorState, RichUtils } from "draft-js";
//RichUtlis --> contains functions for inline and black style options.
class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //after setting the EditorState empty you have to pass the state as a prop to the Editor Component
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onBoldClick = this.onBoldClick.bind(this);
    this.onItalicClick = this.onItalicClick.bind(this);
    this.onUnderlineClick = this.onUnderlineClick.bind(this);
  }

  //need to create this onChange function and pass it to the Editor as a props, this function handles the state when
  onChange(editorState) {
    this.setState({
      editorState
    });
  }

  //Rich Utils contains info for keybord shortcuts/cominations for bold and italics..., this function will handle these key commands
  handleKeyCommand(command) {
    //passinf the command(underline or...) to RichUtils with the current editor state. If the Editorstate is returned updated --> pass to onChange to update the state.
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );

    if (newState) {
      this.onChange(newState);
      return "handled";
    }

    return "not-handled";
  }

  //using RichUtils inline styles to add buttons for inline styling
  //toggleInlineStyle takes 2 args: editorState, and style (string)
  onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }

  onItalicClick() {
    this.onChnage(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  }

  onUnderlineClick() {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  }

  render() {
    return (
      <div className="editorContainer">
        <button className="bold" onClick={this.onBoldClick}>
          Bold
        </button>
        <button className="italic" onClick={this.onItalicClick}>
          Italic
        </button>
        <button onClick={this.onUnderlineClick}>Underline</button>
        <div className="editors">
          {/*Editor Component that was imported from draft.js*/}
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
          />
        </div>
      </div>
    );
  }
}

export default PageContainer;
