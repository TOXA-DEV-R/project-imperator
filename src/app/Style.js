import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
    font-family: 'Source Sans Pro', Arial, sans-serif;
  }
  
  :root{
    --white: white;
    --black: black;
    --darkBlue: 3,37,65;
    --lightGrey: 227,227,227;
    --padding-tp-btm-40: 40px;
    --spaceMono : "Space Mono", monospace;
    --userscrollTrack1: 255,202,154;
  }

.padding-top-bootom{
  padding-left: var(--padding-tp-btm-40);
  padding-right: var(--padding-tp-btm-40);
}

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-around {
    justify-content: space-around;
  }

  .justify-unset {
    justify-content: unset;
  }

  .align-center {
    align-items: center;
  }

  .align-unset {
    align-items: unset;
  }

  .flex-column {
    flex-direction: column;
  }

  .flex-unset {
    flex-direction: unset;
  }

  .display-none {
    display: none;
  }

  .display-flex {
    display: flex;
  }



`;
const with_sm = { minWidth: "576px", maxWidth: "540px" };
const with_md = { minWidth: "768px", maxWidth: "720px" };
const with_lg = { minWidth: "992px", maxWidth: "960px" };
const with_xl = { minWidth: "1200px", maxWidth: "1140px" };
const with_xx = { minWidth: "1320px", maxWidth: "1200px" };

const mediaScreenMin = (ct_inWith, width, children = null) => {
  return css`
    @media screen and (min-width: ${width.minWidth}) {
      ${ct_inWith && `max-width: ${width.maxWidth}`}
      ${children && children}
    }
  `;
};

// const mediaScreenMax = (ct_inWith, width, children = null) => {
//   return css`
//     @media screen and (max-width: ${width.maxWidth}) {
//       ${ct_inWith && `max-width: ${width.maxWidth}`}
//       ${children}
//     }
//   `;
// };

const basicWidth = css`
  max-width: 1278px;
  width: 100%;
`;
const fluidWidth = css`
  max-width: 1340px !important;
  width: 100% !important;
`;

export const Container = styled.div`
  ${({ initalWith }) => (initalWith ? null : basicWidth)}
  margin-left: auto;
  margin-right: auto;

  ${mediaScreenMin(true, with_sm)};
  ${mediaScreenMin(true, with_md)};
  ${mediaScreenMin(true, with_lg)};
  ${mediaScreenMin(true, with_xl)};
  ${mediaScreenMin(true, with_xx)};
  ${({ fluid }) => (fluid ? fluidWidth : null)}
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const funCol = ({ sm, md, lg, xl, xx, auto, basic }) => {
  if (sm) {
    return mediaScreenMin(
      false,
      with_sm,
      css`
        width: calc(100% / 12 * ${sm});
      `
    );
  } else if (md) {
    return mediaScreenMin(
      false,
      with_md,
      css`
        width: calc(100% / 12 * ${md});
      `
    );
  } else if (lg) {
    return mediaScreenMin(
      false,
      with_lg,
      css`
        width: calc(100% / 12 * ${lg});
      `
    );
  } else if (xl) {
    return mediaScreenMin(
      false,
      with_xl,
      css`
        width: calc(100% / 12 * ${xl});
      `
    );
  } else if (xx) {
    return mediaScreenMin(
      false,
      with_xx,
      css`
        width: calc(100% / 12 * ${xx});
      `
    );
  } else if (auto === "auto") {
    return css`
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
      position: relative;
    `;
  } else {
    return css`
      width: calc(100% / 12 * ${basic});
    `;
  }
};

export const Col = styled.div`
  ${funCol}
`;
