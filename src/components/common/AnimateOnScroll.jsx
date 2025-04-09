import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';


//Valida se o usuario está vendo o componente antes de renderiza-lo aplicando efeito somente quando visto.
export default function AnimateOnScroll({ children, animationClass = "fade-in-up", className = "" }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  //valida visualização do cliente e depois desconecta o observer.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    //ativa o componente com nome ref.
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {isVisible && (
        <div className={`animate ${animationClass}`}>
          {children}
        </div>
      )}
    </div>
  );
}


AnimateOnScroll.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.node,
    animationClass: PropTypes.node
};