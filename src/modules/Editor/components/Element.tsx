import React, { useState } from "react";
import PureModal from "react-pure-modal";

import { useAppStore } from "~/appStore";
import { styled } from "~/appStyles";
import { Icon } from "~/components/Icon";
import { allIcons, IconType } from "~/config";
import { SectionColumns, SectionElement, SectionElementType } from "~/types";

const StyledElement = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
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
  const [modal, setModal] = useState<SectionElementType | null>(null);
  const [newTitle, setNewtitle] = useState("");

  const { changeTitleText, changeIcon } = useAppStore();

  const handleElementClick = () => {
    if (modal) return;
    setModal(data.type);
  };

  const handleInputTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewtitle(e.currentTarget.value);

  const handleTitleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.type !== SectionElementType.Title) return;

    changeTitleText(slideId, sectionId, id, newTitle);
    setModal(null);
  };

  const handleIconChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (data.type !== SectionElementType.Icon) return;

    changeIcon(slideId, sectionId, id, e.currentTarget.value || data.icon);
    setModal(null);
  };

  return (
    <StyledElement
      onClick={handleElementClick}
      columns={data.type === SectionElementType.Title ? 1 : columns}
    >
      <PureModal
        portal
        isOpen={Boolean(modal)}
        closeButton={<Icon name={IconType.Close} />}
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(null);
          return true;
        }}
      >
        <div>
          {data.type === SectionElementType.Title && (
            <form onSubmit={handleTitleSubmit}>
              <input
                style={{ width: "100%" }}
                type="text"
                onChange={handleInputTitleChange}
                defaultValue={data.text}
              />
              <button type="submit">Change text</button>
            </form>
          )}

          {data.type === SectionElementType.Icon && (
            <select onChange={handleIconChange} style={{ width: "100%" }}>
              {allIcons.map((icon) => (
                <option value={icon}>{icon}</option>
              ))}
            </select>
          )}
        </div>
      </PureModal>

      {data.type === SectionElementType.Title && <h1>{data.text}</h1>}
      {data.type === SectionElementType.Icon && (
        <StyledIconWrapper>
          <Icon name={data.icon} />
        </StyledIconWrapper>
      )}
    </StyledElement>
  );
};
