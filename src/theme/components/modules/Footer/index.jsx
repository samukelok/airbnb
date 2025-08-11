import { ModuleFields, TextField } from "@hubspot/cms-components/fields";
import footerStyles from "../../../styles/css/main.module.css";

export function Component({ fieldValues }) {
    return (
        <footer>
            <div className={footerStyles["footer-content"]}>
                <div className={footerStyles["footer-column"]}>
                    <h3>Support</h3>
                    <ul>
                        <li>Help Center</li>
                        <li>AirCover</li>
                        <li>Anti-discrimination</li>
                        <li>Disability support</li>
                        <li>Cancellation options</li>
                        <li>Report neighborhood concern</li>
                    </ul>
                </div>
                <div className={footerStyles["footer-column"]}>
                    <h3>Hosting</h3>
                    <ul>
                        <li>Airbnb your home</li>
                        <li>AirCover for Hosts</li>
                        <li>Hosting resources</li>
                        <li>Community forum</li>
                        <li>Hosting responsibly</li>
                    </ul>
                </div>
                <div className={footerStyles["footer-column"]}>
                    <h3>Airbnb</h3>
                    <ul>
                        <li>Newsroom</li>
                        <li>New features</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Gift cards</li>
                    </ul>
                </div>
                <div className={footerStyles["footer-column"]}>
                    <h3>Community</h3>
                    <ul>
                        <li>Airbnb.org: disaster relief housing</li>
                        <li>Combating discrimination</li>
                    </ul>
                </div>
            </div>
            <div className={footerStyles.copyright} id="copyright">
                <div className={footerStyles["copyright-links"]}>
                    <span>© 2025 {fieldValues.logoText}</span>
                    <span>Terms</span>
                    <span>Sitemap</span>
                    <span>Privacy</span>
                    <span>Your Privacy Choices</span>
                </div>
                <div className="social-icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </footer>
    );
}

export const fields = (
    <ModuleFields>
        <TextField name="logoText" label="Logo Text" default="Airbnb, Inc." />
    </ModuleFields>
)

export const meta = {
    label: "Footer",
}