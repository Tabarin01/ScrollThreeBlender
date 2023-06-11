import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">Prova titolo</h1>
          <p className="text-gray-500">Scrolling parallax</p>
          <p className="mt-3">Questo e' un testo</p>
          <ul className="leading-9">
            <li>Sezione 1</li>
          </ul>
          <p className="animate-bounce  mt-6">Scroll down ↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">Overlay</h1>
          <p className="text-gray-500">Scritto in react</p>
          <p className="mt-3">
            <b>Vite-React + JavaScript</b>
          </p>

          <p className="animate-bounce  mt-6">Scroll up or down ↑↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">🤙 Let's go</h1>
          <p className="text-gray-500">
            The future of web- ThreeJS-React-TailwindCss
          </p>
          <p className="animate-bounce  mt-6">Scroll Up ↑</p>
        </Section>
      </div>
    </Scroll>
  );
};
