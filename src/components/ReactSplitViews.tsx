import React, { Fragment, useEffect, useRef } from 'react';
import SplitViews from 'split-views';

interface IProps {
  children?: Array<React.ReactChild>,
  style?: object,
  className?: string,
  onDragEnd?: any,
  gutterSize?: number,
  minSize?: number,
  sizes: any,
  direction?: string
}

export function ReactSplitViews({
  children,
  style,
  className = "split-views",
  onDragEnd,
  gutterSize = 5,
  minSize = 0,
  sizes = [50, 50],
  direction = 'horizontal'
}: IProps) {

  const parentRef = useRef<any>();
  
  const defaultStyle: object = {
    display: "flex",
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    ...style
  };

  useEffect(() => {
    let sp: any = null;
    if (parentRef && parentRef.current) {
      const options = {
        parent: parentRef.current,
        direction,
        gutterSize,
        minSize,
        sizes,
        onDragEnd
      }

      sp = SplitViews(options)
    }

    return () => sp && sp.destroy()
  }, []);

  return (<div className={className + " " + direction} style={defaultStyle} ref={parentRef}>
    {children?.map((child, i) => <Fragment key={i}>
      {child}
      {i < children.length - 1 && <span className="sp-gutter"></span>}
    </Fragment>)}
  </div>);
}

