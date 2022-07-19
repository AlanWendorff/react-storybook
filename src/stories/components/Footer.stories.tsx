import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from "../../components/Footer";
import { index } from "../../constants/storybook.index";

export default {
  title: `${index}Footer`,
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
