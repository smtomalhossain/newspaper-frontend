import { menuData } from "@/lib/menuData";
import Link from "next/link";

const Menubar = () => {
  return (
    <nav className="flex flex-grow flex-basis-full items-center">
      <Link
        className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md"
        href="/"
      >
        হোম
      </Link>

      {/* Loop Through Menu Items */}
      {menuData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="relative group flex gap-3">
          {category.items.map((item, itemIndex) => (
            <Link
              key={itemIndex}
              href={item.href}
              className="text-sm p-1 px-3 md:w-auto hover:bg-gray-100 rounded-md flex justify-between items-center gap-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
};

export default Menubar;
