import React, { useState } from "react";
import Content from "./Content";
import { useEffect } from "react";

function Front() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setjs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    setSrcDoc(`
      <html>
       <head>
        <title>Hi</title>
        <style>
        ::-webkit-scrollbar {
          width: 7px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #888;
        }
        
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      
      
        ${css}</style>
       </head>
       <body>${html}</body>
       <script>${js}</script>
      </html>
    `);
  }, [html, css, js]);
  return (
      <div className="toobasic front">
        <div className="allcode">
          <Content
            valueChange={setHtml}
            theme={"monokai"}
            mode={"html"}
            placeholder={"HTML code here..."}
          />
          <Content
            valueChange={setCss}
            theme={"merbivore"}
            mode={"css"}
            placeholder={"CSS code here..."}
          />
          <Content
            valueChange={setjs}
            theme={"monokai"}
            mode={"javascript"}
            placeholder={"Javascript code here..."}
          />
        </div>
        <div>
          <div className="run">      
            <strong>  OUTPUT</strong>
          </div>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            className="iframe"
          ></iframe>
        </div>
      </div>
  );
}

export default Front;
