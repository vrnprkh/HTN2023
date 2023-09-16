

import React from "react";
import { Panel } from "react-resizable-panels";
import "./DocBlock.css";

const textArray = [
  "Lorem ipsum dolor sit amet. Qui voluptatibus aliquam non sint illum ut obcaecati mollitia sed harum quam. Non galisum voluptas est blanditiis minima sit dolore quasi vel assumenda nesciunt! Ut quod optio sit voluptatem dolores et dolorum rerum? Eum temporibus perspiciatis aut animi quam hic quam consequuntur eum velit vitae ea magni iusto rem culpa necessitatibus.",
  "Et repellat ipsa vel dicta neque rem officia rerum ad eligendi velit ut fugit corporis a odio pariatur. Ad natus totam 33 labore asperiores aut voluptatem corrupti ut explicabo facere. Aut obcaecati corrupti et nesciunt facere ab labore voluptatem in officia molestias.",
  "In assumenda magnam id neque omnis ad delectus atque sit eligendi internos eos eaque omnis. Sed obcaecati accusantium sit quos dolorem eum sint velit a dignissimos rerum et incidunt veritatis.",
];

const DocBlock: React.FC = () => {
  return (
    <Panel defaultSize={60} minSize={10} className="docBlock">
      {textArray.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </Panel>
  );
};

export default DocBlock;
