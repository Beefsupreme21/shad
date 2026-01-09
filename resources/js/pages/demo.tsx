import { useState } from 'react';
import { Head } from '@inertiajs/react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Kbd } from '@/components/ui/kbd';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { Slider } from '@/components/ui/slider';
import { Spinner } from '@/components/ui/spinner';
import { Switch } from '@/components/ui/switch';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Demo() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [sliderValue, setSliderValue] = useState([50]);
    const [progressValue, setProgressValue] = useState(33);

    return (
        <>
            <Head title="Shadcn UI Components Demo" />
            <div className="container mx-auto py-8 px-4 space-y-12 max-w-6xl">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Shadcn UI Components</h1>
                    <p className="text-muted-foreground">
                        Complete showcase of all available components with notes
                    </p>
                </div>

                {/* Accordion */}
                <Card>
                    <CardHeader>
                        <CardTitle>Accordion</CardTitle>
                        <CardDescription>Collapsible content sections</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is it styled?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Comes with default styles that match the other components.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>

                {/* Alert */}
                <Card>
                    <CardHeader>
                        <CardTitle>Alert</CardTitle>
                        <CardDescription>Important messages and notifications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Alert>
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                You can add components to your app using the cli.
                            </AlertDescription>
                        </Alert>
                        <Alert variant="destructive">
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>

                {/* Alert Dialog */}
                <Card>
                    <CardHeader>
                        <CardTitle>Alert Dialog</CardTitle>
                        <CardDescription>Modal dialog for confirmations</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline">Show Alert Dialog</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </CardContent>
                </Card>

                {/* Aspect Ratio */}
                <Card>
                    <CardHeader>
                        <CardTitle>Aspect Ratio</CardTitle>
                        <CardDescription>Maintain consistent aspect ratios</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                            <div className="flex items-center justify-center h-full bg-primary/10">
                                <span className="text-muted-foreground">16:9 Aspect Ratio</span>
                            </div>
                        </AspectRatio>
                    </CardContent>
                </Card>

                {/* Avatar */}
                <Card>
                    <CardHeader>
                        <CardTitle>Avatar</CardTitle>
                        <CardDescription>User profile pictures</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                        </div>
                    </CardContent>
                </Card>

                {/* Badge */}
                <Card>
                    <CardHeader>
                        <CardTitle>Badge</CardTitle>
                        <CardDescription>Status indicators and labels</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-3">
                            <Badge>Default</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="destructive">Destructive</Badge>
                            <Badge variant="outline">Outline</Badge>
                        </div>
                    </CardContent>
                </Card>

                {/* Breadcrumb */}
                <Card>
                    <CardHeader>
                        <CardTitle>Breadcrumb</CardTitle>
                        <CardDescription>Navigation hierarchy</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </CardContent>
                </Card>

                {/* Button */}
                <Card>
                    <CardHeader>
                        <CardTitle>Button</CardTitle>
                        <CardDescription>Clickable actions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-3">
                            <Button>Default</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button size="sm">Small</Button>
                            <Button size="default">Default</Button>
                            <Button size="lg">Large</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Calendar */}
                <Card>
                    <CardHeader>
                        <CardTitle>Calendar</CardTitle>
                        <CardDescription>Date picker calendar</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                    </CardContent>
                </Card>

                {/* Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Card</CardTitle>
                        <CardDescription>Container for content</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            This entire component is built with Card! It includes Header, Content, and Footer.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline">Card Footer Action</Button>
                    </CardFooter>
                </Card>

                {/* Checkbox */}
                <Card>
                    <CardHeader>
                        <CardTitle>Checkbox</CardTitle>
                        <CardDescription>Binary selection input</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Accept terms and conditions</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="newsletter" defaultChecked />
                            <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                        </div>
                    </CardContent>
                </Card>

                {/* Collapsible */}
                <Card>
                    <CardHeader>
                        <CardTitle>Collapsible</CardTitle>
                        <CardDescription>Show/hide content</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Collapsible>
                            <CollapsibleTrigger asChild>
                                <Button variant="outline">Toggle</Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-4 p-4 border rounded-md">
                                <p>This content can be toggled on and off.</p>
                            </CollapsibleContent>
                        </Collapsible>
                    </CardContent>
                </Card>

                {/* Dialog */}
                <Card>
                    <CardHeader>
                        <CardTitle>Dialog</CardTitle>
                        <CardDescription>Modal dialog window</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Open Dialog</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit Profile</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" defaultValue="Pedro Duarte" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </CardContent>
                </Card>

                {/* Dropdown Menu */}
                <Card>
                    <CardHeader>
                        <CardTitle>Dropdown Menu</CardTitle>
                        <CardDescription>Context menu actions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Open Menu</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardContent>
                </Card>

                {/* Hover Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Hover Card</CardTitle>
                        <CardDescription>Tooltip-like card on hover</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Button variant="link">@shadcn</Button>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">@shadcn</h4>
                                    <p className="text-sm text-muted-foreground">
                                        The creator of shadcn/ui. Building beautiful components.
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </CardContent>
                </Card>

                {/* Input */}
                <Card>
                    <CardHeader>
                        <CardTitle>Input</CardTitle>
                        <CardDescription>Text input field</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="name@example.com" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                    </CardContent>
                </Card>

                {/* Input OTP */}
                <Card>
                    <CardHeader>
                        <CardTitle>Input OTP</CardTitle>
                        <CardDescription>One-time password input</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <InputOTP maxLength={6}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </CardContent>
                </Card>

                {/* Kbd */}
                <Card>
                    <CardHeader>
                        <CardTitle>Kbd</CardTitle>
                        <CardDescription>Keyboard key display</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2">
                            <span>Press</span>
                            <Kbd>⌘</Kbd>
                            <span>+</span>
                            <Kbd>K</Kbd>
                            <span>to open command menu</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Label */}
                <Card>
                    <CardHeader>
                        <CardTitle>Label</CardTitle>
                        <CardDescription>Form field labels</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-2">
                            <Label htmlFor="label-demo">Label for input</Label>
                            <Input id="label-demo" placeholder="Type here..." />
                        </div>
                    </CardContent>
                </Card>

                {/* Progress */}
                <Card>
                    <CardHeader>
                        <CardTitle>Progress</CardTitle>
                        <CardDescription>Progress indicator</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Progress value={progressValue} />
                        <div className="flex gap-2">
                            <Button size="sm" onClick={() => setProgressValue(33)}>
                                33%
                            </Button>
                            <Button size="sm" onClick={() => setProgressValue(66)}>
                                66%
                            </Button>
                            <Button size="sm" onClick={() => setProgressValue(100)}>
                                100%
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Radio Group */}
                <Card>
                    <CardHeader>
                        <CardTitle>Radio Group</CardTitle>
                        <CardDescription>Single selection from options</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup defaultValue="option-one">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Option One</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">Option Two</Label>
                            </div>
                        </RadioGroup>
                    </CardContent>
                </Card>

                {/* Resizable */}
                <Card>
                    <CardHeader>
                        <CardTitle>Resizable</CardTitle>
                        <CardDescription>Resizable panels (requires react-resizable-panels)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Resizable component requires react-resizable-panels package. Component is available but
                            needs proper setup. Best used for split-pane interfaces and resizable layouts.
                        </p>
                    </CardContent>
                </Card>

                {/* Scroll Area */}
                <Card>
                    <CardHeader>
                        <CardTitle>Scroll Area</CardTitle>
                        <CardDescription>Custom scrollable container</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                            <div className="space-y-2">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div key={i} className="text-sm">
                                        Item {i + 1}
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>

                {/* Select */}
                <Card>
                    <CardHeader>
                        <CardTitle>Select</CardTitle>
                        <CardDescription>Dropdown selection</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="orange">Orange</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardContent>
                </Card>

                {/* Separator */}
                <Card>
                    <CardHeader>
                        <CardTitle>Separator</CardTitle>
                        <CardDescription>Visual divider</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-1">
                            <h4 className="text-sm font-medium">Horizontal</h4>
                            <Separator />
                        </div>
                        <div className="flex items-center gap-4">
                            <span>Vertical</span>
                            <Separator orientation="vertical" className="h-4" />
                            <span>Separator</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Sheet */}
                <Card>
                    <CardHeader>
                        <CardTitle>Sheet</CardTitle>
                        <CardDescription>Slide-over panel</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline">Open Sheet</Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Edit Profile</SheetTitle>
                                    <SheetDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="sheet-name">Name</Label>
                                        <Input id="sheet-name" defaultValue="Pedro Duarte" />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </CardContent>
                </Card>

                {/* Skeleton */}
                <Card>
                    <CardHeader>
                        <CardTitle>Skeleton</CardTitle>
                        <CardDescription>Loading placeholder</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Slider */}
                <Card>
                    <CardHeader>
                        <CardTitle>Slider</CardTitle>
                        <CardDescription>Range input slider</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Slider
                            value={sliderValue}
                            onValueChange={setSliderValue}
                            max={100}
                            step={1}
                            className="w-full"
                        />
                        <p className="text-sm text-muted-foreground mt-2">Value: {sliderValue[0]}</p>
                    </CardContent>
                </Card>

                {/* Spinner */}
                <Card>
                    <CardHeader>
                        <CardTitle>Spinner</CardTitle>
                        <CardDescription>Loading spinner</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4">
                            <Spinner />
                            <span className="text-sm text-muted-foreground">Loading...</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Switch */}
                <Card>
                    <CardHeader>
                        <CardTitle>Switch</CardTitle>
                        <CardDescription>Toggle switch</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center space-x-2">
                            <Switch id="airplane-mode" />
                            <Label htmlFor="airplane-mode">Airplane Mode</Label>
                        </div>
                    </CardContent>
                </Card>

                {/* Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Table</CardTitle>
                        <CardDescription>Data table</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableCaption>A list of recent invoices.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Invoice</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>INV001</TableCell>
                                    <TableCell>Paid</TableCell>
                                    <TableCell>$250.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>INV002</TableCell>
                                    <TableCell>Pending</TableCell>
                                    <TableCell>$150.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Tabs */}
                <Card>
                    <CardHeader>
                        <CardTitle>Tabs</CardTitle>
                        <CardDescription>Tabbed interface</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="account" className="w-full">
                            <TabsList>
                                <TabsTrigger value="account">Account</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account" className="mt-4">
                                <p className="text-sm">Make changes to your account here.</p>
                            </TabsContent>
                            <TabsContent value="password" className="mt-4">
                                <p className="text-sm">Change your password here.</p>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* Textarea */}
                <Card>
                    <CardHeader>
                        <CardTitle>Textarea</CardTitle>
                        <CardDescription>Multi-line text input</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Type your message here." />
                        </div>
                    </CardContent>
                </Card>

                {/* Toggle */}
                <Card>
                    <CardHeader>
                        <CardTitle>Toggle</CardTitle>
                        <CardDescription>Toggle button</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2">
                            <Toggle aria-label="Toggle italic">
                                <span>Italic</span>
                            </Toggle>
                            <Toggle aria-label="Toggle bold" pressed>
                                <span>Bold</span>
                            </Toggle>
                        </div>
                    </CardContent>
                </Card>

                {/* Toggle Group */}
                <Card>
                    <CardHeader>
                        <CardTitle>Toggle Group</CardTitle>
                        <CardDescription>Group of toggle buttons</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ToggleGroup type="single">
                            <ToggleGroupItem value="left" aria-label="Left aligned">
                                <span>Left</span>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="center" aria-label="Center aligned">
                                <span>Center</span>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="right" aria-label="Right aligned">
                                <span>Right</span>
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </CardContent>
                </Card>

                {/* Tooltip */}
                <Card>
                    <CardHeader>
                        <CardTitle>Tooltip</CardTitle>
                        <CardDescription>Hover tooltip</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline">Hover me</Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>This is a tooltip</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </CardContent>
                </Card>

                {/* Components that need special setup */}
                <Card>
                    <CardHeader>
                        <CardTitle>Components Requiring Special Setup</CardTitle>
                        <CardDescription>These need additional configuration or data</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-semibold mb-2">Button Group</h4>
                            <p className="text-sm text-muted-foreground">
                                Not available in registry - use Button components with flex/gap utilities instead
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Chart</h4>
                            <p className="text-sm text-muted-foreground">
                                Requires recharts library and data - best used with actual data visualization needs
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Carousel</h4>
                            <p className="text-sm text-muted-foreground">
                                Requires embla-carousel-react - best for image galleries or content sliders
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Command</h4>
                            <p className="text-sm text-muted-foreground">
                                Command palette - requires search functionality and command list
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Context Menu</h4>
                            <p className="text-sm text-muted-foreground">
                                Right-click menu - right-click the demo area to see it
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Data Table</h4>
                            <p className="text-sm text-muted-foreground">
                                Advanced table with sorting/filtering - use Table component for basic needs
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Date Picker</h4>
                            <p className="text-sm text-muted-foreground">
                                Not available in registry - use Calendar component instead
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Drawer</h4>
                            <p className="text-sm text-muted-foreground">
                                Mobile-friendly drawer - similar to Sheet but optimized for mobile
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Empty</h4>
                            <p className="text-sm text-muted-foreground">
                                Empty state component - best used when showing no data/results
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Field</h4>
                            <p className="text-sm text-muted-foreground">
                                Form field wrapper - typically used with Form component
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Form</h4>
                            <p className="text-sm text-muted-foreground">
                                Form validation wrapper - requires react-hook-form and zod
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Input Group</h4>
                            <p className="text-sm text-muted-foreground">
                                Not available in registry - use Input with flex utilities
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Item</h4>
                            <p className="text-sm text-muted-foreground">
                                List item component - best for settings panels or content lists
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Menubar</h4>
                            <p className="text-sm text-muted-foreground">
                                Application menu bar - similar to desktop app menus
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Native Select</h4>
                            <p className="text-sm text-muted-foreground">
                                Native HTML select - use Select component for styled version
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Navigation Menu</h4>
                            <p className="text-sm text-muted-foreground">
                                Complex navigation with dropdowns - best for main site navigation
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Pagination</h4>
                            <p className="text-sm text-muted-foreground">
                                Page navigation - requires total pages and current page state
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Sidebar</h4>
                            <p className="text-sm text-muted-foreground">
                                Application sidebar - complex layout component requiring navigation structure
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Sonner</h4>
                            <p className="text-sm text-muted-foreground">
                                Toast notifications - requires Toaster provider in app root (replaces deprecated Toast)
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Typography</h4>
                            <p className="text-sm text-muted-foreground">
                                Not available in registry - use standard HTML typography elements with Tailwind
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
