import {ModuleFields, NumberField} from "@hubspot/cms-components/fields";
import {Island} from "@hubspot/cms-components";
import ExampleIsland from "../../islands/ExampleIsland?island"; //'?island' is important
// import styles from "../../../styles/listings.module.css"; //'module.css is important

export function Component ({fieldValues}) {
    return (
        <Island module={ExampleIsland} fieldValues={fieldValues} />
    );
}

export const fields = (
    <ModuleFields>
        <NumberField name="num1" label="number 1" default="1" />
        <NumberField name="num2" label="number 2" default="1" />
    </ModuleFields>
);

export const meta = {
    label: "Listings Modulaaa",
}