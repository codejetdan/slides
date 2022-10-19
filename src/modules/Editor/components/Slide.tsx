import { useAppStore } from "~/appStore";
import { Identity } from "~/types";

import { Section } from "./Section";
import { Error } from "./Error";
import { Button } from "~/components/Button";

interface SlideProps extends Identity {}

export const Slide: React.FC<SlideProps> = ({ id }) => {
  const slide = useAppStore((state) =>
    state.slides.find((slide) => slide.id === id)
  );

  const addSlideSection = useAppStore((state) => state.addSlideSection);
  const handleAddSectionClick = () => addSlideSection(id);

  if (!slide) return <Error message="Error loading slide" />;

  return (
    <div>
      <Button onClick={handleAddSectionClick}>Add Section</Button>
      {slide.sections.map((section) => (
        <Section key={section.id} />
      ))}
    </div>
  );
};
