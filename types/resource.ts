export interface Resource {
  id: string;
  title: string;
  organization: string;
  description: string;
  type: 'job' | 'service' | 'training' | 'event';
  tags: string[];
  location: string;
  website: string;
  stats: {
    relevantBarriers: number;
    interestedCandidates: number;
    candidatesApplied: number;
  };
}