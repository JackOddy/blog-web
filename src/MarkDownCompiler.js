import React, {createElement} from 'react';
import marksy from 'marksy'
import 'highlight.js/styles/monokai-sublime.css';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import ruby from 'highlight.js/lib/languages/ruby';
import go from 'highlight.js/lib/languages/go';
import elm from 'highlight.js/lib/languages/elm';
import * as MD from './components/common/MarkDown';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('go', go);
hljs.registerLanguage('elm', elm);

export const compile = marksy({
  createElement,
  highlight: (language, code) => hljs.highlight(language, code).value,
  elements: {
    h1: props => <MD.h1 {...props} />,
    h2: props => <MD.h2 {...props} />,
    h3: props => <MD.h3 {...props} />,
    h4: props => <MD.h4 {...props} />,
    h5: props => <MD.h5 {...props} />,
    h6: props => <MD.h6 {...props} />,
    hr: props => <MD.hr {...props} />,
    p: props => <MD.p {...props} />,
    // ol: props => <MD.ol {...props} />,
    // ul: props => <MD.ul {...props} />,
    li: props => <MD.li {...props} />,
    code: props => <MD.code {...props} />,
    codespan: props => <MD.codespan {...props} />,
    a: props => <MD.a {...props} />
  }
})
