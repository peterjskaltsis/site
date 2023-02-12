import {
  GenericFont,
  createFont,
  getVariableValue,
  isWeb,
} from "@tamagui/core";

export const createSiteFont = <
  A extends GenericFont<keyof typeof defaultSizes>
>(
  font: {
    [Key in keyof Partial<A>]?: Partial<A[Key]>;
  } = {},
  {
    sizeLineHeight = (size) => size + 10,
    sizeSize = (size) => size * 1,
  }: {
    sizeLineHeight?: (fontSize: number) => number;
    sizeSize?: (size: number) => number;
  } = {}
): A => {
  // merge to allow individual overrides
  const size = Object.fromEntries(
    Object.entries({
      ...defaultSizes,
      ...font.size,
    }).map(([k, v]) => [k, sizeSize(+v)])
  );
  return createFont<A>({
    family: isWeb
      ? 'var(--font-general-sans), -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      : "var(--font-general-sans)",
    lineHeight: Object.fromEntries(
      Object.entries(size).map(([k, v]) => [
        k,
        sizeLineHeight(getVariableValue(v)),
      ])
    ),
    weight: {
      4: "300",
    },
    letterSpacing: {
      4: 0,
    },
    ...(font as any),
    size,
  });
};

const defaultSizes = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  true: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 23,
  9: 30,
  10: 46,
  11: 55,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 134,
} as const;
