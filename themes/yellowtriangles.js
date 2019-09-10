import triangles from '../static/triangle-background.svg'

export default {
  googleFont:
    'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto+Mono',
  fonts: {
    body: '"Roboto Condensed", system-ui, sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    text: '#000',
    background: 'transparent',
    primary: '#333',
  },
  text: {
    heading: {
      textTransform: 'uppercase',
      margin: "0.3em",
      textAlign: "center",
    },
  },
  styles: {
    pre: {
      textAlign: 'left',
      color: 'background',
      bg: 'text',
    },
    code: {
      color: 'background',
      bg: 'text',
    },
    root: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundImage: `url(${triangles})`,
    },
  },
}