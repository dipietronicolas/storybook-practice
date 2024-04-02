import { SiriusCard } from "./SiriusCard";

export default {
  title: 'Example/Card',
  component: SiriusCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    title: 'Default card',
    bordered: false,
  }
};

export const Bordered = {
  args: {
    title: 'Default card',
    bordered: true,
  }
};