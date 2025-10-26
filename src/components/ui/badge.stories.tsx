import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "./badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
    asChild: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
} as unknown as Story;

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
} as unknown as Story;

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
} as unknown as Story;

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
} as unknown as Story;

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        Verified
      </>
    ),
    variant: "default",
  },
} as unknown as Story;
