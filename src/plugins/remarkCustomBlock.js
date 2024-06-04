import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

export default function remarkCustomBlock() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective') {
        const data = node.data || (node.data = {});
        const hast = h(node.name, { className: `prompt prompt-${node.name}` }, node.children);
        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    });
  };
}
