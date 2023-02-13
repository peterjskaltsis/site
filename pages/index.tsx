import Head from "next/head";
import {
  Spacer,
  Stack,
  Text,
  Unspaced,
  useIsomorphicLayoutEffect,
  useTheme,
} from "@tamagui/core";
import useSWR from "swr";
import { useThemeSetting } from "@tamagui/next-theme";
import Link from "next/link";
import { useState } from "react";
import { fetcher } from "@/misc/fetcher";
import { format, parseISO } from "date-fns";

export default function Home() {
  const themeSetting = useThemeSetting()!;
  const theme = useTheme();

  // Required to avoid SSR hydration mismatch issues.
  const [clientTheme, setClientTheme] = useState<string>("light");
  useIsomorphicLayoutEffect(() => {
    setClientTheme(themeSetting.current || "light");
  }, [themeSetting.current]);

  const { data, error, isLoading } = useSWR("/api/commit", fetcher);
  const date = data?.date ? parseISO(data?.date) : undefined;

  return (
    <>
      <Head>
        <title>Peter Skaltsis</title>
        <meta name="theme-color" content={theme.background.val} />
        <meta
          name="description"
          content="Creative Architect. Designer and engineer, crafting early-stage products. Based in Melbourne, Australia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="Peter Skaltsis" />
        <meta property="og:title" content="Peter Skaltsis" />
        <meta
          property="og:description"
          content="Creative Architect. Designer and engineer, crafting early-stage products. Based in Melbourne, Australia."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://site-peter-s1.vercel.app/JDb8eLPt_400x400.jpeg"
        />

        <meta name="twitter:site" content="@peterjskaltsis" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Peter Skaltsis" />
        <meta name="twitter:creator" content="@individual_account" />
        <meta
          name="twitter:description"
          content="Creative Architect. Designer and engineer, crafting early-stage products. Based in Melbourne, Australia."
        />
        <meta
          name="twitter:image"
          content="https://site-peter-s1.vercel.app/JDb8eLPt_400x400.jpeg"
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
            Peter Skaltsis <br /> Based in Melbourne, Australia.
          </Text>

          <Unspaced>
            <Spacer />
            <Spacer />
          </Unspaced>

          <Text fontFamily="$body" color="$color">
            I’m a designer and engineer, currently crafting innovative consumer
            products in the personal finance space and shaping potential future
            visions at{" "}
            <Link target="_blank" href="https://www.finderventures.com/">
              Finder Ventures
            </Link>
            .
          </Text>

          <Text fontFamily="$body" color="$color">
            I joined <Link href="https://twitter.com/findercomau">Finder</Link>{" "}
            in 2020 (via{" "}
            <Link
              target="_blank"
              href="https://twitter.com/peterjskaltsis/status/1290186815144525824?s=20"
            >
              a tweet
            </Link>
            ), where I led the design and build of Finder’s wallet in their{" "}
            <Link
              target="_blank"
              href="https://apps.apple.com/au/app/finder-money-finance-manager/id1497239072"
            >
              app
            </Link>
            . Following this, I redesigned the app and led the build of a design
            system now used across most of the company.
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
            <Pill
              clientTheme={clientTheme}
              url="https://github.com/peterjskaltsis"
            >
              Github
            </Pill>
            {/* <Pill
              clientTheme={clientTheme}
              url="https://read.cv/peterjskaltsis"
            >
              Resume
            </Pill> */}
          </Stack>
        </Stack>

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
          {date ? (
            <Text
              fontSize="$3"
              fontFamily="$body"
              color="$color12"
              lineHeight={24}
            >
              Last commit{" "}
              <Link
                target="_blank"
                href={`https://github.com/peterjskaltsis/site/commit/${data?.hash}`}
              >
                {format(date, "LLLL d, yyyy")}
              </Link>
              .
            </Text>
          ) : null}
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
      <Spacer />
    </>
  );
}

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
