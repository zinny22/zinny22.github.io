import HeaderLinkButton from "@/Components/Atoms/HeaderLinkButton";

export const headerLinkList = ["<about me!/>", "skills", "career", "project"];

function HeaderLinkFlexList() {
  return (
    <div className="flex gap-x-[30px] items-center max-tablet:hidden">
      {headerLinkList.map((link) => (
        <HeaderLinkButton key={link} label={link} />
      ))}
    </div>
  );
}

export default HeaderLinkFlexList;
