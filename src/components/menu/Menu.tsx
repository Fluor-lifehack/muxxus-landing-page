import * as React from "react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import navigation from "@/config/navigation.json";
import Link from "next/link";
import clsx from "clsx";
import LeftSubmenu from "../elements/leftSubmenu/LeftSubmenu";
import FeaturedCard from "../elements/featuredCard/FeaturedCard";
import MoreSection from "../elements/moreSection/MoreSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDirection } from "@/context/app.context";

const menuData = navigation.header;

type Props = {
  textColor?: string;
  className?: string;
};

// Type pour les éléments de menu avec les nouvelles propriétés
type MenuItem = {
  id: number;
  name: string;
  path: string;
  hasChildren?: boolean;
  children?: MenuItem[];
  description?: string;
  isHeading?: boolean;
  isFeatured?: boolean;
  icon?: string;
  image?: string;
  moreSection?: {
    title: string;
    links: { name: string; path: string }[];
  };
  featuredCard?: {
    title: string;
    description: string;
    link: string;
    image?: string;
  };
};

const Menu = ({ textColor, className }: Props) => {
  const [hoveredChildMenuId, setHoveredChildMenuId] = useState<number | null>(
    null
  );
  const { direction } = useDirection();
  let timeoutId: ReturnType<typeof setTimeout>;

  const handleMouseEnter = (id: number) => {
    clearTimeout(timeoutId);
    setHoveredChildMenuId(id);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setHoveredChildMenuId(null);
    }, 200);
  };

  return (
    <NavigationMenu dir={direction as "rtl" | "ltr"}>
      <NavigationMenuList>
        {menuData.map((menu: MenuItem) => (
          <NavigationMenuItem key={menu.id} className={cn(className)}>
            {menu.hasChildren ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-inherit submenu-trigger text-[16px] leading-[1] px-[15px] py-[37px] h-full uppercase font-normal",
                    textColor
                  )}
                >
                  {menu.name}
                </NavigationMenuTrigger>
                {menu.children && menu.children.length && (
                  <NavigationMenuContent className="border-0 bg-white shadow-lg transition-none w-screen left-0">
                    <div className="max-w-7xl mx-auto px-8 py-12">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Colonne principale */}
                        <div className="space-y-8">
                          {menu.children.map((childMenu: MenuItem, j) => (
                            <div
                              key={childMenu.id}
                              className={clsx(
                                "relative",
                                childMenu.isHeading && "border-b border-gray-200 pb-4 mb-6"
                              )}
                              onMouseEnter={() => handleMouseEnter(childMenu.id)}
                              onMouseLeave={handleMouseLeave}
                            >
                              {childMenu.isHeading ? (
                                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                  {childMenu.name}
                                </div>
                              ) : childMenu.isFeatured ? (
                                <div className="w-full">
                                  <FeaturedCard
                                    title={childMenu.name}
                                    description={childMenu.description || ""}
                                    link={childMenu.path}
                                    image={childMenu.image}
                                    className="w-full"
                                  />
                                </div>
                              ) : (
                                <div className="group">
                                  <Link
                                    className="flex items-center justify-between text-gray-700 hover:text-gray-900 transition-colors"
                                    href={childMenu.path}
                                  >
                                    <div className="flex items-center space-x-3">
                                      {childMenu.icon && (
                                        <span className="text-lg">{childMenu.icon}</span>
                                      )}
                                      <div>
                                        <div className="font-medium">{childMenu.name}</div>
                                        {childMenu.description && (
                                          <div className="text-sm text-gray-500 mt-1">
                                            {childMenu.description}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                    {childMenu.hasChildren && (
                                      <>
                                        {direction === "rtl" ? (
                                          <ChevronLeft className="text-gray-400 group-hover:text-gray-600" />
                                        ) : (
                                          <ChevronRight className="text-gray-400 group-hover:text-gray-600" />
                                        )}
                                      </>
                                    )}
                                  </Link>
                                  {childMenu.hasChildren &&
                                    hoveredChildMenuId === childMenu.id && (
                                      <LeftSubmenu submenuData={childMenu} />
                                    )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Colonne droite - More Section et Featured Card */}
                        <div className="space-y-8">
                          {menu.moreSection && (
                            <MoreSection
                              title={menu.moreSection.title}
                              links={menu.moreSection.links}
                            />
                          )}
                          
                          {menu.featuredCard && (
                            <div>
                              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                FEATURED
                              </h3>
                              <FeaturedCard
                                title={menu.featuredCard.title}
                                description={menu.featuredCard.description}
                                link={menu.featuredCard.link}
                                image={menu.featuredCard.image}
                                className="w-full"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                )}
              </>
            ) : (
              <NavigationMenuLink
                asChild
                className={cn(
                  "text-[16px] leading-[1] px-[15px] py-[37px] h-full uppercase",
                  textColor
                )}
              >
                <Link href={menu.path}>{menu.name}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
