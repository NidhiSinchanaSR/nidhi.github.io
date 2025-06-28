"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Eye } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Resume</h1>

        <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
          <Button asChild variant="outline" size="sm">
            <a
              href="https://NidhiSinchanaSR.github.io/nidhi.github.io/Nidhi.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a
              href="https://NidhiSinchanaSR.github.io/nidhi.github.io/Nidhi.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Eye className="w-4 h-4 mr-2" />
              Open in New Tab
            </a>
          </Button>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
        {/* PDF Viewer */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Resume Preview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="w-full overflow-hidden">
              <div className="w-full h-[80vh] min-h-[600px] relative">
                <iframe
                  src="https://NidhiSinchanaSR.github.io/nidhi.github.io/Nidhi.pdf"
                  className="w-full h-full border-0 rounded-b-lg"
                  title="Resume PDF"
                  style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    minWidth: '100%'
                  }}
                />
              </div>
            </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
