import { components } from "react-select";

export default function CustomIndicator(props) {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="16"
        height="16"
        style={{
          transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 300ms ease",
        }}
      >
        <use href="/sprite.svg#icon-arrow-down" />
      </svg>
    </components.DropdownIndicator>
  );
}
