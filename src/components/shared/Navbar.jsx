"use client";

import Link from "next/link";
import Image from "next/image";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const navItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/project", label: "مشاريعنا" },
    { href: "/aboutus", label: "نبذة عنا" },
    { href: "/contact", label: "تواصل معنا" },
    { href: "/questions", label: "الأسئلة الشائعة " },
    { href: "/terms", label: "الشروط والأحكام" },
  ];

  return (
    <header className="bg-gradient-to-l from-amber-700 via-amber-600 to-amber-500 text-white px-4 md:px-10 py-2 flex items-center justify-between shadow-lg border-b border-amber-200/40 sticky top-0 z-50 backdrop-blur-md">
      {/* شعار داخل دائرة */}
      <Link href="/" className="flex items-center">
        <Image src="/logohedar.webp" alt="Logo" width={130} height={56} />
      </Link>

      {/* قائمة التصفح على الشاشات الكبيرة */}
      <nav className="hidden md:flex items-center ml-60 gap-1 lg:gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative px-3 py-1 font-bold text-lg text-white/90 hover:text-white transition group"
          >
            <span className="group-hover:border-b-4 group-hover:border-white group-hover:pb-1 transition-all duration-200">{item.label}</span>
          </Link>
        ))}
        {/* زر تبرع الآن */}
        <Link href="/project" className="ml-2 lg:ml-4">
          
        </Link>
      </nav>

      {/* قائمة التصفح على الموبايل */}
      <div className="md:hidden flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-amber-900 bg-white/80 p-0 cursor-pointer shadow-md border border-amber-200">
              <HiMenu className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gradient-to-b from-amber-50 to-amber-100 text-amber-900 p-4 animate-slide-in">
            <SheetTitle className="sr-only">القائمة</SheetTitle>
            <nav className="mt-10 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-bold hover:text-amber-700 transition-all border-b border-amber-200 pb-2"
                >
                  {item.label}
                </Link>
              ))}
              
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
