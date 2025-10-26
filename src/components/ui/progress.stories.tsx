import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";

import { Progress } from "./progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    className: "w-[350px]",
  },
} as unknown as Story;

export const Zero: Story = {
  args: {
    value: 0,
    className: "w-[350px]",
  },
} as unknown as Story;

export const Complete: Story = {
  args: {
    value: 100,
    className: "w-[350px]",
  },
} as unknown as Story;

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress className="w-[350px]" value={progress} />;
  },
} as unknown as Story;
