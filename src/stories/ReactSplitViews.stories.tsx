import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactSplitViews } from '../components/ReactSplitViews';
import './index.css';

export default { title: 'ReactSplitViews', component: ReactSplitViews } as ComponentMeta<typeof ReactSplitViews>;

export const Horizontal: ComponentStory<typeof ReactSplitViews> = () => (
  <ReactSplitViews direction="horizontal" sizes={[25, 50, 25]}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </ReactSplitViews>
);

export const Vertical: ComponentStory<typeof ReactSplitViews> = () => (
  <ReactSplitViews direction="vertical" sizes={[25, 50, 25]}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </ReactSplitViews>
);

export const Both: ComponentStory<typeof ReactSplitViews> = () => (
  <ReactSplitViews direction="horizontal" sizes={[25, 50, 25]}>
    <div className='h-100'>1</div>
    <div className='h-100'>2</div>
    <ReactSplitViews direction="vertical" sizes={[25, 50, 25]}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </ReactSplitViews>
  </ReactSplitViews>
);
