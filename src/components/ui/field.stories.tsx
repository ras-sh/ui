import type { Meta, StoryObj } from "@storybook/react-vite";

import { Field, FieldDescription, FieldError, FieldLabel } from "./field";
import { Input } from "./input";

const meta = {
  title: "Components/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field className="w-[350px]">
      <FieldLabel>Email</FieldLabel>
      <Input placeholder="Enter your email" type="email" />
      <FieldDescription>We'll never share your email.</FieldDescription>
    </Field>
  ),
} as unknown as Story;

export const WithError: Story = {
  render: () => (
    <Field className="w-[350px]">
      <FieldLabel>Username</FieldLabel>
      <Input aria-invalid placeholder="Enter username" type="text" />
      <FieldError>Username is required</FieldError>
    </Field>
  ),
} as unknown as Story;

export const Required: Story = {
  render: () => (
    <Field className="w-[350px]">
      <FieldLabel>
        Password <span className="text-destructive">*</span>
      </FieldLabel>
      <Input placeholder="Enter password" required type="password" />
      <FieldDescription>Must be at least 8 characters.</FieldDescription>
    </Field>
  ),
} as unknown as Story;
