import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";

import { Button } from "./button";
import { Toaster } from "./sonner";

const meta = {
  title: "Components/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <Button onClick={() => toast("Event has been created")}>
        Show Toast
      </Button>
    </>
  ),
} as unknown as Story;

export const WithDescription: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
          })
        }
      >
        Show Toast
      </Button>
    </>
  ),
} as unknown as Story;

export const Success: Story = {
  render: () => (
    <>
      <Toaster />
      <Button onClick={() => toast.success("Event has been created")}>
        Show Success Toast
      </Button>
    </>
  ),
} as unknown as Story;

export const Error: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        onClick={() => toast.error("Event could not be created")}
        variant="destructive"
      >
        Show Error Toast
      </Button>
    </>
  ),
} as unknown as Story;
