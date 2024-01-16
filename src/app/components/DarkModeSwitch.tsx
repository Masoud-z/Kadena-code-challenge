"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { json } from "stream/consumers";

type ColorMode = "light" | "dark";

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [test, setTest] = useState("");
  const { setTheme, theme } = useTheme();

  const data = { test: test };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-8 h-8"></div>;

  return (
    <>
      {theme === "dark" ? (
        <FiSun
          onClick={() => setTheme("light")}
          className="hover:cursor-pointer"
        />
      ) : (
        <FiMoon
          onClick={() => setTheme("dark")}
          className="hover:cursor-pointer"
        />
      )}
    </>
  );
};

export default DarkModeSwitch;
