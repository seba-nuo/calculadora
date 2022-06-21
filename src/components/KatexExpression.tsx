import { useEffect, useRef } from "react";
import katex from 'katex'

interface KatexProps {
  texExpression: string
}

const KaTeXComponent = ({ texExpression }: KatexProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    katex.render(texExpression, containerRef.current as HTMLDivElement);
  }, [texExpression]);

  return <div ref={containerRef} />
}

export default KaTeXComponent