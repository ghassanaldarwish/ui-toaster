import React from "react";
import { Meta, StoryObj } from "@storybook/react";
function App() {
  return <div>Hello World!</div>;
}

const meta: Meta<typeof App> = {
  component: App,
  title: "Marbella/App",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof App>;

export const Primary: Story = (args: any) => <App {...args} />;
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
