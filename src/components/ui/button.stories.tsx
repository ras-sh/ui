import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
    },
    asChild: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
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

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
} as unknown as Story;

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
} as unknown as Story;

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
} as unknown as Story;

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
} as unknown as Story;

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
} as unknown as Story;

export const Icon: Story = {
  args: {
    children: (
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
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
    size: "icon",
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
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
        Button with Icon
      </>
    ),
  },
} as unknown as Story;

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
} as unknown as Story;
