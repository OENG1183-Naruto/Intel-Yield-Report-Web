'use client'

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const hvmOptions = [
  {
    name: "HVM IMT",
    description: "refresh cadence: Daily"
  },
  {
    name: "Weekly/Monthly",
    description: "refresh cadence: Every Monday"
  },
  {
    name: "Quarterly",
    description: "refresh cadence: Every Monday of next quarter"
  }
]

const sites = [
  {
    name: "VNAT A90",
    subItems: [
      { name: "VNAT Mfg Yield DB", href: "#" },
      { 
        name: "VNAT HVM IMT Yield Report", 
        href: "#",
        hasSubMenu: true 
      }
    ]
  },
  {
    name: "PGAT A01",
    subItems: [
      { name: "VNAT Mfg Yield DB", href: "#" },
      { 
        name: "VNAT HVM IMT Yield Report", 
        href: "#",
        hasSubMenu: true 
      }
    ]
  },
  {
    name: "KuAT A15",
    subItems: [
      { name: "VNAT Mfg Yield DB", href: "#" },
      { 
        name: "VNAT HVM IMT Yield Report", 
        href: "#",
        hasSubMenu: true 
      }
    ]
  },
  {
    name: "CRAT A06",
    subItems: [
      { name: "VNAT Mfg Yield DB", href: "#" },
      { 
        name: "VNAT HVM IMT Yield Report", 
        href: "#",
        hasSubMenu: true 
      }
    ]
  },
  {
    name: "CDAT A48",
    subItems: [
      { name: "VNAT Mfg Yield DB", href: "#" },
      { 
        name: "VNAT HVM IMT Yield Report", 
        href: "#",
        hasSubMenu: true 
      }
    ]
  }
]

export function NavigationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white hover:bg-cyan-600">
          THE DROPDOWN BUTTON THAT DOES THINGS
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {sites.map((site) => (
          <DropdownMenuSub key={site.name}>
            <DropdownMenuSubTrigger className="cursor-pointer">
              {site.name}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              {site.subItems.map((subItem) => (
                subItem.hasSubMenu ? (
                  <DropdownMenuSub key={subItem.name}>
                    <DropdownMenuSubTrigger className="cursor-pointer">
                      {subItem.name}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="min-w-[220px]">
                        {hvmOptions.map((option) => (
                          <DropdownMenuItem key={option.name} className="cursor-pointer flex flex-col items-start">
                            <span className="font-medium">{option.name}</span>
                            <span className="text-sm text-gray-500 italic">{option.description}</span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem key={subItem.name} className="cursor-pointer">
                    <a href={subItem.href} className="w-full">
                      {subItem.name}
                    </a>
                  </DropdownMenuItem>
                )
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 