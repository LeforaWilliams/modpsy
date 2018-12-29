import { RichUtils } from "draft-js";

// function to highlight text
export default () => {
  return {
    // Colour the Highlight will have
    customStyleMap: {
      HIGHLIGHT: {
        background: "#f60037"
      }
    },

    //function to highlight with keyboard shortcut ctrl + h
    //keyBindingFn is a Draft.js callback
    // here 'highlight' can be replaced with any other string
    keyBindingFn: e => {
      if (e.metaKey && e.key === "h") {
        return "highlight";
      }
    },

    //takes care of the highlighing if the keyBindingFn returns 'highlight'
    // setting the editorState with the toggleInlineStyle
    handleKeyCommand: (command, editorState, { setEditorState }) => {
      if (command === "highlight") {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
        return true;
      }
    }
  };
};
