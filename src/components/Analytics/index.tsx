import React from 'react'

const Analytics = () => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?=${process.env.NEXT_PUBLIC_GA_TRACKING}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING}', {
            page_path: window.location.pathname,
          });
          `
        }}
      />
    </>
  )
}

export default Analytics
