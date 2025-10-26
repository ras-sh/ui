import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Calendar } from "./calendar";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" onSelect={setDate} selected={date} />;
  },
} as unknown as Story;

export const WithoutSelection: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return <Calendar mode="single" onSelect={setDate} selected={date} />;
  },
} as unknown as Story;
