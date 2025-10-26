import type { Meta, StoryObj } from "@storybook/react-vite";

import { AspectRatio } from "./aspect-ratio";

const meta = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <img
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-md object-cover"
          height={450}
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          width={800}
        />
      </AspectRatio>
    </div>
  ),
} as unknown as Story;

export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1}>
        <img
          alt="Photo by Karsten Winegeart"
          className="h-full w-full rounded-md object-cover"
          height={800}
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&dpr=2&q=80"
          width={800}
        />
      </AspectRatio>
    </div>
  ),
} as unknown as Story;

export const Portrait: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={3 / 4}>
        <img
          alt="Photo by Laura Davidson"
          className="h-full w-full rounded-md object-cover"
          height={1067}
          src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&dpr=2&q=80"
          width={800}
        />
      </AspectRatio>
    </div>
  ),
} as unknown as Story;
