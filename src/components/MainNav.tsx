import { Home, Building2, Plus, Settings, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@/components/ui/menubar";
import { useLanguage } from "@/contexts/LanguageContext";
import { languageNames } from "@/types/language";

export function MainNav() {
  const { language, setLanguage } = useLanguage();

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
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger className="cursor-pointer">
              <Globe className="mr-2 h-4 w-4" />
              {languageNames[language]}
            </MenubarSubTrigger>
            <MenubarSubContent>
              {Object.entries(languageNames).map(([code, name]) => (
                <MenubarItem
                  key={code}
                  className="cursor-pointer"
                  onClick={() => setLanguage(code as any)}
                >
                  {name}
                </MenubarItem>
              ))}
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}