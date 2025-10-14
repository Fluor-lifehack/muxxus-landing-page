
'use client';

import { useEffect } from 'react';

const DevelopersPage = () => {
  useEffect(() => {
    const developersUrl = process.env.NEXT_PUBLIC_DEVELOPERS_URL;
    if (developersUrl) {
      window.open(developersUrl, '_blank');
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-gray-600">Redirection vers la plateforme développeurs...</p>
      </div>
    </main>
  );
};

export default DevelopersPage; 