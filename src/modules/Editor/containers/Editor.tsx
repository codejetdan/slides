import { Link, RouteComponentProps } from "@reach/router";

import { useAppStore } from "~/appStore";
import { allIcons, AppRoute, IconType } from "~/config";
import { styled } from "~/appStyles";
import { Button } from "~/components/Button";
import { ErrorAlert } from "~/components/ErrorAlert";

import { Slide } from "../components/Slide";
import { useMemo } from "react";

const StyledSlideNavigationButton = styled(Button, {
  backgroundColor: "transparent",
  position: "absolute",
  minHeight: "48px",
  top: "calc(50% - 24px)",
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
  const { slides, addSlide } = useAppStore();

  const slideIndex = useMemo(() => Number(slide) - 1, [slide]);

  const shouldShowPreviousSlideButton = slideIndex > 0;
  const shouldShowNextSlideButton = slideIndex < slides.length - 1;

  if (slideIndex < 0 || slideIndex >= slides.length)
    return <ErrorAlert message="Slide doesn't exist" />;

  return (
    <div>
      <Button onClick={addSlide} text="Add Slide" />

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

      <SlideCount>
        Slide {slide}
        {slides.length > 1 && ` of ${slides.length}`}
      </SlideCount>

      {allIcons.map((icon) => (
        <span className="material-icons" key={icon}>
          {icon}
        </span>
      ))}

      <Slide index={slideIndex} />
    </div>
  );
};
