import React from "react";
import FiltryStyle from "./FiltryStyle";
import {MenuItem, Select} from "@mui/material";

export default function SortOptions(props){
    const styles = FiltryStyle();
    const [filtry] = React.useState([
        "dataDodania",
        "ocena"
    ]);

    return(
        <Select className={styles.menu}
                size={"small"}>
            {filtry.map(filtr =>
                <MenuItem
                    className={styles.menuOption}
                    key = {filtry.indexOf(filtr)}
                    value = {filtr}>{filtr}
                </MenuItem>
            )}
        </Select>
    )
}
