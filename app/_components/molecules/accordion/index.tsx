'use client';

import { FC, useState } from 'react';
import AccordionProps from './types';
import AccordionItem from '../accordionItem';

const Accordion: FC<AccordionProps> = ({}) => {
  const [active, setActive] = useState(-1);

  const handler = (id: number) => {
    if (active === id) {
      setActive(-1);
    } else {
      setActive(id);
    }
  };
  return (
    <div>
      <AccordionItem
        title="Profitability and Growth"
        content={`At Creon, we handpick cutting-edge AI projects and offer our community
      and token holders early access and investment opportunities. Our
      community actively contributes to the growth and profitability of
      these projects, creating a dynamic ecosystem of innovation and shared
      success.
      `}
        icon="profit.svg"
        active={active === 1}
        id={1}
        onClick={handler}
      />

      <AccordionItem
        title="Transparent & Fair Decentralized Earnings"
        content={`At Creon, we handpick cutting-edge AI projects and offer our community
      and token holders early access and investment opportunities. Our
      community actively contributes to the growth and profitability of
      these projects, creating a dynamic ecosystem of innovation and shared
      success.
      `}
        icon="transp.svg"
        active={active === 2}
        id={2}
        onClick={handler}
      />
      <AccordionItem
        title="Launching the future"
        content={`At Creon, we handpick cutting-edge AI projects and offer our community
      and token holders early access and investment opportunities. Our
      community actively contributes to the growth and profitability of
      these projects, creating a dynamic ecosystem of innovation and shared
      success.
      `}
        icon="launch.svg"
        active={active === 3}
        id={3}
        onClick={handler}
      />
      <AccordionItem
        title="Limitless Possibilities of AI & Crypto"
        content={`At Creon, we handpick cutting-edge AI projects and offer our community
      and token holders early access and investment opportunities. Our
      community actively contributes to the growth and profitability of
      these projects, creating a dynamic ecosystem of innovation and shared
      success.
      `}
        icon="limitless.svg"
        active={active === 4}
        id={4}
        onClick={handler}
      />
    </div>
  );
};

export default Accordion;
