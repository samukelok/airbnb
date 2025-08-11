import { ModuleFields, RichTextField, TextField } from "@hubspot/cms-components/fields";
import styles from "../../../styles/css/main.module.css"; // CSS module import

export function Component({ fieldValues }) {
    return (
        <div className={styles["hero-section"]} id="heroSection">
            <div className={styles["hero-content"]}>
                <h1>{fieldValues.title || "Not sure where to go? Perfect."}</h1>
                <p>{fieldValues.subtitle || "Find stays for any style of trip"}</p>
                <div className={styles["hero-search"]} id="heroSearch">
                    <div className={styles["hero-search-field"]}>
                        <h3>Where</h3>
                        <p>Search destinations</p>
                    </div>
                    <div className={styles["hero-search-field"]}>
                        <h3>Check in</h3>
                        <p>Add dates</p>
                    </div>
                    <div className={styles["hero-search-field"]}>
                        <h3>Check out</h3>
                        <p>Add dates</p>
                    </div>
                    <div className={styles["hero-search-field"]}>
                        <h3>Who</h3>
                        <p>Add guests</p>
                    </div>
                    <button className={styles["hero-search-button"]}>
                        <i className="fas fa-search"></i>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export const fields = (
    <ModuleFields>
        <TextField name="title" label="Title" default="Not sure where to go? Perfect." />
        <TextField name="subtitle" label="Subtitle" default="Find stays for any style of trip" />
    </ModuleFields>
);

export const meta = {
    label: "Hero Section",
};
