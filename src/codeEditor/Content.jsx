import React from "react";
import ReactAce from "react-ace/lib/ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-merbivore";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/javascript";
function Content({ mode, placeholder, theme, valueChange, value }) {
  function onChange(hi) {
    valueChange(hi);
  }
  return (
    <div className="coder">
        <div className="header">
          <h4>{mode.toUpperCase()}</h4>
         
        </div>
        <ReactAce
          name={mode}
          value={value}
          className="reactace"
          // scrollMargin={true}
          onChange={onChange}
          wrapEnabled={true}
          placeholder={placeholder}
          mode={mode}
          theme={'monokai'}
          fontSize={14}
          showGutter={true}
          showPrintMargin={true}
          setOptions={{
            useWorker: false,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </div>
  );
}
export default Content;