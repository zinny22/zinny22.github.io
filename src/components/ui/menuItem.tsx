import Link from "next/link";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  href: string;
  label: string;
  onClick?: () => void;
  isSelected?: boolean;
}

function MenuItem({ href, label, onClick, isSelected }: MenuItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "transition-all hover:text-gray-800 text-gray-400 text-sm hover:text-[16px]",
        isSelected && "text-gray-800 text-[16px]"
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export default MenuItem;
