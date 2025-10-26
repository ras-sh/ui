import type { Meta, StoryObj } from "@storybook/react-vite";

import { Kbd, KbdGroup } from "./kbd";

const meta = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "⌘",
  },
} as unknown as Story;

export const Letter: Story = {
  args: {
    children: "K",
  },
} as unknown as Story;

export const Word: Story = {
  args: {
    children: "Enter",
  },
} as unknown as Story;

export const Group: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
} as unknown as Story;

export const MultipleKeys: Story = {
  render: () => (
    <div className="flex gap-2">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  ),
} as unknown as Story;
