import type { Meta, StoryObj } from "@storybook/react-vite";

import { Slider } from "./slider";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[350px]",
  },
} as unknown as Story;

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    className: "w-[350px]",
  },
} as unknown as Story;

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    disabled: true,
    className: "w-[350px]",
  },
} as unknown as Story;

export const CustomStep: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 10,
    className: "w-[350px]",
  },
} as unknown as Story;

export const Vertical: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    orientation: "vertical",
  },
} as unknown as Story;
