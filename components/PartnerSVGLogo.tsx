type PartnerLogoProps = {
  link: string;
  children: JSX.Element;
};

const PartnerLogo = ({ link, children }: PartnerLogoProps) => {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

export default PartnerLogo;
