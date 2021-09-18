import React, { Fragment, useEffect, useRef } from 'react';
import SplitViews from 'split-views';

export default function ReactSplitViews ({
  children,
  style = { display: "flex" },
  className = "split-views",
  onDragEnd,
  gutterSize = 5,
  minSize = 0,
  sizes,
  direction = 'horizontal'
}) {

  const parentRef = useRef();

  useEffect(() => {
    if (parentRef && parentRef.current) {

      const options = {
        parent: parentRef.current,
        direction,
        gutterSize,
        minSize,
        sizes,
        onDragEnd
      }

      SplitViews(options)
    }
  }, []);

  return (<div className={className + " " + direction} style={style} ref={parentRef}
    style={{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }}>
    {children.map((child, i) => <Fragment key={i}>
      {child}
      {i < children.length - 1 && <span className="sp-gutter"></span>}
    </Fragment>)}
  </div>);
}