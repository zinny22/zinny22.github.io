import HeaderLinkButton from "@/Components/Atoms/HeaderLinkButton";
import { headerLinkList } from "../HeaderLinkFlexList/HeaderLinkFlexList";

interface HeaderLinkListProps {
  isOpenMenu: boolean;
}

function HeaderLinkList({ isOpenMenu }: HeaderLinkListProps) {
  return (
    <section
      className="grid gap-y-3 transition-all duration-300"
      style={{ maxHeight: isOpenMenu ? "156px" : "0px" }}
    >
      {headerLinkList.map((link) => (
        <HeaderLinkButton key={link} label={link} />
      ))}
    </section>
  );
}

export default HeaderLinkList;
