import { SiriusSignUp } from './SiriusSignUp';
import { userEvent, within, } from '@storybook/test';


export default {
  title: 'Example/SiriusSignUp',
  component: SiriusSignUp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Unfilled = {

};

export const FilledForm = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByPlaceholderText('Full name'), 'Michael Scott', {
      delay: 50,
    });

    await userEvent.type(canvas.getByPlaceholderText('Email'), 'email@provider.com', {
      delay: 50,
    });

    await userEvent.type(canvas.getByPlaceholderText('Password'), 'asdASD33', {
      delay: 50,
    });

    await userEvent.type(canvas.getByPlaceholderText('Confirm password'), 'asdASD33', {
      delay: 50,
    });

    await userEvent.click(canvas.getByRole('button'), {
      delay: 50,
    });

  },
};