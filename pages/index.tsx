import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { space, width } from "styled-system";
import { NextSeo } from "next-seo";

import { SITE_NAME, SITE_DESCRIPTION, ROOT_URL } from "../next-seo.config";
import Logo from "../components/Logo";
import SocialLink from "../components/SocialLink";
import PartnerLogo from "../components/PartnerLogo";
import PartnerSVGLogo from "../components/PartnerSVGLogo";

const Wrapper = styled.div`
  ${space}
  display: flex;
  justify-content: center;
  background-color: #141213;
  font-family: "Work Sans", sans-serif;
  overflow: hidden;
`;

const Content = styled.div`
  ${space}
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
  <Wrapper p={10}>
    <Head>
      <title>{SITE_NAME}</title>
    </Head>
    <NextSeo canonical={ROOT_URL} openGraph={{ url: ROOT_URL }} />
    <Content width={[1 / 2, 1]} mt={20}>
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
          <PartnerSVGLogo link="https://superbien.studio/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="113"
              height="33"
              viewBox="0 -10 143 43"
              fill="white"
            >
              <path d="M5.8 13.2c-2.2.6-2.9-1.8.1-2.8 1.5-.1 1.5 1.1 1.5 1.1s1.3-.4 2.8-.8c-.5-1.6-1.8-3.3-4.9-2.8-5 2.7-5.8 5.9-5.2 7.6.6 1.7 2.8 1.9 5.7.8 2.8-1.1 2.5 1.1 1.2 1.9-2 1.1-2.1-.6-2.1-.6l-3.7 2.8c1 3.5 5 1 6.6-.1 1.6-1.1 4.4-2.9 4-5.4-.3-2.4-3.8-2.4-6-1.7M24.8 3.8l-3.6 1-.4 4.8c.4 2.4.8 5 .9 5.6.2 1.2-.3 2.1-1.1 2.2-.8.1-2.6-1.5-3.4-4.9l.6-6.7L14 6.9s-.5 7.3-.3 8.3c1.5 4 4.2 7.4 8.9 8.1 5.2.8 3.7-6.6 3.7-6.6L24.7 6.5l.1-2.7zM30 2.3l-3.3.9 4 23.4 5.1 1.9-1.2-7.1s1 .5 3.2 1.2c3.7.9 5.1-.9 5.1-5 0-4-2.6-8.6-4.4-10.6-1.8-1.9-4.3-3.6-8.5-4.7m5.8 14.4c-1-.3-2.1-1-2.1-1l-1.4-7.2c3.5.9 4.4 2.8 5.1 5.6.7 3-.7 3-1.6 2.6M50.9 26.7L49.8 22l5.4-.9-1-5.1-5.1.6-.9-5 5.2-.4-1.1-5.6-9.4.7L47.8 33l8.8-3.5-.7-4.4zM69.1 10.9c-1.2-4.7-3.3-6.3-7.9-6.1-4.8.2-6.2.4-6.2.4l3.7 23.4 4.3-1.7-1-5.3 1-.3 3.2 4.3 5.2-2.1-3.8-4.7c0 .1 2.8-3.1 1.5-7.9M64.2 16c-.6.6-2.5 1-2.5 1l-1-6.2s.3-.3 1.5-.4c1.2-.1 2.3.5 2.6 2.2.4 1.7 0 2.9-.6 3.4M83.2 3.4l5.4 20.1 3.6.8-5.5-19.8zM95.8 20.1l-.9-3.2 3.4 1-1.1-3.8-3.4-1.1-.9-3 3.4 1.1-1.1-4-6.6-2 5.6 19.6 6.6 1.5-1.5-5.1z"></path>
              <path d="M97.4 7.8l5 18.7 2.8.6-3.1-10.8 2.7 4.2 4.4 6 3.8-1.7-5.5-18.1-3.7 1.6 3 10.3-4.6-6.3-2-3.6zM81.4 12.1c2.9-.1 1.1-8.9-4.2-10.6C73.9.5 72.3 0 72.3 0l-3.1 2.3L74 22.6l3.8-1.5 4.3.9c4 1 5.4-4.8-.7-9.9m-6.8-7.7s.7.1 1.9.7c2.7 1.6 2.2 4.1 1 3.8l-1.8-.6-1.1-3.9zm5.1 12.9c-.6-.2-.6-.2-2-.6l-1-4.3s.7.2 1.6.5c2.3 1 3.2 4.8 1.4 4.4"></path>
            </svg>
          </PartnerSVGLogo>
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
