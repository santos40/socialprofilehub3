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
    <Menubar className="border-b px-6 py-3 w-full bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <MenubarMenu>
            <Link to="/">
              <MenubarTrigger className="font-bold text-xl">
                SocialProfileHubs.com
              </MenubarTrigger>
            </Link>
          </MenubarMenu>

          <MenubarMenu>
            <Link to="/directory">
              <MenubarTrigger>
                <Building2 className="mr-2 h-4 w-4 inline" />
                Directory
              </MenubarTrigger>
            </Link>
          </MenubarMenu>

          <MenubarMenu>
            <Link to="/register">
              <MenubarTrigger>
                <Plus className="mr-2 h-4 w-4 inline" />
                Add Business
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
        </div>

        <div className="flex items-center gap-4">
          <MenubarMenu>
            <Link to="/admin">
              <MenubarTrigger>
                <Settings className="mr-2 h-4 w-4 inline" />
                Admin
              </MenubarTrigger>
            </Link>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>
              <Globe className="mr-2 h-4 w-4 inline" />
              {languageNames[language]}
            </MenubarTrigger>
            <MenubarContent className="bg-white border shadow-lg">
              {Object.entries(languageNames).map(([code, name]) => (
                <MenubarItem
                  key={code}
                  className="cursor-pointer hover:bg-accent"
                  onClick={() => setLanguage(code as any)}
                >
                  {name}
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </div>
      </div>
    </Menubar>
  );
}