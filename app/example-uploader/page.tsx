'use client';

import { toast } from 'sonner';
import { UploadButton } from '@/utils/uploadthing';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-900 flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="textUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log('Files: ', res);
          // alert('Upload Completed');
          toast('Filie Uploaded', {
            description: 'Files have been uplaoded to upload thing',
            action: {
              label: 'complete',
              onClick: () => console.log('complete'),
            },
          });
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <button
        className="bg-slate-500"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 31, 1995 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Test Toast
      </button>
    </main>
  );
}
