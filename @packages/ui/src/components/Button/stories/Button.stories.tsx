import { Button } from "../Button";
import type { Meta, StoryObj } from "@tools/storybook";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Children",
  },
};
