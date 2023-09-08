import type { Meta, StoryObj } from "@storybook/react";
import { BottomNavigation } from "./BottomNavigation";
import { actions } from "../../pages/Flowbox/Flowbox";

const meta = {
  title: "Bottom Navigation",
  component: BottomNavigation,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const BottomNavigationEmpty: Story = {
  render: () => (
    <BottomNavigation actions={actions} onBottomNavigationChange={() => {}} />
  ),
};
