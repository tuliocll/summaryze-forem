import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const codeBlock = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={dracula}
        showLineNumbers
        language={language}
        children={value}
      />
    );
  },
};
export default codeBlock;
