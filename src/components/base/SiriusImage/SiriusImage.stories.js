import { SiriusImage } from './SiriusImage';

export default {
  title: 'Example/SiriusImage',
  component: SiriusImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    src: "https://blog.logrocket.com/wp-content/uploads/2023/10/complete-guide-react-refs.png",
    width: 100,
    height: 100,
  }
}

