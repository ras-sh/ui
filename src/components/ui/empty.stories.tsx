import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./empty";

const meta = {
  title: "Components/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Empty className="w-[450px]">
      <EmptyHeader>
        <EmptyMedia variant="icon">
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
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </EmptyMedia>
        <EmptyTitle>No products found</EmptyTitle>
        <EmptyDescription>
          You haven't added any products yet. Start by creating your first
          product.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Add Product</Button>
      </EmptyContent>
    </Empty>
  ),
} as unknown as Story;

export const WithoutIcon: Story = {
  render: () => (
    <Empty className="w-[450px]">
      <EmptyHeader>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your search or filter to find what you're looking for.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Clear filters</Button>
      </EmptyContent>
    </Empty>
  ),
} as unknown as Story;

export const Simple: Story = {
  render: () => (
    <Empty className="w-[450px]">
      <EmptyHeader>
        <EmptyTitle>Nothing to see here</EmptyTitle>
        <EmptyDescription>
          This area is currently empty. Check back later for updates.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
} as unknown as Story;
