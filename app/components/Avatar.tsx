import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/26510508?v=4" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
