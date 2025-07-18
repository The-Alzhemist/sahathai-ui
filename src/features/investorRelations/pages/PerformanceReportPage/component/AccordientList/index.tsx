'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { DownloadButton } from '@/components/DownloadButton';

export interface FileItem {
  title: string;
  name: string;
  type?: 'pdf' | 'youtube';
}

export interface AccordionItem {
  title: string;
  files: FileItem[];
}

interface PerformanceAccordionListProps {
  documents: AccordionItem[];
  defaultOpenIndexes?: number[];
}

export default function PerformanceAccordionList({
                                                   documents,
                                                   defaultOpenIndexes = [],
                                                 }: PerformanceAccordionListProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(defaultOpenIndexes);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  };

  return (
    <div className="w-full">
      {documents.map((doc, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className="mb-4 border border-gray-200 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center text-left px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 transition"
            >
              <span>{doc.title}</span>
              {isOpen ? (
                <FaChevronDown className="text-gray-500 transition-transform duration-300" />
              ) : (
                <FaChevronRight className="text-gray-500 transition-transform duration-300" />
              )}
            </button>

            {/* Animate content toggle */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden bg-white px-4`}
              style={{
                maxHeight: isOpen ? '1000px' : '0px',
                paddingTop: isOpen ? '0.5rem' : '0',
                paddingBottom: isOpen ? '1rem' : '0',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="space-y-4">
                {doc.files.map((file, i) => (
                  <div key={i} className="border-t pt-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-800">{file.title}</span>
                      {file.type !== 'youtube' && (
                        <DownloadButton
                          className={`mt-[16px] ${!file.name ? 'opacity-30 pointer-events-none' : ''}`}
                          href={file.name || '#'}
                        />
                      )}
                    </div>
                    {file.type === 'youtube' && (
                      <div className="aspect-w-16 aspect-h-9">
                        <iframe
                          src={getYouTubeEmbedUrl(file.name)}
                          title={file.title}
                          allowFullScreen
                          className="w-full h-64 rounded"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
