import { useEffect } from "react";
import ReactSplitViews from "./lib/ReactSplitViews";

export default function App () {

  const inCode= `$ npm install react-split-views
// or via yarn: 
$ yarn add react-split-views`

  const jsxCode = `import ReactSplitViews from 'react-react-split-views';

// required this css line because SplitViews is flexbox based
// .react-split-views { display: flex; }

<ReactSplitViews sizes={[25, 50, 25]}>
  <div>1</div>
  <div>2</div>
  <ReactSplitViews className="split-views-2" direction="vertical" sizes={[25, 50, 25]}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </ReactSplitViews>
</ReactSplitViews>`;

  useEffect(() => {

    window.hljs.highlightAll();
  }, []);

  return (
    <div className="container">

      <h1>ReactSplitViews</h1>

      <h3 className="txt-center mb-0">UTILITY FOR RESIZABLE SPLIT VIEWS FAST,</h3>
      <h3 className="txt-center mt-0 mb-2"> SIMPLE AND LIGHTWEIGHT WITH 0 DEPENDENCIES</h3>

      <div className="w-100 txt-center">
        <img src="//badgen.net/bundlephobia/minzip/react-split-views" alt="split views" />
        <img src="//badgen.net/bundlephobia/dependency-count/react-split-views" alt="split views" />
        <img src="//badgen.net/npm/v/react-split-views" alt="split views" />
        <img src="//badgen.net/npm/dt/react-split-views" alt="split views" />
        <img src="//data.jsdelivr.com/v1/package/npm/react-split-views/badge" alt="split views" />
      </div>

      <pre className="w-50 language-javascript txt-center mb-2"><code>{inCode}</code></pre>

      <ReactSplitViews sizes={[25, 50, 25]}>
        <div>1</div>
        <div>2</div>
        <ReactSplitViews className="split-views-2" direction="vertical" sizes={[25, 50, 25]}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </ReactSplitViews>
      </ReactSplitViews>

      <pre className="language-jsx mt-2"><code>{jsxCode}</code></pre>

      <footer className="txt-center mt-2">
        <h4>© 2021. MIT license. <a href="//github.com/haikelfazzani">Haikel Fazzani</a></h4>
      </footer>
    </div>
  );
}
