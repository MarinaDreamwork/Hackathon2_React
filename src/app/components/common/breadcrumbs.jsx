import React from "react";
import { useLocation, Link } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return (
      <div className="breadCrumbBlock">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {pathnames.length > 0 ? (
              <li className="breadcrumb-item no-last">
                <Link to="/">Главная</Link>
              </li>
            ) : (
              <li className="breadcrumb-item">Главная</li>
            )}
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return isLast ? (
                <li key={index} className="breadcrumb-item">{capatilize(name)}</li>
              ) : (
                <li key={index} className="breadcrumb-item no-last">
                  <Link to={`${routeTo}`}>{capatilize(name)}</Link>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
};

export default BreadCrumb;
