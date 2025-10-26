import type { Meta, StoryObj } from "@storybook/react-vite";

import { Spinner } from "./spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
} as unknown as Story;

export const Small: Story = {
  args: {
    className: "size-3",
  },
} as unknown as Story;

export const Large: Story = {
  args: {
    className: "size-8",
  },
} as unknown as Story;

export const ExtraLarge: Story = {
  args: {
    className: "size-12",
  },
} as unknown as Story;
