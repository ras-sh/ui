import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";
import { Form } from "./form";
import { Input } from "./input";
import { Label } from "./label";

const meta = {
  title: "Components/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[350px]">
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </div>
  ),
} as unknown as Story;
