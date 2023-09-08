import type { Meta, StoryObj } from "@storybook/react";
import { imagesDetailsAPIResponseMock } from "../../data/mocks/imagesAPIResponseMock";
import { ListLayout } from "./ListLayout";

const meta = {
  title: "List Layout",
  component: ListLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ListLayout>;

export default meta;
type Story = StoryObj<typeof ListLayout>;

export const ListLayoutComponent: Story = {
  render: () => <ListLayout images={imagesDetailsAPIResponseMock} />,
};
