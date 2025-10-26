import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "./input";
import { InputGroup, InputGroupText } from "./input-group";

const meta = {
  title: "Components/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <InputGroup>
      <InputGroupText>https://</InputGroupText>
      <Input placeholder="www.example.com" type="text" />
    </InputGroup>
  ),
} as unknown as Story;

export const WithIcon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupText>
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
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </InputGroupText>
      <Input placeholder="Username" type="text" />
    </InputGroup>
  ),
} as unknown as Story;

export const Suffix: Story = {
  render: () => (
    <InputGroup>
      <Input placeholder="Amount" type="text" />
      <InputGroupText>.00</InputGroupText>
    </InputGroup>
  ),
} as unknown as Story;
