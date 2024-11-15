import { Search, X, Briefcase, HelpingHand, GraduationCap, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

function NavItem({ icon: Icon, label, active }: NavItemProps) {
  return (
    <button
      className={cn(
        "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
        active 
          ? "text-blue-600" 
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      <div className={cn(
        "p-2.5 rounded-full",
        active ? "bg-blue-100" : "bg-muted"
      )}>
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

export default function Header() {
  return (
    <div className="border-b">
      <div className="container mx-auto py-4 max-w-5xl">
        <div className="flex justify-center gap-6 mb-6">
          <NavItem icon={Briefcase} label="Job" active />
          <NavItem icon={HelpingHand} label="Service" />
          <NavItem icon={GraduationCap} label="Training" />
          <NavItem icon={Calendar} label="Event" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for resources on RiseKit"
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 mt-4 justify-center">
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
            Enabled <X size={14} className="ml-1" />
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
            Enabled <X size={14} className="ml-1" />
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
            Enabled <X size={14} className="ml-1" />
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
            Enabled <X size={14} className="ml-1" />
          </Badge>
        </div>
      </div>
    </div>
  );
}