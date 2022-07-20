import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from "../../components/Footer";
import { MEDIA } from "../../constants/storybook.index";

export default {
  title: `${MEDIA}Fundations`,
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Colors = Template.bind({});

export const Icons = Template.bind({});
