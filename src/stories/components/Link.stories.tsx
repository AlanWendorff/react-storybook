import { $enum } from "ts-enum-util";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link, { LinkVariant } from "../../components/Link/Link";
import { UI_ELEMS } from "../../constants/storybook.index";

export default {
  title: `${UI_ELEMS}Link`,
  component: Link,
  args: {
    children: "Link",
    to: "https://nftstudios.io",
  },
  argTypes: {
    variant: {
      control: {
        labels: $enum(LinkVariant).getKeys(),
      },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: LinkVariant.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: LinkVariant.Secondary,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: LinkVariant.Tertiary,
};

export const ButtonLikePrimary = Template.bind({});
ButtonLikePrimary.args = {
  variant: LinkVariant.ButtonPrimary,
};

export const ButtonLikeSecondary = Template.bind({});
ButtonLikeSecondary.args = {
  variant: LinkVariant.ButtonSecondary,
};
