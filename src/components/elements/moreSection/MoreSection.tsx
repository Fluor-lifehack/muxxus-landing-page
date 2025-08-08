import Link from "next/link";

type MoreSectionProps = {
  title: string;
  links: {
    name: string;
    path: string;
  }[];
};

const MoreSection = ({ title, links }: MoreSectionProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              href={link.path}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoreSection; 