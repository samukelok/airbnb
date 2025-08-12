import React, { useState } from "react";
import filterStyles from "../../styles/css/main.module.css";

export default function FiltersIsland({ fieldValues }) {
  const filters = [
    { key: "filters", iconClass: "fas fa-sliders-h", label: "Filters" },
    { key: "great-groups", iconClass: "fas fa-medal", label: "Great for groups" },
    { key: "amazing-views", iconClass: "fas fa-mountain", label: "Amazing views" },
    { key: "beachfront", iconClass: "fas fa-umbrella-beach", label: "Beachfront" },
    { key: "winter", iconClass: "fas fa-snowflake", label: "Winter" },
    { key: "amazing-pools", iconClass: "fas fa-swimmer", label: "Amazing pools" },
    { key: "tiny-homes", iconClass: "fas fa-home", label: "Tiny homes" },
    { key: "treehouses", iconClass: "fas fa-tree", label: "Treehouses" },
    { key: "camping", iconClass: "fas fa-campground", label: "Camping" },
    { key: "lakefront", iconClass: "fas fa-water", label: "Lakefront" },
  ];

  // Track which filter is active (null = none)
  const [activeFilter, setActiveFilter] = useState("great-groups");
  // Track buttons scaling animation by key
  const [clickedFilter, setClickedFilter] = useState(null);

  function handleFilterClick(key) {
    if (key === "filters") {
      // Handle Filters button click differently
      console.log("Opening filters modal...");
      return;
    }

    // Set active filter (only one active)
    setActiveFilter(key);

    // Trigger scale animation for 100ms
    setClickedFilter(key);
    setTimeout(() => {
      setClickedFilter(null);
    }, 100);
  }

  return (
    <>
      {/* Filters */}
      <div className={filterStyles["filters-container"]}>
        <div className={filterStyles.filters}>
          {filters.map(({ key, iconClass, label }) => {
            const isActive = key === activeFilter;
            const isClicked = key === clickedFilter;

            return (
              <button
                key={key}
                className={`${filterStyles["filter-btn"]} ${
                  isActive ? filterStyles.active : ""
                }`}
                data-filter={key}
                type="button"
                onClick={() => handleFilterClick(key)}
                style={{
                  transform: isClicked ? "scale(0.95)" : undefined,
                  transition: "transform 100ms ease",
                }}
                aria-pressed={isActive}
                aria-label={label + (isActive ? " (active)" : "")}
              >
                <i className={iconClass}></i>
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
