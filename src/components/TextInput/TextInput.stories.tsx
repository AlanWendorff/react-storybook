import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput from "./TextInput";
import { index } from "../../constants/storybook.index";
import "../../index.scss";

export default {
  title: `${index}TextInput`,
  component: TextInput,
  args: {
    id: "314",
    label: "Text Input",
    placeholder: "Input some text...",
    disabled: false,
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};
