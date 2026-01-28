
"use client";

import type { ResumeData } from "@/lib/types";
import OneColumnTemplate from "./templates/one-column";
import TwoColumnTemplate from "./templates/two-column";
import ModernTemplate from "./templates/modern";
import CreativeTemplate from "./templates/creative";
import MinimalistTemplate from "./templates/minimalist";
import TechnicalTemplate from "./templates/technical";
import ExecutiveTemplate from "./templates/executive";

interface ResumePreviewProps {
  resumeData: ResumeData;
  isPrintMode?: boolean;
  isFullSize?: boolean;
  isPreview?: boolean;
}

const templateComponents = {
  'one-column': OneColumnTemplate,
  'two-column': TwoColumnTemplate,
  'modern': ModernTemplate,
  'creative': CreativeTemplate,
  'minimalist': MinimalistTemplate,
  'technical': TechnicalTemplate,
  'executive': ExecutiveTemplate,
};

export default function ResumePreview({
  resumeData,
  isPrintMode = false,
  isFullSize = false,
  isPreview = false,
}: ResumePreviewProps) {
  const TemplateComponent = templateComponents[resumeData.template] || OneColumnTemplate;

  const containerClass = isPrintMode
    ? 'print-container'
    : isFullSize
    ? 'transform scale-[0.49] origin-top'
    : 'transform scale-[0.25] xs:scale-[0.3] sm:scale-[0.4] md:scale-[0.5] lg:scale-[0.6] origin-top';

  if (isPreview) {
    return (
      <div id="resume-preview" className="w-full bg-white">
        <TemplateComponent resumeData={resumeData} isPreview={isPreview} />
      </div>
    );
  }

  if (typeof window !== 'undefined' && window.location.pathname.includes('/templates')) {
    return (
        <div id="resume-preview" className="bg-white shadow-lg w-full aspect-[8.5/11]">
            <TemplateComponent resumeData={resumeData} isPreview={false} />
        </div>
    );
  }

  if (isPrintMode) {
     return (
        <div id="resume-preview" className="bg-white w-full h-full">
            <TemplateComponent resumeData={resumeData} isPreview={false} />
        </div>
     )
  }

  return (
    <div
      id="resume-preview"
      className={`bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[8.5in] aspect-[8.5/11] min-w-[320px] ${containerClass}`}
    >
      <TemplateComponent resumeData={resumeData} isPreview={false} />
    </div>
  );
}
