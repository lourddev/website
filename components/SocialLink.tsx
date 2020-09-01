import react from "react";
import styled from "@emotion/styled";

type IconProps = {
  icon: string;
};

type SocialLinkProps = {
  link: string;
  icon: "discord" | "twitter";
};

const Icon = styled.div<IconProps>`
  background-image: url("/svg/${(props) => props.icon}.svg");
  width: 64px;
  height: 64px;
`;

const SocialLink = ({ link, icon }: SocialLinkProps) => {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <Icon icon={icon} />
    </a>
  );
};

export default SocialLink;
