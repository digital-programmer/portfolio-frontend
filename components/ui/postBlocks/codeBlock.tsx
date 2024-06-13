import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
    value: {
      code: string
    }
}
const CodeBlock = ({ value }: Props) => {
    const { code } = value
    return (
      <SyntaxHighlighter
        style={tomorrowNightBright}
        customStyle={{
          padding: '1rem',
          marginBottom: '2rem',
          fontSize: '14px',
          borderRadius: '6px',
          marginTop: '2rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    )
  }
  
  export default CodeBlock