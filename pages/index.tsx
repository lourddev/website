import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { space, width } from "styled-system";

import { SITE_NAME } from "../next-seo.config";
import Logo from "../components/Logo";
import SocialLink from "../components/SocialLink";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #141213;
  font-family: "Work Sans", sans-serif;
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
    <Content width={[1 / 2, 1]}>
      <Logo height={"300px"} />
      <Title>lourd</Title>
      <Description mb={5} mx={10}>
        Twitch Extensions &amp; Bots • Streaming &amp; Interactivity tools
      </Description>
      <CallToAction className="shake" href="mailto:hello@lourd.dev" mb={5}>
        Work with us!
      </CallToAction>
      <Links>
        <SocialLink icon="discord" link="https://invite.gg/lourd" />
        <SocialLink icon="twitter" link="https://twitter.com/lourddev" />
        <SocialLink icon="globe" link="https://status.lourd.dev" />
      </Links>
    </Content>
  </Wrapper>
);

export default Home;
