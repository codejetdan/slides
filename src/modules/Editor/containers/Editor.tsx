import { RouteComponentProps } from "@reach/router";

import { useAppStore } from "~/appStore";
import { allIcons } from "~/config";

import { Slide } from "../components/Slide";

export const Editor: React.FC<RouteComponentProps> = () => {
  const { slides, addSlide } = useAppStore();

  return (
    <div>
      <button onClick={addSlide}>Add Slide</button>

      {allIcons.map((icon) => (
        <span className="material-icons">{icon}</span>
      ))}

      {slides.map((slide) => (
        <Slide id={slide.id} key={slide.id} />
      ))}
    </div>
  );
};
