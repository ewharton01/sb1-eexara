import { resources } from '@/data/resources';
import { Resource } from '@/types/resource';
import ResourceCard from './ResourceCard';
import { motion } from 'framer-motion';

interface ResourceListProps {
  selectedResource: Resource;
  onResourceSelect: (resource: Resource) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function ResourceList({
  selectedResource,
  onResourceSelect,
}: ResourceListProps) {
  const filteredResources = resources
    .filter((r) => r.id !== selectedResource.id)
    .filter((r) => r.type === selectedResource.type);

  return (
    <motion.div 
      className="space-y-3"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h2 className="text-lg font-semibold mb-4">Similar Resources</h2>
      {filteredResources.map((resource) => (
        <motion.div key={resource.id} variants={item}>
          <ResourceCard
            resource={resource}
            onClick={() => onResourceSelect(resource)}
            isCompact
          />
        </motion.div>
      ))}
    </motion.div>
  );
}