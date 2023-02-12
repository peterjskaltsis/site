import Head from "next/head";
import {
  Spacer,
  Stack,
  Text,
  Unspaced,
  useIsomorphicLayoutEffect,
  useTheme,
} from "@tamagui/core";
import { useThemeSetting } from "@tamagui/next-theme";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const themeSetting = useThemeSetting()!;
  const theme = useTheme();

  // Required to avoid SSR hydration mismatch issues.
  const [clientTheme, setClientTheme] = useState<string>("light");
  useIsomorphicLayoutEffect(() => {
    setClientTheme(themeSetting.current || "light");
  }, [themeSetting.current]);

  return (
    <>
      <Head>
        <title>Peter Skaltsis</title>
        <meta name="theme-color" content={theme.background.val} />
        <meta
          name="description"
          content="Designer and engineer, crafting early-state products. Based in Melbourne, Australia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="Peter Skaltsis" />
        <meta property="og:title" content="Peter Skaltsis" />
        <meta
          property="og:description"
          content="Designer and engineer, crafting early-state products. Based in Melbourne, Australia."
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="" /> */}
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_images/1610955455232372736/JDb8eLPt_400x400.jpg"
        />

        <meta name="twitter:site" content="@peterjskaltsis" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Peter Skaltsis" />
        <meta name="twitter:creator" content="@individual_account" />
        <meta
          name="twitter:description"
          content="Designer and engineer, crafting early-state products. Based in Melbourne, Australia."
        />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/1610955455232372736/JDb8eLPt_400x400.jpg"
        />
        <link rel="author" href="Peter Skaltsis" />
      </Head>
      <Stack
        padding="$6"
        paddingVertical="$14"
        space="$6"
        maxWidth="60rem"
        $sm={{ maxWidth: "100%", padding: "$4", paddingVertical: "$4" }}
        mx="auto"
      >
        <Stack space="$6">
          <Text fontFamily="$body" color="$color">
            Peter Skaltsis
            <br />
            Based in Melbourne, Australia.
          </Text>

          <Unspaced>
            <br />
          </Unspaced>

          <Text fontFamily="$body" color="$color">
            I’m a designer and engineer, currently crafting innovative consumer
            products in the personal finance space at{" "}
            <Link href={"#"}>Finder Ventures</Link>.
          </Text>
          <Text fontFamily="$body" color="$color">
            I joined <Link href={"#"}>Finder</Link> in 2020 as a Software
            Engineer, after being discovered through{" "}
            <Link href={"#"}>this side project</Link>. In 2021, I began working
            as the Creative Architect in the Ventures team, where I led the
            design and frontend build of the Wallet features of the{" "}
            <Link href={"#"}>Finder App</Link> and contributed to shaping
            potential future visions for the company.
          </Text>
          <Text fontFamily="$body" color="$color">
            Previously, I spent over 5 years as a successful freelancer,
            developing my expertise in both design and engineering while
            creating distinctive websites and apps, growing new brands and
            communities.
          </Text>

          <Stack flexDirection="row" space="$2.5">
            <Pill
              clientTheme={clientTheme}
              url="https://twitter.com/peterjskaltsis"
            >
              Twitter
            </Pill>
            <Pill
              clientTheme={clientTheme}
              url="mailto:peterjskaltsis@gmail.com"
            >
              Email
            </Pill>
          </Stack>
        </Stack>

        {/* <Stack space="$4" flexDirection="row" alignItems="center"> */}
        {/* <Text
            fontSize="$4"
            fontWeight={600}
            fontFamily="$body"
            color="$color11"
          >
            Last Updated: February 11, 2023
          </Text> */}
        {/* <Stack height={1} flex={1} backgroundColor="$borderColorHover" /> */}
        {/* <hr
            style={{
              flex: 1,
              backgroundPositionX: "left",
              backgroundPositionY: "center",
              backgroundRepeat: "repeat-x",
              backgroundImage:
                "url(https://imgs.so/assets/sep-26222755ca614bbb3dca9ef0d43d209c7cc5779259fb7b516d7a70cf812e085c.svg)",
              display: "block",
              border: "none",
              height: 5,
              margin: 0,
              opacity: 0.15,
            }}
          /> */}
        {/* </Stack> */}

        {/* <Stack space="$3" flexDirection="row">
          <Card />

          <Card />
          <Card />
        </Stack> */}

        <Stack
          height={1}
          flex={1}
          borderBottomColor="$borderColorHover"
          borderBottomWidth="$0.5"
          borderBottomStyle="dashed"
        />

        <Stack
          flexDirection="row"
          justifyContent="space-between"
          $sm={{
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Text
            fontSize="$3"
            fontFamily="$body"
            color="$color12"
            lineHeight={24}
          >
            The work and design of this site are protected by{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.infrastructure.gov.au/media-communications-arts/copyright/copyright-basics"
            >
              copyright
            </Link>
            .
          </Text>
          <Text
            fontSize="$3"
            fontFamily="$body"
            color="$color12"
            lineHeight={24}
          >
            Last updated February 11, 2023.
          </Text>
        </Stack>
      </Stack>
      <Stack
        cursor="pointer"
        position="absolute"
        top={0}
        right={8}
        animation="quick"
        pressStyle={{ scale: 0.9 }}
        onPress={() =>
          clientTheme === "dark"
            ? themeSetting.set("light")
            : themeSetting.set("dark")
        }
      >
        <Text fontFamily="$body" userSelect="none">
          {clientTheme === "dark" && "Ⓓ"}
          {clientTheme === "light" && "Ⓛ"}
          {clientTheme === "system" && "Ⓢ"}
        </Text>
      </Stack>
    </>
  );
}

const Card = () => (
  <Stack
    tag="card"
    flex={1}
    padding="$6"
    borderRadius="$8"
    backgroundColor="$color3"
    borderWidth="$1"
    borderColor="$color4"
    alignItems="center"
  >
    <Stack
      width="$4"
      height="$4"
      borderRadius="$6"
      backgroundColor="$color3"
      borderWidth="$1"
      borderColor="$color4"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontFamily="$body">F</Text>
    </Stack>
  </Stack>
);

const Pill = ({ clientTheme, children, url }: any) => (
  <Link href={url} target="_blank" style={{ textDecoration: "none" }}>
    <Stack
      padding="$1.5"
      paddingHorizontal="$3"
      borderRadius="$10"
      backgroundColor={clientTheme === "light" ? "$color2" : "$color4"}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      animation="bouncy"
      cursor="pointer"
      hoverStyle={{
        scale: 0.975,
      }}
      pressStyle={{
        scale: 0.95,
      }}
      userSelect="none"
      // space={1}
    >
      <Text
        fontFamily="$body"
        color="$color"
        marginRight="$1.5"
        underline="none"
      >
        {children}
      </Text>
      <Text fontFamily="$body" color="$color11">
        ↗
      </Text>
    </Stack>
  </Link>
);
