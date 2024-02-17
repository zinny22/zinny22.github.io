interface HeaderLinkButtonProps {
  label: string;
}
function HeaderLinkButton({ label }: HeaderLinkButtonProps) {
  return (
    <button className="hover:underline text-l text-slate-700">{label}</button>
  );
}

export default HeaderLinkButton;
