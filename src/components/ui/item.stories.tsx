import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "./item";

const meta = {
  title: "Components/Item",
  component: Item,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Item className="w-[350px]">
      <ItemTitle>Item Title</ItemTitle>
      <ItemDescription>This is a description of the item.</ItemDescription>
    </Item>
  ),
} as unknown as Story;

export const WithMedia: Story = {
  render: () => (
    <Item className="w-[350px]">
      <ItemMedia>
        <div className="flex size-10 items-center justify-center rounded-full bg-muted">
          A
        </div>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Item with media</ItemTitle>
        <ItemDescription>Description text goes here</ItemDescription>
      </ItemContent>
    </Item>
  ),
} as unknown as Story;

export const WithActions: Story = {
  render: () => (
    <Item className="w-[350px]">
      <ItemContent>
        <ItemTitle>Item with actions</ItemTitle>
        <ItemDescription>Description text goes here</ItemDescription>
      </ItemContent>
      <ItemActions>
        <span className="text-muted-foreground text-sm">$99</span>
      </ItemActions>
    </Item>
  ),
} as unknown as Story;

export const Complete: Story = {
  render: () => (
    <Item className="w-[350px]">
      <ItemMedia>
        <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          JD
        </div>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>john.doe@example.com</ItemDescription>
      </ItemContent>
      <ItemActions>
        <span className="text-muted-foreground text-xs">2 hours ago</span>
      </ItemActions>
    </Item>
  ),
} as unknown as Story;

export const WithGroup: Story = {
  render: () => (
    <ItemGroup className="w-[350px]">
      <Item>
        <ItemMedia variant="icon">
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Profile</ItemTitle>
          <ItemDescription>Manage your profile settings</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia variant="icon">
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v6m0 6v6" />
          </svg>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Settings</ItemTitle>
          <ItemDescription>Configure your preferences</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
} as unknown as Story;
