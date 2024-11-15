'use client';

import { useState } from 'react';
import ResourceGrid from '@/components/ResourceGrid';
import ResourceDetail from '@/components/ResourceDetail';
import ResourceList from '@/components/ResourceList';
import { Resource } from '@/types/resource';

export default function Home() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  return (
    <div className="container mx-auto p-4">
      {selectedResource ? (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <ResourceList
              onResourceSelect={setSelectedResource}
              selectedResource={selectedResource}
            />
          </div>
          <div className="col-span-8">
            <ResourceDetail
              resource={selectedResource}
              onClose={() => setSelectedResource(null)}
            />
          </div>
        </div>
      ) : (
        <ResourceGrid onResourceSelect={setSelectedResource} />
      )}
    </div>
  );
}