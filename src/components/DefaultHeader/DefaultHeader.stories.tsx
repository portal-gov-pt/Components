import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DefaultHeader from './DefaultHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'OpenModules/PortalHeader',
  component: DefaultHeader,
} as ComponentMeta<typeof DefaultHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DefaultHeader> = (args) => <DefaultHeader {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello world!',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me!',
};