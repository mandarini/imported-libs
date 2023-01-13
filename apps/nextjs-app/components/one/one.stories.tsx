import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { One } from './one';

const Story: ComponentMeta<typeof One> = {
  component: One,
  title: 'One',
};
export default Story;

const Template: ComponentStory<typeof One> = (args) => <One {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
