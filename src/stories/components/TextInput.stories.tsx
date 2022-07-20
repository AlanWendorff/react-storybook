import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput from "../../components/TextInput/TextInput";
import { UI_ELEMS } from "../../constants/storybook.index";

export default {
  title: `${UI_ELEMS}TextInput`,
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
