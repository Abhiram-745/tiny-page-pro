import { useEffect, useMemo } from "react";
import "./SectionContentStyles.css";
import "./DiagramAnimations.css";
import { applyNoteVariations, resetNoteVariationSeed } from "@/lib/noteFormatVariations";

interface SectionContentProps {
  html: string;
}

const SectionContent = ({ html }: SectionContentProps) => {
  // Reset variation seed when html changes (new section loaded)
  useEffect(() => {
    resetNoteVariationSeed();
  }, [html]);

  // Apply random format variations to the HTML
  const variedHtml = useMemo(() => {
    return applyNoteVariations(html);
  }, [html]);

  return (
    <div 
      className="section-content-wrapper"
      dangerouslySetInnerHTML={{ __html: variedHtml }}
    />
  );
};

export default SectionContent;
