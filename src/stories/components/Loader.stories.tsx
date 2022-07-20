import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from "../../components/Loader";
import { UI_ELEMS } from "../../constants/storybook.index";

export default {
  title: `${UI_ELEMS}Loader`,
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Default = Template.bind({});
