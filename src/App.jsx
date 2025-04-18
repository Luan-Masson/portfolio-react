import { useEffect, useRef, useState } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import { useWindowSize } from './hooks/WindowSizeHook';
import { useLanguage } from './contexts/LanguageContext';
import ChangeThemeButton from './components/ChangeThemeButton';
import MainHeader from './components/MainHeader';
import WaveDivider from './components/WaveDivider';
import FirstImpression from './components/FirstImpression';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const toast = useRef(null);
  const { actualLang } = useLanguage();
  const { width } = useWindowSize();
  const [imagesReady, setImagesReady] = useState(false);
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
          summary: actualLang === "pt-br" ? "Copiado" : "Copied",
          detail:
            actualLang === "pt-br"
              ? "E-mail copiado para a área de transferência"
              : "Email copied to clipboard",
          life: 3000,
        });
      },
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setImagesReady(true);
    }, 5000);
  }, []);

  const handleImagesLoaded = () => {
    setImagesReady(true);
  };

  return (
    <>
      <header className="flex w-full justify-between fixed m-3 top-3 z-30">
        <div className='w-[3rem] h-[3rem]'>
          <Toast ref={toast} position="top-right" />
          <Tooltip target=".mySpeedDial .p-speeddial-action" />
          <SpeedDial
            model={items}
            buttonClassName="p-button-outlined shadow-lg shadow-blue-500 p-button p-component p-button-icon-only p-button-raised p-button-text p-button-rounded p-button-secondary bg-(--primary-color-text)"
            buttonStyle={{ height: "2.857rem", width: "2.857rem" }}
            direction="down"
            showIcon="pi pi-comments" hideIcon="pi pi-comments"
            className="mySpeedDial"
          />
        </div>
        {/* Verifica se é width da tela é maior que de um tablet e renderiza dentro do header */}
        {width >= 768 ? <MainHeader /> : null}
        <ChangeThemeButton />
      </header>
      {width < 768 ? <MainHeader className="fixed bottom-3 left-[50%] translate-x-[-50%] z-100" /> : null}
      <FirstImpression />
      <WaveDivider onImagesLoaded={handleImagesLoaded} />
      {/* Deixarei todo o resto aqui dentro para o usuario só conseguir ver caso as waves estiverem carregadas, proporcionando uma melhor experiencia.
      Mas também foi inserida uma lógica que em caso de não carregamento depois de 5s o usuário tbm conseguira ver. */}
      {imagesReady ?
        <>
          <AboutMe />
          <Skills />
          <Projects />
        </>
        : null}
    </>
  );
}

export default App;
