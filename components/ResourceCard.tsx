import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Resource } from '@/types/resource';
import { Info } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';

interface ResourceCardProps {
  resource: Resource;
  onClick: () => void;
  isCompact?: boolean;
}

export default function ResourceCard({ resource, onClick, isCompact = false }: ResourceCardProps) {
  const cardVariants = {
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      variants={cardVariants}
    >
      <Card 
        className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-blue-200 ${
          isCompact ? 'p-3' : ''
        }`}
        onClick={onClick}
        data-tooltip-id="resource-tooltip"
        data-tooltip-content={JSON.stringify({
          description: resource.description,
          location: resource.location,
          stats: resource.stats,
          type: resource.type
        })}
      >
        <CardHeader className={`pb-2 ${isCompact ? 'p-3' : ''}`}>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className={`${isCompact ? 'text-base' : 'text-lg'}`}>
                {resource.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{resource.organization}</p>
            </div>
            <Info className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent className={isCompact ? 'p-3 pt-0' : ''}>
          <div className="flex flex-wrap gap-2">
            {resource.type && (
              <Badge variant="default" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                {resource.type}
              </Badge>
            )}
            {resource.tags.slice(0, isCompact ? 2 : 3).map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}