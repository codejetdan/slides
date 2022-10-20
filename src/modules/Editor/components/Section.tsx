import { useAppStore } from "~/appStore";
import { styled } from "~/appStyles";
import { IconType } from "~/config";
import { SectionColumns, SectionElements } from "~/types";

import { Button } from "~/components/Button";
import { Element } from "./Element";

interface SectionProps {
  slideId: string;
  id: string;
  columns: SectionColumns;
  elements: SectionElements;
}

const RemoveSectionButton = styled(Button, {
  borderRadius: "$circle",
  minHeight: "$medium",
  width: "$medium",
  position: "absolute",
  top: 0,
  right: 0,
  opacity: 0,
  transition: "$normal",
});

const StyledSection = styled("div", {
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "$medium",
  minHeight: "$large",
  padding: "$medium 0",

  borderWidth: "$small",
  borderStyle: "$normal",
  borderColor: "$gray500",

  "&:hover": {
    [`& ${RemoveSectionButton}`]: {
      opacity: 0.5,
      "&:hover": {
        opacity: 1,
        color: "$red500",
      },
    },
  },

  variants: {
    columns: {
      1: {},
      2: {},
      3: {},
      4: {},
    },
  },
});

export const Section: React.FC<SectionProps> = ({
  slideId,
  id,
  columns,
  elements,
}) => {
  const { removeSlideSection } = useAppStore();
  const handleRemoveSectionClick = () => removeSlideSection(slideId, id);

  return (
    <StyledSection>
      {elements.map((element) => (
        <Element
          slideId={slideId}
          sectionId={id}
          key={element.id}
          {...element}
          columns={columns}
        />
      ))}
      <RemoveSectionButton
        icon={IconType.Close}
        onClick={handleRemoveSectionClick}
        type="ghost"
      />
    </StyledSection>
  );
};
