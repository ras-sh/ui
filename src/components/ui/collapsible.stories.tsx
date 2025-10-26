import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="font-semibold text-sm">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button size="sm" variant="ghost">
            Toggle
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
} as unknown as Story;
