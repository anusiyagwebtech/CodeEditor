import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import "../codeEditor/Content";
import Content from "../codeEditor/Content";
function Home() {
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
        
        /* Track */
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
    <div className="home">
      <div className="Input">
        <Tabs defaultActiveKey="second" justify fill>
          <Tab eventKey="first" title="HTML">
            <Content
              valueChange={setHtml}
              theme={"monokai"}
              mode={"html"}
              placeholder={"HTML code here..."}
            />
          </Tab>
          <Tab eventKey="second" title="CSS">
            <Content
              valueChange={setCss}
              theme={"merbivore"}
              mode={"css"}
              placeholder={"CSS code here..."}
            />
          </Tab>
          <Tab eventKey="third" title="JAVASCRIPT">
            <Content
              valueChange={setjs}
              theme={"monokai"}
              mode={"javascript"}
              placeholder={"Javascript code here..."}
            />
          </Tab>
        </Tabs>
      </div>
      <div className="OutputIframe">
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

export default Home;
