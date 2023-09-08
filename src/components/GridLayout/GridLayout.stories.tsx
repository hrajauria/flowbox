import type { Meta, StoryObj } from "@storybook/react";
import { imagesDetailsAPIResponseMock } from "../../data/mocks/imagesAPIResponseMock";
import { GridLayout } from "./GridLayout";

const meta = {
  title: "Grid Layout",
  component: GridLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof GridLayout>;

export default meta;
type Story = StoryObj<typeof GridLayout>;

export const GridLayoutComponent: Story = {
  render: () => <GridLayout images={imagesDetailsAPIResponseMock} />,
};
