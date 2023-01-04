import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactRollup } from './react-rollup';

const Story: ComponentMeta<typeof ReactRollup> = {
  component: ReactRollup,
  title: 'ReactRollup',
};
export default Story;

const Template: ComponentStory<typeof ReactRollup> = (args) => (
  <ReactRollup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
