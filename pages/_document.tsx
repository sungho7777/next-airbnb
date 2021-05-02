import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext} from "next/document";
  import { ServerStyleSheet } from 'styled-components';
  
  
  export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const sheet = new ServerStyleSheet();
      const originalRenderpage = ctx.renderPage;
  
      try {
        ctx.renderPage = () => 
          originalRenderpage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props}/>)
          });
  
        const initialProps = await Document.getInitialProps(ctx);
  
        
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          ),
        };
      } finally {
        sheet.seal();
      }
    }
    render() {
      return (
        <Html>
          <Head>
            <link 
              rel="preconnect" 
              href="https://fonts.gstatic.com" 
            />
            <link 
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" 
              rel="stylesheet"
            />
            <link 
              rel="preconnect" 
              href="https://fonts.gstatic.com" 
            />
            <link 
              href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@1,400;1,700&display=swap" 
              rel="stylesheet" 
            />
            {/* <link 
              href="https://fonts.goolgeapis.com/css?family=Noto+Sans:400,700&display=swap"
              rel="stylesheet" 
            /> */}
            {/* <link 
              rel="stylesheet" 
              href="https://fonts.goolgeapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean"
            /> */}
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }