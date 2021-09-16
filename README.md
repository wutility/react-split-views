# ✂ React Split Views  
**Utility for resizable split views.**

- Fast And Simple to use.
- Lightweight.
- Zero dependencies.
- No events listeners are attached to Window.
- Compatible: Firefox - Chrome - Safari - Opera - Android - (FlexBox is not supported in IE).

<div align="center" style="width:100%; text-align:center;">
<img src="https://badgen.net/bundlephobia/minzip/react-split-views" alt="react-split-views" />
  <img src="https://badgen.net/bundlephobia/dependency-count/react-split-views" alt="react-split-views" />
  <img src="https://badgen.net/npm/v/react-split-views" alt="react-split-views" />
  <img src="https://badgen.net/npm/dt/react-split-views" alt="react-split-views" />
  <img src="https://data.jsdelivr.com/v1/package/npm/react-split-views/badge" alt="react-split-views"/>
</div>  

<hr />  

### [Demo](https://react-split-views.netlify.app/)

```js
$ npm i react-split-views
// or
$ yarn add react-split-views
```

## Usage
```js
import ReactSplitViews from 'react-split-views';
```

- **Import from CDN (UMD):**
```html
<script src="https://cdn.jsdelivr.net/npm/react-split-views/build/index.min.js"></script>
<!-- Or via unpkg -->
<script src="https://unpkg.com/react-split-views"></script>
<!-- Access via global object : window.ReactSplitViews -->
```            

## Methods & Examples

```jsx
import ReactSplitViews from 'react-split-views';

// required this css line because SplitViews is flexbox based
// .split-views { display: flex; }

<ReactSplitViews className="split-view" direction="horizontal" sizes={[25, 50, 25]}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</ReactSplitViews>
```

## Props

| Name         | Type                          | Default         | Description                                 |
| ------------ | ----------------------------- | ----------------| ------------------------------------------- |
| `className`  | `String`                      | `'split-view'`  | Class name of Parent element.               |
| `sizes`      | `Array<Number>`               | `[]`            | Initial sizes of each element in %.         |
| `minSize`    | `Number`                      | `0`             | Minimum size.                               |
| `gutterSize` | `Number`                      | `5`             | Gutter size (seperator).                    |
| `direction`  | `String`                      | `'horizontal'`  | Resize direction: horizontal or vertical.   |
| `onDragEnd`  | `Method`                      | `null`          | Callback with new sizes in %.               |

## Notes
- Tested on Chrome 67, Firefox 67, Edge 70, Opera 67, Safari 11, Android (>= 4).
- React Split Views is flex-based.
- React Split Views built using this package [SplitViews](https://github.com/wutility/split-views).
- All pull requests are welcome, feel free.

## License
MIT