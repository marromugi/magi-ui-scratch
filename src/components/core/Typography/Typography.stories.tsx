import { Typography } from "./Typography";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  component: Typography,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => <Typography {...args} />,
};
