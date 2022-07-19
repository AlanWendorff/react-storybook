import { MemoryRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "../../components/Header";
import { index } from "../../constants/storybook.index";

export default {
  title: `${index}Header`,
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);

export const Default = Template.bind({});
