import { useCallback } from "react";

import { useAppStore } from "~/appStore";
import { styled } from "~/appStyles";
import { ErrorAlert } from "~/components/ErrorAlert";

import { Section } from "./Section";

const StyledSlide = styled("div", {
  padding: "$small $xLarge",
});

interface SlideProps {
  index: number;
}

export const Slide: React.FC<SlideProps> = ({ index }) => {
  const slide = useAppStore(
    useCallback((state) => state.slides[index], [index])
  );

  if (!slide) return <ErrorAlert message="Error loading slide" />;

  return (
    <StyledSlide>
      {slide.sections.map(({ id, columns, elements }) => (
        <Section
          key={id}
          slideId={slide.id}
          id={id}
          columns={columns}
          elements={elements}
        />
      ))}
    </StyledSlide>
  );
};
