import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer = ({ content, className = '' }: MarkdownRendererProps) => {
  // Pre-process content to fix common AI formatting issues
  const processContent = (text: string): string => {
    let processed = text;
    
    // Fix table formatting - ensure pipes are properly aligned
    // Sometimes AI generates tables without proper spacing
    processed = processed.replace(/\|([^|\n]+)\|/g, (match, content) => {
      return `| ${content.trim()} |`;
    });
    
    // Ensure table header separator exists and is valid
    const lines = processed.split('\n');
    const processedLines: string[] = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const nextLine = lines[i + 1] || '';
      
      // If this looks like a table header (has pipes) and next line isn't a separator
      if (line.includes('|') && line.trim().startsWith('|') && 
          nextLine && !nextLine.match(/^\|[\s:-]+\|/)) {
        // Check if next line looks like table content
        if (nextLine.includes('|') && nextLine.trim().startsWith('|')) {
          // Insert a separator row
          const pipeCount = (line.match(/\|/g) || []).length;
          const separator = '|' + Array(pipeCount - 1).fill('---').join('|') + '|';
          processedLines.push(line);
          processedLines.push(separator);
          continue;
        }
      }
      processedLines.push(line);
    }
    
    return processedLines.join('\n');
  };

  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-lg border border-border shadow-sm">
              <table className="w-full border-collapse bg-card text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted/50 border-b border-border">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-border">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="transition-colors hover:bg-muted/30">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left font-heading font-semibold text-foreground border-r border-border last:border-r-0">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-foreground border-r border-border last:border-r-0">
              {children}
            </td>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-foreground">
              {children}
            </strong>
          ),
          p: ({ children }) => (
            <p className="mb-4 leading-relaxed last:mb-0">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="mb-4 ml-6 list-disc space-y-2">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 ml-6 list-decimal space-y-2">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">
              {children}
            </li>
          ),
          h1: ({ children }) => (
            <h1 className="mb-4 font-heading text-3xl font-bold">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mb-3 font-heading text-2xl font-bold">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-3 font-heading text-xl font-semibold">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mb-2 font-heading text-lg font-semibold">
              {children}
            </h4>
          ),
          code: ({ children, className }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono text-primary">
                  {children}
                </code>
              );
            }
            return (
              <code className="block p-4 rounded-lg bg-muted overflow-x-auto font-mono text-sm">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="mb-4 overflow-x-auto rounded-lg bg-muted p-4">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="mb-4 border-l-4 border-primary pl-4 italic text-muted-foreground">
              {children}
            </blockquote>
          ),
        }}
      >
        {processContent(content)}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
