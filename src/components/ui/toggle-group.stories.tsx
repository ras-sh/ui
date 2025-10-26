import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

const meta = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "single",
    children: (
      <>
        <ToggleGroupItem aria-label="Align left" value="left">
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
            <path d="M21 6H3" />
            <path d="M15 12H3" />
            <path d="M17 18H3" />
          </svg>
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Align center" value="center">
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
            <path d="M21 12H3" />
            <path d="M17 6H7" />
            <path d="M19 18H5" />
          </svg>
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Align right" value="right">
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
            <path d="M21 6H3" />
            <path d="M21 12H9" />
            <path d="M21 18H7" />
          </svg>
        </ToggleGroupItem>
      </>
    ),
  },
} as unknown as Story;

export const Outline: Story = {
  args: {
    type: "single",
    variant: "outline",
    children: (
      <>
        <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
        <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
      </>
    ),
  },
} as unknown as Story;

export const Multiple: Story = {
  args: {
    type: "multiple",
    children: (
      <>
        <ToggleGroupItem value="bold">B</ToggleGroupItem>
        <ToggleGroupItem value="italic">I</ToggleGroupItem>
        <ToggleGroupItem value="underline">U</ToggleGroupItem>
      </>
    ),
  },
} as unknown as Story;

export const WithSpacing: Story = {
  args: {
    type: "single",
    variant: "outline",
    spacing: 2,
    children: (
      <>
        <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
        <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
        <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
      </>
    ),
  },
} as unknown as Story;
