'use client';

import { useState } from 'react';

export interface FileItem {
  title: string;
  name: string; // URL (เช่น pdf หรือ youtube)
  type?: 'pdf' | 'youtube';
}

export interface AccordionItem {
  title: string;
  files: FileItem[];
}

interface Props {
  documents: AccordionItem[];
}

export default function AccordionList({ documents }: Props) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0]; // ดึง YouTube ID
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  };

  return (
    <div className="w-full">
      {documents.map((doc, index) => (
        <div key={index} className="mb-4 border border-gray-200 rounded-md overflow-hidden">
          <button
            onClick={() => toggleIndex(index)}
            className="w-full text-left px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 transition"
          >
            {doc.title}
          </button>

          {openIndexes.includes(index) && (
            <div className="px-4 pb-4 pt-2 bg-white space-y-4">
              {doc.files.map((file, i) => (
                <div key={i} className="border-t pt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-800">{file.title}</span>

                    {/* ถ้าไม่ใช่ youtube, แสดงปุ่มดาวน์โหลด */}
                    {file.type !== 'youtube' && (
                      <a
                        href={`/downloads/${file.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-1 rounded text-sm shadow"
                      >
                        ดาวน์โหลด
                      </a>
                    )}
                  </div>

                  {/* แสดง iframe ถ้าเป็น youtube */}
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
          )}
        </div>
      ))}
    </div>
  );
}
