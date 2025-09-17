"use client";

import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import navigation from "@/config/navigation.json";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

// Types pour les données de navigation
interface NavigationItem {
  id: number;
  name: string;
  path: string;
  hasChildren?: boolean;
  children?: NavigationItem[];
  icon?: string;
  description?: string;
  isHeading?: boolean;
  isFeatured?: boolean;
  image?: string;
}

const SideNavModal = () => {
  const SideMenuData = navigation.header as NavigationItem[];

  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <button className="xl:hidden p-2">
            <FaBars className="w-5 h-5 text-gray-700" />
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-full border-none">
          <DrawerTitle className="hidden">Side Navigation</DrawerTitle>
          <DrawerDescription className="hidden">
            Navigate through the site menu
          </DrawerDescription>

          <div className="bg-white w-full h-full px-6 pt-6 pb-8">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
                <DrawerClose asChild>
                  <Button className="w-8 h-8 rounded-full border border-gray-200 bg-white hover:bg-gray-50">
                    <span className="h-[1px] w-4 transform -translate-x-1/2 rotate-45 bg-gray-600 inline-block"></span>
                    <span className="h-[1px] w-4 transform -translate-x-1/2 -rotate-45 bg-gray-600 inline-block"></span>
                  </Button>
                </DrawerClose>
              </div>

              <ScrollArea className="flex-1">
                <Accordion type="single" collapsible className="w-full">
                  {SideMenuData.map((menuItem) =>
                    menuItem.hasChildren ? (
                      <AccordionItem
                        value={`item-${menuItem.name}`}
                        key={menuItem.id}
                        className="border-b border-gray-100"
                      >
                        <AccordionTrigger className="text-left py-4 hover:text-gray-600">
                          {menuItem.name}
                        </AccordionTrigger>
                        <AccordionContent className="pb-4">
                          <div className="space-y-2 pl-4">
                            {menuItem.children?.map((submenu) =>
                              submenu.hasChildren ? (
                                <Accordion
                                  type="single"
                                  collapsible
                                  key={`id-${submenu.id}`}
                                >
                                  <AccordionItem
                                    value={`submenuChild-${submenu.id}`}
                                    className="border-0"
                                  >
                                    <AccordionTrigger className="text-left py-2 hover:text-gray-600">
                                      {submenu.name}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-2">
                                      <div className="space-y-1 pl-4">
                                        {submenu.children?.map((submenuChild) => (
                                          <DrawerClose asChild key={submenuChild.id}>
                                            <Link
                                              href={submenuChild.path}
                                              className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                                            >
                                              {submenuChild.name}
                                            </Link>
                                          </DrawerClose>
                                        ))}
                                      </div>
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                              ) : (
                                <DrawerClose asChild key={submenu.id}>
                                  <Link
                                    href={submenu.path}
                                    className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                                  >
                                    {submenu.name}
                                  </Link>
                                </DrawerClose>
                              )
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <DrawerClose asChild key={menuItem.id}>
                        <Link
                          href={menuItem.path}
                          className="block py-4 text-gray-900 hover:text-gray-600 border-b border-gray-100"
                        >
                          {menuItem.name}
                        </Link>
                      </DrawerClose>
                    )
                  )}
                </Accordion>
              </ScrollArea>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex gap-4">
                  <Link
                    href="/login"
                    className="flex-1 text-center py-2 text-gray-700 hover:text-gray-900 font-medium text-sm"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/demo"
                    className="flex-1 text-center py-2 bg-purple-600 text-white rounded-md font-medium text-sm hover:bg-purple-700"
                  >
                    See a demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideNavModal;
