import React from "react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto py-6 px-4">
      <Separator className="mb-6" />
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>© {currentYear} SocialProfileHubs.com. All rights reserved.</p>
      </div>
    </footer>
  );
};