import { useAppStore } from "~/appStore";
import { styled } from "~/appStyles";
import { IconType } from "~/config";

import { Button } from "~/components/Button";

interface SectionProps {
  slideId: string;
  sectionId: string;
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
  marginTop: "$medium",
  minHeight: "$large",

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
});

export const Section: React.FC<SectionProps> = ({ slideId, sectionId }) => {
  const { removeSlideSection } = useAppStore();
  const handleRemoveSectionClick = () => removeSlideSection(slideId, sectionId);

  return (
    <StyledSection>
      <RemoveSectionButton
        icon={IconType.Close}
        onClick={handleRemoveSectionClick}
        type="ghost"
      />
    </StyledSection>
  );
};
