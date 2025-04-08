import { useEffect, useState } from 'react';
import { SelectButton } from 'primereact/selectbutton';
import { getIconUrl } from '../utils/AssetsUtils';
import { useLanguage } from '../contexts/LanguageContext';
import PropTypes from 'prop-types';

MainHeader.propTypes = {
  className: PropTypes.string,
};

export default function MainHeader({ className }) {
  const [langValue, setLangValue] = useState(null);
  const { setActualLang } = useLanguage();

  const options = [
    { img: getIconUrl("br-flag"), value: "pt" },
    { img: getIconUrl("us-flag"), value: "en" },
  ];

  useEffect(() => {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "pt")
    }
    const selectedLanguage = localStorage.getItem("lang");
    setLangValue(selectedLanguage);
    if(selectedLanguage !== "pt") {
      setActualLang("en-us");
    }
  }, []);

  const setLang = (value) => {
    localStorage.setItem("lang", value);
    setLangValue(value);
    setActualLang(value === "pt" ? "pt-br" : "en-us");
  }

  const flagsTemplate = (option) => {
    return <img className='w-6' src={option.img} alt={option.value} />;
  }
  const classNames = `p-6 rounded-full w-max gap-6 flex items-center justify-center h-[3rem] shadow-lg shadow-blue-500 bg-(--primary-color-text) ${className ? className : ""}`;

  return (
    <>
      <div className={classNames}>
        <h1 className="text-2xl drop-shadow-md w-max h-max">Luan Masson</h1>
        <SelectButton value={langValue} onChange={(e) => setLang(e.value)} itemTemplate={flagsTemplate} optionLabel="value" options={options} pt={{ button: className = "px-2 py-1" }} />
      </div>
    </>
  );
}
