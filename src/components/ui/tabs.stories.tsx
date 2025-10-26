import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs className="w-[400px]" defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm">
          Make changes to your account here. Click save when you're done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm">
          Change your password here. After saving, you'll be logged out.
        </p>
      </TabsContent>
    </Tabs>
  ),
} as unknown as Story;

export const WithCards: Story = {
  render: () => (
    <Tabs className="w-[400px]" defaultValue="account">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label className="font-medium text-sm" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-md border px-3 py-2"
                defaultValue="Pedro Duarte"
                id="name"
              />
            </div>
            <div className="space-y-1">
              <label className="font-medium text-sm" htmlFor="username">
                Username
              </label>
              <input
                className="w-full rounded-md border px-3 py-2"
                defaultValue="@peduarte"
                id="username"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label className="font-medium text-sm" htmlFor="current">
                Current password
              </label>
              <input
                className="w-full rounded-md border px-3 py-2"
                id="current"
                type="password"
              />
            </div>
            <div className="space-y-1">
              <label className="font-medium text-sm" htmlFor="new">
                New password
              </label>
              <input
                className="w-full rounded-md border px-3 py-2"
                id="new"
                type="password"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
} as unknown as Story;

export const ThreeTabs: Story = {
  render: () => (
    <Tabs className="w-[400px]" defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="text-sm">Overview content goes here</p>
      </TabsContent>
      <TabsContent value="analytics">
        <p className="text-sm">Analytics content goes here</p>
      </TabsContent>
      <TabsContent value="reports">
        <p className="text-sm">Reports content goes here</p>
      </TabsContent>
    </Tabs>
  ),
} as unknown as Story;
