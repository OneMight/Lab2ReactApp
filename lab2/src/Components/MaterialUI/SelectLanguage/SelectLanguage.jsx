import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
export default function SelectAutoWidth() {
  const [lang,SetLang] = React.useState('');
  const {i18n } = useTranslation();
  const changelanguage = (language) => {

    i18n.changeLanguage(language);
  };
  const handleChange = (event) => {
    SetLang(event.target.value);
  };




  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={lang}
          defaultValue='en'
          onChange={handleChange}
          autoWidth
          label="Language"
        >
         
          <MenuItem selected={() => changelanguage('en')} Select value={'en'}>EN</MenuItem>
          <MenuItem selected={() => changelanguage('ru')} value={'ru'}>RU</MenuItem>
         
        </Select>
      </FormControl>
    </div>
  );
}