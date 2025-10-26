import type { Meta, StoryObj } from "@storybook/react-vite";

import { Toggle } from "./toggle";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Toggle",
  },
} as unknown as Story;

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
} as unknown as Story;

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
} as unknown as Story;

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
} as unknown as Story;

export const WithIcon: Story = {
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
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
      </svg>
    ),
    "aria-label": "Toggle italic",
  },
} as unknown as Story;

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
} as unknown as Story;
