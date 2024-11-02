"use client";

import ReactMarkdown from "react-markdown";

const Markdown = ({ data }) => {
  return (
    <ReactMarkdown className="text-sm leading-6 whitespace-pre-wrap text-neutral-600">
      {data?.description}
    </ReactMarkdown>
  );
};

export default Markdown;
