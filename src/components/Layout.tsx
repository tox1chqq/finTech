import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ILayout {
  children?: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <nav className="flex justify-between p-10 bg-sky-900">
        <ul>
          <li className="text-white text-lg font-semibold cursor-pointer">
            <Link to="/">Converter</Link>
          </li>
        </ul>
        <h1 className="text-white text-4xl font-semibold">FinTech</h1>
        <ul>
          <li className="text-white text-lg font-semibold cursor-pointer">
            <Link to="/list">List</Link>
          </li>
        </ul>
      </nav>
      <div className="min-h-full">{children}</div>
    </div>
  );
};
