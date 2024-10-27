import { Home, User, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function MainNav() {
  return (
    <Menubar className="border-b px-6 py-3 w-full">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">
          SocialProfileHub
        </MenubarTrigger>
        <MenubarContent>
          <Link to="/">
            <MenubarItem className="cursor-pointer">
              <Home className="mr-2 h-4 w-4" />
              Home
            </MenubarItem>
          </Link>
          <Link to="/register">
            <MenubarItem className="cursor-pointer">
              <Plus className="mr-2 h-4 w-4" />
              Add Business
            </MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}