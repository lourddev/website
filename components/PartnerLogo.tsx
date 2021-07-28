import styled from "@emotion/styled";

type PartnerLogoProps = {
  link: string;
  logo: string;
};

const Logo = styled.img`
  max-width: 128px;
`;

const PartnerLogo = ({ link, logo }: PartnerLogoProps) => {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <Logo src={`/partners/${logo}.png`} />
    </a>
  );
};

export default PartnerLogo;
