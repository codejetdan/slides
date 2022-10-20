import { useMemo } from "react";
import { Link, RouteComponentProps } from "@reach/router";

import { useAppStore } from "~/appStore";
import { allIcons, AppRoute, IconType } from "~/config";
import { styled } from "~/appStyles";
import { Button } from "~/components/Button";
import { ErrorAlert } from "~/components/ErrorAlert";

import { Slide } from "../components/Slide";

const StyledEditorMenu = styled("div", {
  borderBottomWidth: "$small",
  borderBottomStyle: "$normal",
  borderBottomColor: "$gray500",

  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$small",

  "& button": {
    margin: "0 $small",
  },
});

const slideNavBtnSize = 64;

const StyledSlideNavigationButton = styled(Button, {
  position: "absolute",
  borderRadius: "$circle",
  minHeight: `${slideNavBtnSize}px`,
  width: `${slideNavBtnSize}px`,
  top: `calc(50% - ${slideNavBtnSize / 2}px)`,
  zIndex: "$slideNav",

  transition: "$normal",
  opacity: 0.75,
  "&:hover": {
    transition: "$normal",
    opacity: 1,
  },
  variants: {
    direction: {
      previous: {
        left: 0,
      },
      next: {
        right: 0,
      },
    },
  },
});

const SlideCount = styled("div", {
  position: "absolute",
  bottom: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

interface EditorProps
  extends RouteComponentProps<{ projectId: string; slide: string }> {}

export const Editor: React.FC<EditorProps> = ({ projectId, slide }) => {
  const { slides, addSlide, addSlideSection } = useAppStore();

  const slideIndex = useMemo(() => Number(slide) - 1, [slide]);

  const shouldShowPreviousSlideButton = slideIndex > 0;
  const shouldShowNextSlideButton = slideIndex < slides.length - 1;

  if (slideIndex < 0 || slideIndex >= slides.length)
    return <ErrorAlert message="Slide doesn't exist" />;

  const handleAddSectionClick = () => addSlideSection(slideIndex);

  return (
    <div>
      {shouldShowPreviousSlideButton && (
        <Link to={`${AppRoute.Editor}/${projectId}/${Number(slide) - 1}`}>
          <StyledSlideNavigationButton
            direction="previous"
            icon={IconType.ArrowBackIos}
            type="ghost"
          />
        </Link>
      )}

      {shouldShowNextSlideButton && (
        <Link to={`${AppRoute.Editor}/${projectId}/${Number(slide) + 1}`}>
          <StyledSlideNavigationButton
            direction="next"
            icon={IconType.ArrowForwardIos}
            type="ghost"
          />
        </Link>
      )}

      <StyledEditorMenu>
        <Button onClick={addSlide} text="Add Slide" />
        <Button onClick={handleAddSectionClick} text="Add Section" />

        <SlideCount>
          Slide {slide}
          {slides.length > 1 && ` of ${slides.length}`}
        </SlideCount>
      </StyledEditorMenu>

      <Slide index={slideIndex} />
    </div>
  );
};
