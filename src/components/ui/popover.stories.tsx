import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";
import { Label } from "./label";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <input
                className="col-span-2 h-8 rounded-md border px-2"
                defaultValue="100%"
                id="width"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <input
                className="col-span-2 h-8 rounded-md border px-2"
                defaultValue="300px"
                id="maxWidth"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <input
                className="col-span-2 h-8 rounded-md border px-2"
                defaultValue="25px"
                id="height"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <input
                className="col-span-2 h-8 rounded-md border px-2"
                defaultValue="none"
                id="maxHeight"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
} as unknown as Story;

export const Simple: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Click me</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm">
          This is a simple popover with some text content.
        </p>
      </PopoverContent>
    </Popover>
  ),
} as unknown as Story;
