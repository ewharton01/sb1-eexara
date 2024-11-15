import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Resource } from '@/types/resource';
import { X, MapPin, Globe, Users, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ResourceDetailProps {
  resource: Resource;
  onClose: () => void;
}

export default function ResourceDetail({ resource, onClose }: ResourceDetailProps) {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Interested Candidates',
        data: [30, 45, 60, 75, 90, resource.stats.interestedCandidates],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4,
      },
      {
        label: 'Applications',
        data: [20, 30, 40, 50, 65, resource.stats.candidatesApplied],
        borderColor: 'rgb(99, 102, 241)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <Badge className="mb-2">{resource.type}</Badge>
            <CardTitle>{resource.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{resource.organization}</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X size={24} />
          </button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {resource.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose max-w-none">
            <p className="text-muted-foreground">{resource.description}</p>
          </div>
          
          <Card className="bg-muted/50">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-4">Organization Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{resource.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4" />
                  <a href={resource.website} className="text-blue-600 hover:underline">
                    {resource.website}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>contact@{resource.website.replace('www.', '')}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-4">Resource Insights</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-background rounded-lg">
                  <Users className="h-5 w-5 mx-auto mb-1" />
                  <div className="text-2xl font-bold">{resource.stats.relevantBarriers}</div>
                  <div className="text-xs text-muted-foreground">Relevant Barriers</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg">
                  <Users className="h-5 w-5 mx-auto mb-1" />
                  <div className="text-2xl font-bold">{resource.stats.interestedCandidates}</div>
                  <div className="text-xs text-muted-foreground">Interested</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg">
                  <Users className="h-5 w-5 mx-auto mb-1" />
                  <div className="text-2xl font-bold">{resource.stats.candidatesApplied}</div>
                  <div className="text-xs text-muted-foreground">Applied</div>
                </div>
              </div>
              <div className="h-64">
                <Line options={chartOptions} data={chartData} />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button className="flex-1">Contact Organization</Button>
            <Button variant="outline" className="flex-1">Save Resource</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}