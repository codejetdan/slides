import { useCallback } from "react";

import { useAppStore } from "~/appStore";
import { Button } from "~/components/Button";
import { ErrorAlert } from "~/components/ErrorAlert";

import { Section } from "./Section";

interface SlideProps {
  index: number;
}

export const Slide: React.FC<SlideProps> = ({ index }) => {
  const slide = useAppStore(
    useCallback((state) => state.slides[index], [index])
  );

  const addSlideSection = useAppStore((state) => state.addSlideSection);
  const handleAddSectionClick = () => addSlideSection(index);

  if (!slide) return <ErrorAlert message="Error loading slide" />;

  return (
    <div>
      <Button onClick={handleAddSectionClick} text="Add Section" />
      {slide.sections.map((section) => (
        <Section key={section.id} />
      ))}
    </div>
  );
};
