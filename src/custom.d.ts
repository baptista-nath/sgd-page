declare module "react-slick" {
  import { Component } from "react";

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<Settings>;
    }>;
  }

  export default class Slider extends Component<Settings> {}
}
