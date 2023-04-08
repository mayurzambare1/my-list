import { Button, Input, Link, createTheme } from "@nextui-org/react";
import React, { useState } from "react";
import { Navbar, Text } from "@nextui-org/react";

const collapseItems = ["Features", "Product List", "Pricing", "Company"];

export default function Header({ Search, setSearch }: any) {
  return (
    <>
      {" "}
      <Navbar variant={"sticky"}>
        <Navbar.Brand>
          <svg
            className=""
            fill="none"
            height="36"
            viewBox="0 0 32 32"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <Text b color="inherit" hideIn="xs">
            Mayur Zambare
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          activeColor={"success"}
          hideIn="xs"
          // variant={"highlight"}
        >
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">
            Product List
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              aria-label="search"
              clearable
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
              contentLeft={
                <svg fill="none" height={16} viewBox="0 0 24 24" width={16}>
                  <path
                    d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
                    stroke={"var(--nextui-colors-accents6)"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
        </Navbar.Content>

        <Navbar.Toggle showIn="xs" />
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="success"
              css={{
                background: "none",
                backdropFilter: "none",
              }}
              isActive={index === 1}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
