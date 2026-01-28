
import { Suspense } from "react";
import CoverLetterPageContent from "@/components/cover-letter-page-content";

export default function CoverLetterPage() {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <CoverLetterPageContent />
    </Suspense>
  );
}
