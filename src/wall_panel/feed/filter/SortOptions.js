import React from "react";
import FiltryStyle from "./FiltryStyle";
import {MenuItem, Select} from "@mui/material";

export default function SortOptions(props){
    const styles = FiltryStyle();

    const {filtr} = props;
    const [filtry] = React.useState([
        "dataDodania",
        "ocena"
    ]);

    const [etykiety] = React.useState([
        "Data dodania",
        "Ocena"
    ])

    return(
        <div className={styles.label}>
            Sortuj według:
        <Select className={styles.menu}
                size={"small"}
                value={filtr}
                onChange={props.onChange}>
            {filtry.map(filtr =>
                <MenuItem
                    className={styles.menuOption}
                    key = {filtry.indexOf(filtr)}
                    value = {filtr}>{etykiety[filtry.indexOf(filtr)]}
                </MenuItem>
            )}
        </Select>
        </div>
    )
}
