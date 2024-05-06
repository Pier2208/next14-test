import Link from 'next/link';
import UserAvatar from './Avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AlarmCheck, Calendar, LogOut, Settings } from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-16 w-full bg-slate-900 px-4 text-white">
      <div className="h-full w-full flex justify-between items-center">
        <Link className="mr-auto" href="/">
          HOORA
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserAvatar />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white" align="end">
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                <p>Pierrick</p>
                <p className="text-xs">pleroy@lepointdevente.com</p>
              </div>
            </div>

            <DropdownMenuSeparator className="bg-slate-100" />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Calendar className="mr-2 h-4 w-4" />
                <Link href="/account">Account</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <AlarmCheck className="mr-2 h-4 w-4" />
                <Link href="/emails">Emails</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator className="bg-slate-100" />

            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <Link href="/">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
