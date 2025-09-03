import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu'
import { cn } from "@/lib/utils"

// Define components array without type annotation
const components = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
]

export function Navigation() {
    return (
        <NavigationMenu className="max-w-2xl mx-auto px-4">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-secondary hover:bg-secondary/80">
                        Menu
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:p-6 md:w-[400px]">
                            {components.map((component) => (
                                <NavigationMenuItem key={component.href}>
                                    <NavigationMenuLink 
                                        href={component.href}
                                        className={cn(
                                            "block select-none rounded-md p-3",
                                            "hover:bg-accent hover:text-accent-foreground",
                                            "focus:bg-accent focus:text-accent-foreground"
                                        )}
                                    >
                                        {component.title}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport />
        </NavigationMenu>
    )
}