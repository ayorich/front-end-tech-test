interface AccordionItemProps {
  title: string;
  content: string;
  icon: any;
  id: number;
  onClick: (id: number) => void;
  active: boolean;
}

export default AccordionItemProps;
