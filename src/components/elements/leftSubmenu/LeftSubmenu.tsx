"use Client";
import Link from "next/link";

type submenuProps = {
  id: number;
  name: string;
  path: string;
  hasChildren?: boolean;
  children?: {
    id: number;
    name: string;
    path: string;
  }[];
};
type LeftSubmenuProps = {
  submenuData: submenuProps;
};

const LeftSubmenu = ({ submenuData }: LeftSubmenuProps) => {
  const { children } = submenuData;
  return (
    <>
      <div className="absolute left-full rtl:right-full top-0 bg-white shadow-lg border border-gray-100 rounded-lg p-4 min-w-[200px] z-50">
        <div className="space-y-2">
          {children?.map((child) => (
            <Link
              href={child.path}
              className="block text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
              key={child.id}
            >
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftSubmenu;
