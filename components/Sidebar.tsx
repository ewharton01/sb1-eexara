import { Link } from '@/components/ui/link';
import {
  Users,
  MessageSquare,
  UserPlus,
  Link2,
  FileText,
  Settings,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface SidebarLinkProps {
  icon: LucideIcon;
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

function SidebarLink({ icon: Icon, href, children, active }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-3 py-2 text-sm",
        active
          ? "bg-muted text-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      <Icon className="mr-2 h-4 w-4" />
      {children}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="w-48 border-r bg-background h-screen flex flex-col">
      <div className="p-3">
        <h1 className="text-lg font-bold">RiseKit</h1>
      </div>
      <nav className="space-y-1 flex-1">
        <SidebarLink icon={Users} href="/organization">
          Organization
        </SidebarLink>
        <SidebarLink icon={MessageSquare} href="/chat">
          Chat
        </SidebarLink>
        <SidebarLink icon={UserPlus} href="/candidates">
          Candidates
        </SidebarLink>
        <SidebarLink icon={Link2} href="/resources" active>
          Resources
        </SidebarLink>
        <SidebarLink icon={FileText} href="/surveys">
          Surveys
        </SidebarLink>
      </nav>
      <div className="border-t">
        <SidebarLink icon={Settings} href="/settings">
          Settings
        </SidebarLink>
        <SidebarLink icon={LogOut} href="/logout">
          Log Out
        </SidebarLink>
      </div>
    </div>
  );
}