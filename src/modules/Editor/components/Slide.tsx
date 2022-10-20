import { useCallback } from "react";

import { useAppStore } from "~/appStore";
import { ErrorAlert } from "~/components/ErrorAlert";

import { Section } from "./Section";

interface SlideProps {
  index: number;
}

export const Slide: React.FC<SlideProps> = ({ index }) => {
  const slide = useAppStore(
    useCallback((state) => state.slides[index], [index])
  );

  if (!slide) return <ErrorAlert message="Error loading slide" />;

  return (
    <div>
      {slide.sections.map((section) => (
        <Section key={section.id} />
      ))}
    </div>
  );
};
