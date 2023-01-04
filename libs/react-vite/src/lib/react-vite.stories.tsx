import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactVite } from './react-vite';

const Story: ComponentMeta<typeof ReactVite> = {
  component: ReactVite,
  title: 'ReactVite',
};
export default Story;

const Template: ComponentStory<typeof ReactVite> = (args) => (
  <ReactVite {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
