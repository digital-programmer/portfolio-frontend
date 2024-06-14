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
        className="my-2 md:my-4 rounded-md text-sm md:text-base"
      >
        {code}
      </SyntaxHighlighter>
    )
  }
  
  export default CodeBlock