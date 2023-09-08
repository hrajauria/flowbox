import type { Meta, StoryObj } from "@storybook/react";
import { imagesDetailsAPIResponseMock } from "../../data/mocks/imagesAPIResponseMock";
import { NavBar } from "./NavBar";
import { FlowboxProvider, FlowboxState } from "../../context/context";
import { ImageLayoutEnum } from "../../types/enum/ImageLayoutEnum";

const meta = {
  title: "Navigation Bar",
  component: NavBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

export const NavBarComponent: Story = {
  render: () => {
    const initialState: FlowboxState = {
      images: imagesDetailsAPIResponseMock,
      layout: ImageLayoutEnum.Carousel,
      isLoading: true,
      error: null,
      pageNumber: 1,
    };
    return (
      <FlowboxProvider initialState={initialState}>
        <NavBar />
      </FlowboxProvider>
    );
  },
};
