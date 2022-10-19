import {useState, useContext} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {CustomContext} from "../../../utils/context";
import {useTranslation} from "react-i18next";

function SelectPrice() {

    const {price, setPrice} = useContext(CustomContext)
    const {t} = useTranslation()
    const handleChange = (event) => {
        setPrice(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{t("catalog.price")}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    label={t("catalog.price")}
                    onChange={handleChange}
                >
                    <MenuItem value='asc'>{t("catalog.ascending")}</MenuItem>
                    <MenuItem value='desc'>{t("catalog.descending")}</MenuItem>
                    <MenuItem value=''>{t("catalog.reset")}</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectPrice