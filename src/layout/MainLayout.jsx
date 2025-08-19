import { Outlet, useLocation } from "react-router";
import { Menu, X } from 'lucide-react';

import { TransitionLink } from "../componants/TransitionLink";
import { CatSlideTransition } from "../transitions/CatSlideTransition";
import { useState } from "react";

export const MainLayout = () => {
  const duration = 400;
  const [isExiting, setIsExiting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); 

  const handleBeforeNavigate = () =>
    new Promise((resolve) => {
      setIsExiting(true);
      setTimeout(() => {
        console.log("Transition started");
        setIsExiting(false);
        resolve();
      }, duration);
    });


  const getNavLinkClass = (path) =>
    `block md:inline-block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      location.pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-600 hover:bg-gray-200"
    }`;

  const navLinks = (
    <>
      <TransitionLink
        to="/"
        onBeforeNavigate={handleBeforeNavigate}
        className={getNavLinkClass("/")}
      >
        Profile
      </TransitionLink>
      <TransitionLink
        to="/experience"
        onBeforeNavigate={handleBeforeNavigate}
        className={getNavLinkClass("/experience")}
      >
        Experience
      </TransitionLink>
      <TransitionLink
        to="/portfolio"
        onBeforeNavigate={handleBeforeNavigate}
        className={getNavLinkClass("/portfolio")}
      >
        Portfolio
      </TransitionLink>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-800">
                Terachot K.
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute left-0 w-full bg-white shadow-md md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">{navLinks}</div>
          </div>
        )}
      </header>
      <main className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <CatSlideTransition duration={duration} isExiting={isExiting}>
              <Outlet />
            </CatSlideTransition>
        </div>
      </main>
    </div>
  );
};