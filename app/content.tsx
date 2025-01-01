'use client';

import { FancyLink } from '@/components/fancy-link';
import { FancyText } from '@/components/fancy-text';
import { FinderLogo } from '@/components/finder-logo';
import { GatherLogo } from '@/components/gather-logo';
import { GitHubLogo } from '@/components/github-logo';
import { LinkedInLogo } from '@/components/linkedin-logo';
import { ScrambleIn } from '@/components/scramble-in';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/tooltip';
import { cn } from '@/lib/utils';
import Monoco from '@monokai/monoco-react';
import { format } from 'date-fns';
import { motion } from 'motion/react';
import type { CommitData } from './actions';

export const TooltipText = ({
  children,
  content,
  className,
}: {
  children: React.ReactNode;
  content: string;
  className?: string;
}) => {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger className={cn('tooltip-trigger', className)}>
        {children}
      </TooltipTrigger>
      <TooltipContent sideOffset={4}>
        <ScrambleIn text={content} />
      </TooltipContent>
    </Tooltip>
  );
};

export const Content = ({ commit }: { commit: CommitData }) => {
  return (
    <TooltipProvider>
      <main className="flex min-h-dvh p-6 justify-center items-center px-4">
        <div className="max-w-lg md:-mt-24 space-y-8">
          <div className="space-y-6 text-foreground/80">
            <div className="font-body space-y-0.5">
              <FancyText
                className="text-xl font-serif"
                texts={['Peter Skal·tsis']}
              />
              {/* <p className="text-muted-foreground text-sm">
              Living in Melbourne, Australia.
            </p> */}
            </div>

            <div className="space-y-4" />

            <p className="font-body">
              Co-Founder of{' '}
              <FancyLink icon={GatherLogo} href="https://gatherwealth.com.au">
                Gather
              </FancyLink>
              , a fintech startup rethinking how you and your money work
              together. Our goal is to design a smarter, more personal way to
              shape and grow wealth.
            </p>

            <p>
              Creative Architect at{' '}
              <FancyLink icon={FinderLogo} href="https://x.com/findercomau">
                Finder
              </FancyLink>{' '}
              over the last 4 years. Redesigned and built their app with{' '}
              <TooltipText content="Personal Finance Management">
                PFM
              </TooltipText>
              , crypto, and wallet features, overhauled key parts of the site
              serving 1M+ monthly visitors, and contributed to their first major
              brand refresh in over a decade.
            </p>

            <p>
              Previously, ran a freelance practice for four years, crafting
              sites for international clients and online communities.
            </p>

            <p>
              Follow{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/peterjskaltsis"
                className="visible-link"
              >
                @peterjskaltsis
              </a>{' '}
              or email{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:peterjskaltsis@gmail.com"
                className="visible-link"
              >
                peterjskaltsis@gmail.com
              </a>{' '}
              to chat.
            </p>
          </div>

          <div className="h-px flex-1 border-b border-border border-dashed my-6" />

          <Monoco
            className="flex gap-3 items-center text-muted-foreground/75"
            borderRadius={14}
            background="none"
            // background={"#FBFBFB"}
          >
            {commit?.date && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mr-auto text-sm"
              >
                Updated{' '}
                <a
                  href={`https://github.com/peterjskaltsis/site/commit/${commit.hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ScrambleIn
                    scrambleSpeed={50}
                    text={format(commit.date, 'LLL d, yyyy')}
                  />
                </a>
              </motion.p>
            )}

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              href="https://github.com/peterjskaltsis"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubLogo className="w-4 h-4 hover:text-muted-foreground transition-all" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="https://www.linkedin.com/in/peterjskaltsis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLogo className="w-4 h-4 hover:text-muted-foreground transition-all" />
            </motion.a>

            {/* <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              href="https://gatherwealth.com.au"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GatherLogo className="w-5 h-5 hover:text-muted-foreground transition-all" />
            </motion.a> */}

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <TooltipText content="Melbourne, Australia">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 21 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="saturate-0 opacity-65 hover:opacity-100 transition-all"
                >
                  <title>Melbourne, Australia</title>
                  <path
                    d="M2 0H19C19.5304 0 20.0391 0.210714 20.4142 0.585787C20.7893 0.96086 21 1.46957 21 2V13C21 13.5304 20.7893 14.0391 20.4142 14.4142C20.0391 14.7893 19.5304 15 19 15H2C1.46957 15 0.960858 14.7893 0.585785 14.4142C0.210712 14.0391 0 13.5304 0 13V2C0 1.46957 0.210712 0.96086 0.585785 0.585787C0.960858 0.210714 1.46957 0 2 0Z"
                    fill="#43458B"
                  />
                  <path
                    d="M0 5.664L3.49799 3.264L3.49899 3.263H3.50101V3.264L8.92599 6.986H7.159L3.5 4.476L0 6.877V5.664ZM9 0.0950003V1.308L5.50101 3.708L5.5 3.709L5.49899 3.708L0.740997 0.444C1.05952 0.183233 1.45131 0.0280582 1.862 0L5.5 2.496L9 0.0950003Z"
                    fill="#F6F9FC"
                  />
                  <path
                    d="M8.909 7L5.25 4.49L1.591 7H0V6.879L5.24799 3.278L5.24899 3.277H5.25101L9 5.85V7H8.909ZM3.75101 3.722L3.74899 3.723L0.14801 1.252C0.276791 0.938135 0.483657 0.662406 0.748993 0.451L3.75 2.51L7.409 0H9V0.121L3.75101 3.722Z"
                    fill="#E25950"
                  />
                  <path
                    d="M9 4.625H5.625V7H3.375V4.625H0V2.375H3.375V0H5.625V2.375H9V4.625Z"
                    fill="#F6F9FC"
                  />
                  <path
                    d="M9 3.998H5V7H4V3.998H0V3.002H4V0H5V3.002H9V3.998Z"
                    fill="#E25950"
                  />
                  <path
                    d="M17.24 6.5C17.0917 6.5 16.9467 6.45601 16.8234 6.3736C16.7 6.29119 16.6039 6.17406 16.5471 6.03701C16.4904 5.89997 16.4755 5.74917 16.5045 5.60368C16.5334 5.4582 16.6048 5.32456 16.7097 5.21967C16.8146 5.11478 16.9482 5.04335 17.0937 5.01441C17.2392 4.98547 17.39 5.00033 17.527 5.05709C17.6641 5.11386 17.7812 5.20999 17.8637 5.33332C17.9461 5.45666 17.99 5.60166 17.99 5.75C17.99 5.94891 17.911 6.13968 17.7704 6.28033C17.6297 6.42098 17.4389 6.5 17.24 6.5ZM15.99 9.5C15.8911 9.5 15.7945 9.47068 15.7123 9.41574C15.63 9.3608 15.5659 9.2827 15.5281 9.19134C15.4902 9.09998 15.4803 8.99945 15.4996 8.90245C15.5189 8.80546 15.5666 8.71637 15.6365 8.64645C15.7064 8.57652 15.7955 8.5289 15.8925 8.50961C15.9895 8.49032 16.09 8.50022 16.1814 8.53806C16.2727 8.57591 16.3508 8.63999 16.4058 8.72222C16.4607 8.80444 16.49 8.90111 16.49 9C16.49 9.13261 16.4374 9.25979 16.3436 9.35355C16.2498 9.44732 16.1226 9.5 15.99 9.5ZM14.74 4.5C14.5917 4.5 14.4467 4.45601 14.3234 4.3736C14.2 4.29119 14.1039 4.17406 14.0471 4.03701C13.9904 3.89997 13.9755 3.74917 14.0045 3.60368C14.0334 3.4582 14.1048 3.32456 14.2097 3.21967C14.3146 3.11478 14.4482 3.04335 14.5937 3.01441C14.7392 2.98547 14.89 3.00033 15.027 3.05709C15.1641 3.11386 15.2812 3.20999 15.3637 3.33332C15.4461 3.45666 15.49 3.60166 15.49 3.75C15.49 3.94891 15.411 4.13968 15.2704 4.28033C15.1297 4.42098 14.9389 4.5 14.74 4.5ZM11.74 7.5C11.5917 7.5 11.4467 7.45601 11.3234 7.3736C11.2 7.29119 11.1039 7.17406 11.0471 7.03701C10.9904 6.89997 10.9755 6.74917 11.0045 6.60368C11.0334 6.4582 11.1048 6.32456 11.2097 6.21967C11.3146 6.11478 11.4482 6.04335 11.5937 6.01441C11.7392 5.98547 11.89 6.00033 12.027 6.05709C12.1641 6.11386 12.2812 6.20999 12.3637 6.33332C12.4461 6.45666 12.49 6.60166 12.49 6.75C12.49 6.94891 12.411 7.13968 12.2704 7.28033C12.1297 7.42098 11.9389 7.5 11.74 7.5ZM14.74 11.5C14.8884 11.5 15.0334 11.544 15.1567 11.6264C15.28 11.7088 15.3762 11.8259 15.433 11.963C15.4897 12.1 15.5046 12.2508 15.4756 12.3963C15.4467 12.5418 15.3752 12.6754 15.2704 12.7803C15.1655 12.8852 15.0318 12.9566 14.8864 12.9856C14.7409 13.0145 14.5901 12.9997 14.453 12.9429C14.316 12.8861 14.1988 12.79 14.1164 12.6667C14.034 12.5433 13.99 12.3983 13.99 12.25C13.99 12.0511 14.069 11.8603 14.2097 11.7197C14.3503 11.579 14.5411 11.5 14.74 11.5ZM3.99002 12.523L3.30603 13.176C3.27939 13.2008 3.24584 13.2168 3.20984 13.2221C3.17384 13.2273 3.13711 13.2214 3.10453 13.2052C3.07194 13.1891 3.04506 13.1633 3.02747 13.1315C3.00988 13.0996 3.0024 13.0632 3.00605 13.027L3.07404 12.068L2.15204 11.922C2.11623 11.9153 2.08316 11.8982 2.05698 11.8728C2.0308 11.8475 2.01265 11.815 2.00476 11.7794C1.99688 11.7439 1.99964 11.7067 2.01267 11.6727C2.02569 11.6387 2.04842 11.6092 2.07804 11.588L2.84803 11.044L2.38303 10.21C2.36432 10.1786 2.35551 10.1423 2.3577 10.1059C2.35989 10.0694 2.373 10.0345 2.39533 10.0056C2.41766 9.97664 2.44816 9.95512 2.48288 9.94379C2.51761 9.93245 2.55495 9.93183 2.59003 9.942L3.48203 10.224L3.82505 9.329C3.83715 9.29464 3.85961 9.26488 3.88935 9.24383C3.91908 9.22278 3.9546 9.21148 3.99103 9.21148C4.02746 9.21148 4.06298 9.22278 4.09272 9.24383C4.12245 9.26488 4.14494 9.29464 4.15705 9.329L4.50003 10.224L5.39203 9.942C5.42712 9.93183 5.46445 9.93245 5.49918 9.94379C5.5339 9.95512 5.5644 9.97664 5.58673 10.0056C5.60906 10.0345 5.6222 10.0694 5.62439 10.1059C5.62658 10.1423 5.61774 10.1786 5.59903 10.21L5.13404 11.044L5.90403 11.588C5.93365 11.6092 5.9564 11.6387 5.96942 11.6727C5.98245 11.7067 5.98518 11.7439 5.9773 11.7794C5.96942 11.815 5.95126 11.8475 5.92508 11.8728C5.8989 11.8982 5.86583 11.9153 5.83002 11.922L4.90802 12.068L4.97605 13.027C4.97969 13.0632 4.97222 13.0996 4.95462 13.1315C4.93703 13.1633 4.91015 13.1891 4.87757 13.2052C4.84498 13.2214 4.80822 13.2273 4.77222 13.2221C4.73622 13.2168 4.70267 13.2008 4.67603 13.176L3.99002 12.523Z"
                    fill="#F6F9FC"
                  />
                </svg>
              </TooltipText>
            </motion.span>
          </Monoco>
        </div>
      </main>
    </TooltipProvider>
  );
};
