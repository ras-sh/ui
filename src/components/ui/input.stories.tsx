import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "./input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
} as unknown as Story;

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter email...",
  },
} as unknown as Story;

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
} as unknown as Story;

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter number...",
  },
} as unknown as Story;

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
} as unknown as Story;

export const WithValue: Story = {
  args: {
    defaultValue: "This is a value",
  },
} as unknown as Story;

export const File: Story = {
  args: {
    type: "file",
  },
} as unknown as Story;
