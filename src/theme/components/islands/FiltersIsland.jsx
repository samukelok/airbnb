import React, { useState } from "react";
import filterStyles from "../../styles/css/main.module.css";

export default function FiltersIsland({ fieldValues }) {
  const categories = [
    { key: "amazing-views", icon: "🏔️", label: "Amazing views" },
    { key: "tiny-homes", icon: "🏠", label: "Tiny homes" },
    { key: "cabins", icon: "🏕️", label: "Cabins" },
    { key: "trending", icon: "🔥", label: "Trending" },
    { key: "play", icon: "🎮", label: "Play" },
    { key: "city", icon: "🏙️", label: "City" },
    { key: "beachfront", icon: "🏖️", label: "Beachfront" },
    { key: "countryside", icon: "🌾", label: "Countryside" },
    { key: "luxe", icon: "💎", label: "Luxe" },
    { key: "treehouses", icon: "🌳", label: "Treehouses" },
    { key: "camping", icon: "⛺", label: "Camping" },
    { key: "lakefront", icon: "🌊", label: "Lakefront" },
    { key: "ski-in-out", icon: "🎿", label: "Ski-in/out" },
    { key: "castles", icon: "🏰", label: "Castles" },
    { key: "islands", icon: "🏝️", label: "Islands" },
  ];

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
      {/* Categories */}
      <div className={filterStyles["categories-container"]}>
        <button
          className={`${filterStyles["category-scroll-button"]} ${filterStyles.left}`}
          id="categoriesLeft"
          type="button"
          aria-label="Scroll categories left"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className={filterStyles.categories} id="categories">
          {categories.map(({ key, icon, label }, i) => (
            <div
              key={key}
              className={`${filterStyles["category-item"]} ${
                i === 0 ? filterStyles.active : ""
              }`}
              data-category={key}
            >
              <div className={filterStyles["category-icon"]}>{icon}</div>
              <div className={filterStyles["category-name"]}>{label}</div>
            </div>
          ))}
        </div>
        <button
          className={`${filterStyles["category-scroll-button"]} ${filterStyles.right}`}
          id="categoriesRight"
          type="button"
          aria-label="Scroll categories right"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

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
