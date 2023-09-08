import type { Meta, StoryObj } from "@storybook/react";
import { CardsLayout } from "./CardsLayout";
import { imagesDetailsAPIResponseMock } from "../../data/mocks/imagesAPIResponseMock";

const meta = {
  title: "Cards Layout",
  component: CardsLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CardsLayout>;

export default meta;
type Story = StoryObj<typeof CardsLayout>;

export const CardsLayoutComponent: Story = {
  render: () => <CardsLayout images={imagesDetailsAPIResponseMock} />,
};
