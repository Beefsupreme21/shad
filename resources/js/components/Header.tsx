import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

interface HeaderProps {
    logo?: React.ReactNode;
    logoText?: string;
    navItems?: Array<{
        label: string;
        href?: string;
        items?: Array<{ label: string; href: string; description?: string }>;
    }>;
    actions?: React.ReactNode;
    className?: string;
}

export function Header({ logo, logoText = 'Acme', navItems, actions, className }: HeaderProps) {
    return (
        <header className={`border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className || ''}`}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        {logo || (
                            <>
                                <div className="h-8 w-8 rounded-lg bg-primary"></div>
                                <span className="text-xl font-bold">{logoText}</span>
                            </>
                        )}
                    </div>

                    {/* Navigation */}
                    {navItems && navItems.length > 0 && (
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navItems.map((item, index) => (
                                    <NavigationMenuItem key={index}>
                                        {item.items ? (
                                            <>
                                                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                        {item.items.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <NavigationMenuLink asChild>
                                                                    <a
                                                                        href={subItem.href}
                                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                                    >
                                                                        <div className="text-sm font-medium leading-none">
                                                                            {subItem.label}
                                                                        </div>
                                                                        {subItem.description && (
                                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                                {subItem.description}
                                                                            </p>
                                                                        )}
                                                                    </a>
                                                                </NavigationMenuLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </>
                                        ) : (
                                            <a
                                                href={item.href}
                                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                            >
                                                {item.label}
                                            </a>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {actions || (
                            <>
                                <Button variant="ghost" size="sm">
                                    Sign In
                                </Button>
                                <Button size="sm">Get Started</Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
