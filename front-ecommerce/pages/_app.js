import { CartContextProvider } from "@/components/CartContext";

const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Funnel+Display:wght@300..800&family=Roboto:ital,wght@0,100..900;1,100..900&family=Saira+Stencil+One&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;
  }
`;

function GlobalStyle() {
  return (
    <style jsx global>
      {globalStyles}
    </style>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
