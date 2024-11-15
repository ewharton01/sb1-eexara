import { resources } from '@/data/resources';
import ResourceCard from './ResourceCard';
import { Resource } from '@/types/resource';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';

interface ResourceGridProps {
  onResourceSelect: (resource: Resource) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ResourceGrid({ onResourceSelect }: ResourceGridProps) {
  return (
    <>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {resources.map((resource) => (
          <motion.div key={resource.id} variants={item}>
            <ResourceCard
              resource={resource}
              onClick={() => onResourceSelect(resource)}
            />
          </motion.div>
        ))}
      </motion.div>
      
      <Tooltip
        id="resource-tooltip"
        place="right"
        className="max-w-[300px] !bg-white !text-gray-800 shadow-lg p-4 rounded-lg border border-gray-200 z-50"
        render={({ content }) => {
          if (!content) return null;
          const data = JSON.parse(content);
          return (
            <div className="space-y-2">
              <p className="text-sm font-medium">{data.type.toUpperCase()}</p>
              <p className="text-sm">{data.description}</p>
              <div className="text-xs text-gray-500 mt-2">
                <p>📍 {data.location}</p>
                <p>👥 {data.stats.interestedCandidates} interested candidates</p>
                <p>✅ {data.stats.candidatesApplied} applications</p>
              </div>
            </div>
          );
        }}
      />
    </>
  );
}