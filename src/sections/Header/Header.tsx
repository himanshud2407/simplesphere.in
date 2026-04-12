import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(80);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'All Courses', href: '/courses' },
    { label: 'Blogs', href: '/blog' },
    { label: 'Find Center', href: '/find-center' },
    { label: 'Contact Us', href: '/contact' },
  ];

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4 transition-all duration-500">
      <div 
        className={cn(
          "mx-auto transition-all duration-500 ease-in-out",
          scrolled && !open 
            ? "max-w-6xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl px-6 sm:px-8" 
            : "max-w-screen-2xl bg-white border-b border-gray-100 rounded-none px-0"
        )}
      >
        <div className={cn("flex justify-between items-center transition-all duration-500", scrolled ? "h-18" : "h-24")}>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.svg" 
              alt="SimpleSphere Logo" 
              className={cn("transition-all duration-500 object-contain", scrolled ? "w-44 h-20" : "w-56 h-20")} 
            />
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (location.pathname === '/' && link.href === '/');
              return (
                <Link 
                  key={link.label}
                  to={link.href} 
                  className={cn(
                    "text-base font-semibold transition-colors",
                    isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-8 h-12 shadow-md shadow-blue-200">
              <a href="https://students.simplesphere.in" target="_blank" rel="noopener noreferrer">Portal</a>
            </Button>
            <Button asChild variant="outline" className="border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 font-bold rounded-xl px-8 h-12">
              <a href="https://dashboard.simplesphere.in" target="_blank" rel="noopener noreferrer">LMS</a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <Button 
              size="icon" 
              variant="outline" 
              onClick={() => setOpen(!open)} 
              className="border-gray-200 rounded-xl"
            >
              <MenuToggleIcon open={open} className="size-5" duration={300} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-x-0 top-[80px] bottom-0 z-[60] bg-white md:hidden transition-transform duration-300 ease-in-out overflow-y-auto',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (location.pathname === '/' && link.href === '/');
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-lg font-semibold p-4 rounded-xl transition-colors text-center",
                    isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col gap-4">
            <Button asChild className="w-full justify-center py-7 text-lg bg-blue-600 font-bold rounded-2xl">
              <a href="https://students.simplesphere.in" target="_blank" rel="noopener noreferrer">Portal</a>
            </Button>
            <Button asChild variant="outline" className="w-full justify-center py-7 text-lg border-2 font-bold rounded-2xl bg-white">
              <a href="https://dashboard.simplesphere.in" target="_blank" rel="noopener noreferrer">LMS</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
