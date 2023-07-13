import * as React from "react"
const LogoIcon = ({width,height}:{width:number,height?:number}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height ?? 144}
    viewBox="0 0 48 48"
  >
    <path
      fill="#FFC107"
      d="M47 19h-3.7l-.2-.2c.9-.7 1.5-1.8 1.5-3 0-2.1-1.7-3.8-3.8-3.8h-7v10.6l-.3-.9-3-9-.3-.7H24.6l-.2.7-.8 2.5V12H9.1c-1.9 0-3.3 1.5-3.3 3.4 0 .9.3 1.3.5 1.6.2.2 1 1.2 1.5 1.9H0v4h9.8c1.9 0 3.4-1.5 3.4-3.4 0-.9-.3-1.3-.5-1.6l-1.5-2h3.5v7h4.6v-7h4l-1.8 5.7L21 23h4.6l.2-.7.5-1.3h2.4l.5 1.3.2.7h9v-2.1c.6.6 1.2 1.1 1.6 1.5.2.1.6.6 1.4.6H48v-4h-1zm-31.5 7.3-3 9-.2.7H9.2l-.2-.7-1-2.7-.9 2.7-.3.7H3.6l-.2-.7-3-9L0 25h4.7l.2.7.3 1.1.4-1.1.3-.7h4.2l.2.7.4 1.1.3-1.1.2-.7H16l-.5 1.3zM41.3 25c-1.9 0-3.4 1.5-3.4 3.4 0 .9.3 1.3.5 1.6.2.2 1 1.2 1.6 1.9h-4.6l-.1-.1c.9-.7 1.5-1.8 1.5-3 0-2.1-1.7-3.8-3.8-3.8h-7v11l-.4-1.3-3-9-.2-.7H16.8l-.2.7-2.9 9-.5 1.3h4.5l.2-.7.5-1.3h2.4l.5 1.3.2.7h9.2v-2.1c.6.6 1.2 1.1 1.7 1.5.4.4.9.6 1.5.6h8.3c1.9 0 3.4-1.5 3.4-3.4 0-.9-.3-1.3-.5-1.6l-1.5-2H48v-4h-6.7z"
    />
    <path d="M22.5 13H9c-1.3 0-2.3 1-2.3 2.4 0 .6.2.8.3 1 .3.4 2.1 2.6 2.1 2.6 0 .1.1.2.1.3.1.4-.2.7-.6.7H1v2h8.8c1.3 0 2.4-1 2.4-2.4 0-.6-.2-.8-.3-1L10 16c0-.1-.1-.2-.1-.3 0-.4.3-.7.7-.7h5.2v7h2.6v-7h4.3v-2zm7 0h-4.2l-2.9 9h2.5l.7-2h3.8l.7 2h2.5l-3.1-9zm-3.3 5 1.2-3.6 1.2 3.6h-2.4zm17.1 2c-.4 0-.6-.2-.8-.4-.5-.6-1.1-1.1-1.1-1.1a2.795 2.795 0 0 0-.7-5.5h-6v9h2.7v-3.4s2.3 2.2 3.3 3.1c.1.1.4.3.8.3H47v-2h-3.7zm-5.9-5H40c.6 0 1.1.4 1.1 1s-.5 1-1.1 1h-2.6v-2zM12 26l-1.3 3.9L9.4 26H6.6l-1.4 3.9L3.9 26H1.4l3 9h1.7L8 29.5 9.9 35h1.7l3-9H12zm30.7 2H47v-2h-5.7c-1.3 0-2.4 1-2.4 2.4 0 .6.2.8.3 1 .3.3 2.2 2.5 2.2 2.5 0 .1.1.2.1.3 0 .4-.3.7-.6.7h-5.3c-.4 0-.6-.2-.8-.4-.5-.6-1-1.1-1-1.1a2.795 2.795 0 0 0-.7-5.5H27v9h2.7v-3.4s2.3 2.2 3.3 3.1c.1.1.4.3.8.3h8.3c1.3 0 2.4-.9 2.4-2.4 0-.6-.2-.8-.3-1l-2-2.5c0-.1-.1-.2-.1-.3 0-.4.3-.7.6-.7zm-10.4 2h-2.6v-2h2.6c.6 0 1.1.4 1.1 1s-.5 1-1.1 1zm-10.6-4h-4.2l-2.9 9H17l.7-2h3.8l.7 2h2.5l-3-9zm-3.3 5 1.2-3.6 1.2 3.6h-2.4z" />
  </svg>
)
export default LogoIcon