import React from "react";
import {
    Editor,
    EditorState,
    RichUtils,
    convertToRaw,
    convertFromRaw
} from "draft-js";
import axios from "./axios";
//RichUtlis --> contains functions for inline and block style options.
//import Editor from "draft-js-plugins-editor";
// import createHighlightPlugin from "./plugins/highlightPlugin.js";

//Generating Plugins
// const highlightPlugin = createHighlightPlugin();

class PageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        //################### Biding Functions#############################
        this.onChange = this.onChange.bind(this);
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.onBoldClick = this.onBoldClick.bind(this);
        this.onItalicClick = this.onItalicClick.bind(this);
        this.onUnderlineClick = this.onUnderlineClick.bind(this);
        this.saveContent = this.saveContent.bind(this);
        // this.plugins = [highlightPlugin];
    }

    componentDidMount() {
        axios
            .get("/save-draft")
            .then(dbContent => {
                if (dbContent.data) {
                    const rawText = JSON.parse(
                        JSON.parse(dbContent.data.rows[0].text).content
                    ).content;
                    this.setState({
                        editorState: EditorState.createWithContent(
                            convertFromRaw(rawText)
                        )
                    });
                } else {
                    this.setState({
                        editorState: EditorState.createEmpty()
                    });
                }
            })
            .catch(err =>
                console.log("ERR IN AXIOS GET REQ PAGE-CONTAINER.JS", err)
            );
    }

    //need to create this onChange function and pass it to the Editor as a props, this function handles the state when
    onChange(editorState) {
        const contentState = editorState.getCurrentContent();
        this.saveContent(contentState);
        this.setState({
            editorState
        });
    }

    //saving content
    saveContent(contentState) {
        // const contentState = editorState.getCurrentContent();
        // this.saveContent(contentState);
        // this.setState({
        //     editorState
        // });
        let content = JSON.stringify({ content: convertToRaw(contentState) });
        axios.post("/save-draft", { content });
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
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, "BOLD")
        );
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

    //!!!!!!!!FIX: Buttons only work when I highlight the text. Not when I click and then want to type!!!!!!!!!!!!!!!!!!!!

    render() {
        const { editorState } = this.state;
        if (!editorState) {
            return <h2> Loading...</h2>;
        }
        return (
            <div className="editor-container">
                <div className="editor-buttons">
                    <button className="bold" onClick={this.onBoldClick}>
                        Bold
                    </button>
                    <button className="italic" onClick={this.onItalicClick}>
                        Italic
                    </button>
                    <button onClick={this.onUnderlineClick}>Underline</button>
                </div>
                <div className="editor-textfield">
                    {/*Editor Component that was imported from draft.js*/}
                    <Editor
                        editorState={editorState}
                        onChange={this.onChange}
                        handleKeyCommand={this.handleKeyCommand}
                    />
                </div>
                <button onClick={this.saveContent}>Save Draft</button>
            </div>
        );
    }
}

export default PageContainer;
