import * as React from "react"


export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Quebec Serial Regular.otf"
      as="font"
      type="font/qsr"
      crossOrigin="anonymous"
      key="qsrFont"
    />,
  ])
}
