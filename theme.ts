import { lighten, darken, readableColor } from 'polished';
import * as Tokens from "@okta/odyssey-design-tokens";

export const theme = {
  // spacing: {
    // unit: Tokens.SpaceScale1,
    // sectionHorizontal: ({ spacing }) => Tokens.SpaceScale4,
    // sectionVertical: ({ spacing }) => Tokens.SpaceScale4,
  // },
  // breakpoints: {
  //   xs: 0,
  //   small: '550px',
  //   medium: '900px',
  //   large: '1200px',
  // },
  colors: {
    // tonalOffset: 0.2,
    primary: {
      main: '#00297a',
      // light: ({ colors }) => lighten(colors.tonalOffset, colors.primary.main),
      // dark: ({ colors }) => darken(colors.tonalOffset, colors.primary.main),
      // contrastText: ({ colors }) => readableColor(colors.primary.main),
    },
    // success: {
    //   main: '#00aa13',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 3, colors.success.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.success.main),
    //   contrastText: ({ colors }) => readableColor(colors.success.main),
    // },
    // error: {
    //   main: '#e53935',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.error.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.error.main),
    //   contrastText: ({ colors }) => readableColor(colors.error.main),
    // },
    // warning: {
    //   main: '#d4ad03',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.warning.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.warning.main),
    //   contrastText: ({ colors }) => readableColor(colors.warning.main),
    // },
    // info: {
    //   main: '#4782cb',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.info.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.info.main),
    //   contrastText: ({ colors }) => readableColor(colors.info.main),
    // },
    text: {
      primary: Tokens.ColorTextBody,
      // secondary: '#4e566d',
    },
    border: {
      dark: Tokens.ColorBorderPrimaryDark,
      light: '#fff',
    },
    // responses: {
    //   success: {
    //     color: ({ colors }) => colors.success.main,
    //     backgroundColor: ({ colors }) => transparentize(0.9, colors.success.main),
    //   },
    //   error: {
    //     color: ({ colors }) => colors.error.main,
    //     backgroundColor: ({ colors }) => transparentize(0.9, colors.error.main),
    //   },
    //   redirect: {
    //     color: ({ colors }) => colors.warning.main,
    //     backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.redirect.color),
    //   },
    //   info: {
    //     color: ({ colors }) => colors.info.main,
    //     backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.info.color),
    //   },
    // },
    http: {
      get: '#6bbd5b',
      post: '#248fb2',
      put: '#9b708b',
      options: '#d3ca12',
      patch: '#e09d43',
      delete: '#e27a7a',
      basic: '#999',
      link: '#31bbb6',
      head: '#c167e4',
    },
    // navbar: {
    //   main: ({ colors }) => colors.primary.main,
    //   gradient: ({ colors }) => darken(colors.tonalOffset / 2, colors.navbar.main),
    //   contrastText: 'white'
    // },
    // footer: {
      // main: ({ colors }) => colors.primary.main,
      // contrastText: 'white'
    // },
  },

  sidebar: {
    backgroundColor: Tokens.ColorBackgroundBase,
    width: '260px',
  },
  // tocPanel: {
  //   width: '240px',
  // },

  typography: {
    fontSize: Tokens.FontSizeBase,
    lineHeight: Tokens.FontLineHeightUi,
    fontWeightRegular: Tokens.FontWeightNormal,
    fontWeightBold: Tokens.FontWeightBold,
    fontWeightLight: '300',
    fontFamily: Tokens.FontFamilyBase,
    headings: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontWeight: Tokens.FontWeightNormal,
    },
    heading1: {
      fontSize: Tokens.FontSizeHeading1,
      lineHeight: Tokens.FontLineHeightHeading1,
      // fontWeight: '600',
      // fontFamily: ({ typography }) => typography.headings.fontFamily,
      // lineHeight: ({ typography }) => typography.lineHeight,
      // color: ({ colors }) => colors.primary.main,
      // capitalize: true,
    },
    heading2: {
      fontSize: Tokens.FontSizeHeading2,
      lineHeight: Tokens.FontLineHeightHeading2,
    //   fontWeight: '600',
    //   color: ({ colors }) => colors.text.primary,
    //   fontFamily: ({ typography }) => typography.headings.fontFamily,
    //   lineHeight: ({ typography }) => typography.lineHeight,
    //   capitalize: false,
    },
    heading3: {
      fontSize: Tokens.FontSizeHeading3,
      lineHeight: Tokens.FontLineHeightHeading3,
    //   color: ({ colors }) => colors.text.primary,
    //   fontFamily: ({ typography }) => typography.headings.fontFamily,
    //   lineHeight: ({ typography }) => typography.lineHeight,
    //   capitalize: false,
    },
    heading4: {
      fontSize: Tokens.FontSizeHeading4,
      lineHeight: Tokens.FontLineHeightHeading4,
    // // ...
    // },
    // heading5: {
    // // ...
    // },
    // heading6: {
    // // ...
    },
    code: {
      fontSize: '13px',
      fontFamily: Tokens.FontFamilyMono,
      // fontWeight: ({ typography }) => typography.fontWeightRegular,
      color: '#e53935',
      backgroundColor: 'rgba(38, 50, 56, 0.04)',
      wrap: false,
    },
    links: {
      color: ({ colors }) => colors.primary.main,
      visited: ({ typography }) => typography.links.color,
      hover: ({ typography }) => lighten(0.2, typography.links.color),
    },
  },
  rightPanel: {
    backgroundColor: '#263238',
    width: '40%',
    // textColor: '#ffffff',
  },
  schema: {
    nestedBackground: '#fafafa',
    // linesColor: theme => lighten( theme.colors.tonalOffset, desaturate(theme.colors.tonalOffset, theme.colors.primary.main) ),
    // defaultDetailsWidth: '75%',
    // typeNameColor: theme => theme.colors.text.secondary,
    // typeTitleColor: theme => theme.schema.typeNameColor,
    // requireLabelColor: theme => theme.colors.error.main,
    // labelsTextSize: '0.9em',
    // nestingSpacing: '1em',
    // arrow: {
    //   size: '1.1em',
    //   color: theme => theme.colors.text.secondary,
    // },
  },
  // codeBlock: {
  //   backgroundColor: ({ rightPanel }) => darken(0.1, rightPanel.backgroundColor),
  //   tokens: {},
  // },
};