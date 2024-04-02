import { SiriusText } from "./SiriusText";

export default {
  title: 'Example/SiriusText',
  component: SiriusText,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export const Default = {
  args: {
    variant: 'default',
    children: 'This is just a simple text.',
  }
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'This is just a simple text.',
  }
};

export const Warning = {
  args: {
    variant: 'warning',
    children: 'This is just a simple text.',
  }
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'This is just a simple text.',
  }
};

export const Link = {
  args: {
    variant: 'default',
    children: 'Click me',
    type: 'link',
    href: 'https://sirius.com.ar/',
  }
}