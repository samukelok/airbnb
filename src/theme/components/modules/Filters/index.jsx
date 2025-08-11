import { ModuleFields } from "@hubspot/cms-components/fields";
import {Island} from "@hubspot/cms-components";
import FiltersIsland from "../../islands/FiltersIsland?island"; 

export function Component({ fieldValues }) {
  return (
    <Island module={FiltersIsland} fieldValues={fieldValues} />
  );
}

export const fields = (
  <ModuleFields>
    {/* Im leaving this empty for now */}
  </ModuleFields>
);

export const meta = {
  label: "Filters",
};
