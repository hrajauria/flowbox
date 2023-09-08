import type { Meta, StoryObj } from "@storybook/react";
import { imagesDetailsAPIResponseMock } from "../../data/mocks/imagesAPIResponseMock";
import { CarouselLayout } from "./CarouselLayout";

const meta = {
  title: "Carousel Layout",
  component: CarouselLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CarouselLayout>;

export default meta;
type Story = StoryObj<typeof CarouselLayout>;

export const CarouselLayoutComponent: Story = {
  render: () => <CarouselLayout images={imagesDetailsAPIResponseMock} />,
};
