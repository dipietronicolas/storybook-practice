import { SiriusButton } from './SiriusButton';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: SiriusButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    type: 'primary',
    disabled: false,
    loading: false,
    children: 'hello there',
  },
};

export const Default = {
  args: {
    type: 'default',
    disabled: false,
    loading: false,
    children: 'hello there',
  },
};

export const Dashed = {
  args: {
    type: 'dashed',
    disabled: false,
    loading: false,
    children: 'hello there',
  },
};

export const Text = {
  args: {
    type: 'text',
    disabled: false,
    loading: false,
    children: 'hello there',
  },
};

export const Link = {
  args: {
    type: 'link',
    disabled: false,
    loading: false,
    children: 'hello there',
  }
};
