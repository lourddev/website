import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { space, width } from "styled-system";

import { SITE_NAME, SITE_DESCRIPTION, ROOT_URL } from "../next-seo.config";
import Logo from "../components/Logo";
import SocialLink from "../components/SocialLink";
import PartnerLogo from "../components/PartnerLogo";
import { NextSeo } from "next-seo";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #141213;
  font-family: "Work Sans", sans-serif;
  overflow: hidden;
`;

const Content = styled.div`
  ${width}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`;

const Title = styled.h1`
  ${space}
  color: #fff;
  font-weight: 700;
  font-size: 6rem;
`;

const Description = styled.h2`
  ${space}
  color: #fff;
  font-weight: 700;
  text-align: center;
`;

const CallToAction = styled.a`
  ${space}
  ${width}
  display: flex;
  height: 64px;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 8px;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #ff2300;
  background: linear-gradient(37.62deg, #ff5d00 5.85%, #ff0000 75.84%);

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const Home = () => (
  <Wrapper>
    <Head>
      <title>{SITE_NAME}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500;700&amp;display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/csshake/1.5.3/csshake-default.min.css"
      />
    </Head>
    <NextSeo canonical={ROOT_URL} openGraph={{ url: ROOT_URL }} />
    <Content width={[1 / 2, 1]}>
      <Logo height={"300px"} />
      <Title>lourd</Title>
      <Description mb={5} mx={10}>
        {SITE_DESCRIPTION}
      </Description>
      <CallToAction className="shake" href="mailto:hello@lourd.dev" mb={5}>
        Work with us!
      </CallToAction>
      <Description mb={5} mx={10}>
        <p>Top Players</p>
        <Links>
          <PartnerLogo logo="jk" link="https://www.jkgroupe.com/" />
          <PartnerLogo logo="vitality" link="https://vitality.gg/" />
          <PartnerLogo
            logo="rocketbaguette"
            link="https://www.rocketbaguette.com/"
          />
        </Links>
      </Description>
      <Description mb={5} mx={10} px={10}>
        <Links>
          <SocialLink icon="discord" link="https://invite.gg/lourd" />
          <SocialLink icon="twitter" link="https://twitter.com/lourddev" />
          <SocialLink icon="globe" link="https://status.lourd.dev" />
        </Links>
      </Description>
    </Content>
  </Wrapper>
);

export default Home;
