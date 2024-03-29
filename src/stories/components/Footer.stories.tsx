import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from "../../components/Footer";
import { UI_ELEMS } from "../../constants/storybook.index";

export default {
  title: `${UI_ELEMS}Footer`,
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
