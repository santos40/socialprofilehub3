import { Home, Building2, Plus, Settings } from "lucide-react";
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
        <Link to="/">
          <MenubarTrigger className="font-bold">
            SocialProfileHub
          </MenubarTrigger>
        </Link>
        <MenubarContent>
          <Link to="/directory">
            <MenubarItem className="cursor-pointer">
              <Building2 className="mr-2 h-4 w-4" />
              Business Directory
            </MenubarItem>
          </Link>
          <Link to="/register">
            <MenubarItem className="cursor-pointer">
              <Plus className="mr-2 h-4 w-4" />
              Add Business
            </MenubarItem>
          </Link>
          <Link to="/admin">
            <MenubarItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              Admin Dashboard
            </MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}