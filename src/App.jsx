import { useRef } from 'react';
import ChangeThemeButton from './components/ChangeThemeButton';
import MainHeader from './components/MainHeader';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';

function App() {
  const toast = useRef(null);
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "pt";
  const items = [
    {
      label: "Linkedin",
      icon: "pi pi-linkedin",
      command: () => {
        window.open("https://www.linkedin.com/in/luanmasson/", "_blank");
      },
    },
    {
      label: "Github",
      icon: "pi pi-github",
      command: () => {
        window.open("https://github.com/Luan-Masson", "_blank");
      },
    },
    {
      label: "Instagram",
      icon: "pi pi-instagram",
      command: () => {
        window.open("https://www.instagram.com/masson.z/", "_blank");
      },
    },
    {
      label: "Email",
      icon: "pi pi-envelope",
      command: () => {
        navigator.clipboard.writeText("luan0masson@gmail.com");
        toast.current.show({
          severity: "info",
          summary: selectedLanguage === "pt" ? "Copiado" : "Copied",
          detail:
            selectedLanguage === "pt"
              ? "E-mail copiado para a área de transferência"
              : "Email copied to clipboard",
          life: 3000,
        });
      },
    },
  ];

  return (
    <>
      <header className="flex justify-between sticky mt-3">
        <div>
          <Toast ref={toast} position="top-right" />
          <Tooltip target=".mySpeedDial .p-speeddial-action" />
          <SpeedDial
            model={items}
            buttonClassName="p-button-outlined shadow-lg shadow-blue-500 p-button p-component p-button-icon-only p-button-raised p-button-text p-button-rounded p-button-secondary"
            buttonStyle={{ height: "2.857rem", width: "2.857rem" }}
            direction="down"
            showIcon="pi pi-comments" hideIcon="pi pi-comments"
            className="mySpeedDial"
            tooltipOptions="{ position: 'right' }"
          />
        </div>
        <MainHeader />
        <ChangeThemeButton />
      </header>
    </>
  );
}

export default App;
