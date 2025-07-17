'use client';

import { DownloadButton } from '@/components/DownloadButton'

export interface FileItem {
  title: string;
  name: string; // URL (เช่น pdf หรือ youtube)
  type?: 'pdf' | 'youtube';
}

export interface AccordionItem {
  title: string;
  files: FileItem[];
}

export default function FinancialAccordionList({ documents }: {
  documents: AccordionItem[];
}) {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  };

  return (
    <div className="w-full">
      {documents.map((doc, index) => (
        <div key={index} className="mb-4 border border-gray-200 rounded-md overflow-hidden">
          <div className="w-full text-left px-4 py-3 font-semibold bg-gray-100">
            {doc.title}
          </div>

          <div className="px-4 pb-4 pt-2 bg-white space-y-4">
            {doc.files.map((file, i) => (
              <div key={i} className="border-t pt-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-800">{file.title}</span>
                  {file.type !== 'youtube' && (
                    <DownloadButton className='mt-[16px]' href={file.name} />
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
      ))}
    </div>
  );
}
