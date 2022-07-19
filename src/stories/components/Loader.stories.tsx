import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from "../../components/Loader";
import { index } from "../../constants/storybook.index";

export default {
  title: `${index}Loader`,
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Default = Template.bind({});
