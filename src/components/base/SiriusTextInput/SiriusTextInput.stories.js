import { SiriusTextInput } from './SiriusTextInput';
import { fn } from '@storybook/test';

export default {
  title: 'Example/SiriusTextInput',
  component: SiriusTextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  }
};

export const Text = {
  args: {
    type: 'text',
    placeholder: 'Start typing'
  },
};

export const Password = {
  args: {
    type: 'password',
    placeholder: 'Start typing'
  },
}

