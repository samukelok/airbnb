import { ModuleFields, TextField, ImageField } from "@hubspot/cms-components/fields";
import headerStyles from "../../../styles/css/main.module.css";
import defaultLogo from "../../../assets/img/logo.png";

export function Component({ fieldValues }) {
  return (
    <header id="mainHeader" className={headerStyles.header}>
      <div className={headerStyles.logo}>
        {fieldValues.logoImage && fieldValues.logoImage.src ? (
          <>
            <img src={fieldValues.logoImage.src} alt={fieldValues.logoText || "Logo"} />
            <span>{fieldValues.logoText || "airbnb"}</span>
          </>
        ) : (
          <>
            <img src={defaultLogo} alt="Default Logo" />
            <span>{fieldValues.logoText || "airbnb"}</span>
          </>
        )}
      </div>

      <div className={headerStyles["search-container"]}>
        <div className={headerStyles["search-bar"]} id="searchBar">
          <div className={headerStyles["search-item"]}>Anywhere</div>
          <div className={headerStyles["search-item"]}>Any week</div>
          <div className={`${headerStyles["search-item"]} ${headerStyles["add-guests"]}`}>Add guests</div>
          <div className={headerStyles["search-icon"]}>
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>

      <div className={headerStyles["user-menu"]}>
        <div className={headerStyles["host-link"]}>Become a Host</div>
        <div className={headerStyles["language-selector"]}>
          <i className="fas fa-globe"></i>
        </div>
        <div className={headerStyles["user-actions"]}>
          <div className={headerStyles["menu-icon"]}>
            <i className="fas fa-bars"></i>
            <div className={headerStyles["dropdown-menu"]} id="dropdownMenu">
              <a href="#">Help Center</a>
              <a href="#">Become a host</a>
              <p className={headerStyles["menu-description"]}>
                It's easy to start hosting and earn extra income.
              </p>
              <a href="#">Refer a Host</a>
              <a href="#">Find a co-host</a>
              <a href="#">Log in or sign up</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField name="logoImage" label="Logo Image" />
    <TextField name="logoText" label="Logo Text" default="airbnb" />
  </ModuleFields>
);

export const meta = {
  label: "Header",
};
