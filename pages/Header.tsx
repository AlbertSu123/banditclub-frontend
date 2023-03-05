import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styled from "styled-components";

const StyledHeader = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #ffffff;
    color: #000;
    p {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    a {
      color: #000;
      text-decoration: none;
      margin: 0 1rem;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className={"header"}>
        <p>Bandit Club</p>
        <a href={"/Dashboard"}>Home</a>
        <a
          href={
            "https://eth-goerli.gateway.pokt.network/v1/lb/6d4de156cc643d8f15d5620b"
          }
          onClick={() => {
            navigator.clipboard.writeText(
              "https://eth-goerli.gateway.pokt.network/v1/lb/6d4de156cc643d8f15d5620b"
            );
          }}
        >
          Click here to get an RPC!
        </a>
        <ConnectButton />
      </div>
    </StyledHeader>
  );
}

export default Header;
