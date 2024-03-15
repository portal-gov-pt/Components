import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PortalHeader from './PortalHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'OpenModules/PortalHeader',
  component: PortalHeader,
} as ComponentMeta<typeof PortalHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PortalHeader> = (args) => <PortalHeader {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello world!',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me!',
};