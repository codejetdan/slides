import { useAppStore } from "~/appStore";
import { styled } from "~/appStyles";
import { Icon } from "~/components/Icon";
import { allIcons } from "~/config";
import { SectionColumns, SectionElement, SectionElementType } from "~/types";

const StyledElement = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  variants: {
    columns: {
      1: {
        width: "100%",
      },
      2: {
        width: "50%",
      },
      3: {
        width: "calc(100% / 3)",
      },
      4: {
        width: "25%",
      },
    },
  },
});

const StyledIconWrapper = styled("div", {
  minWidth: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

type ElementProps = {
  columns: SectionColumns;
  slideId: string;
  sectionId: string;
} & SectionElement;

export const Element: React.FC<ElementProps> = ({
  slideId,
  sectionId,
  data,
  id,
  columns,
}) => {
  const { changeTitleText, changeIcon } = useAppStore();

  const handleElementClick = () => {
    // todo: modals
    if (data.type === SectionElementType.Title) {
      const newText = prompt("Change text", data.text);
      changeTitleText(slideId, sectionId, id, newText || data.text);
    }

    if (data.type === SectionElementType.Icon) {
      const newIcon = prompt(`Change icon: ${allIcons.join(" ")} `, data.icon);
      changeIcon(slideId, sectionId, id, newIcon || data.icon);
    }
  };

  return (
    <StyledElement
      onClick={handleElementClick}
      columns={data.type === SectionElementType.Title ? 1 : columns}
    >
      {data.type === SectionElementType.Title && <h1>{data.text}</h1>}
      {data.type === SectionElementType.Icon && (
        <StyledIconWrapper>
          <Icon name={data.icon} />
        </StyledIconWrapper>
      )}
    </StyledElement>
  );
};
