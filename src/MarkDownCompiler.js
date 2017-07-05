import React, {createElement} from 'react';
import marksy from 'marksy'
import * as MD from './components/common/MarkDown';

export const compile = marksy({
  createElement,
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
    li: props => <MD.li {...props} />
    // a: props => <MD.a {...props} />,
    // img: props => <MD.img {...props} />
  }
})
