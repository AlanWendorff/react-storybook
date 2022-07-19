import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from "./Loader";
import { index } from "../../constants/storybook.index";
import "../../index.scss";

export default {
  title: `${index}Loader`,
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Default = Template.bind({});
