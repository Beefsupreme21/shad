import { useState } from 'react';
import { Head } from '@inertiajs/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

export default function Demo2() {
    const [profileProgress] = useState(75);

    return (
        <>
            <Head title="User Profile" />
            <div className="min-h-screen bg-background">
                {/* Header */}
                <header className="border-b">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold">My Account</h1>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        Menu
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>

                <div className="container mx-auto px-4 py-8 max-w-6xl">
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Left Column - Profile Card */}
                        <div className="md:col-span-1">
                            <Card>
                                <CardHeader className="text-center">
                                    <div className="flex justify-center mb-4">
                                        <Avatar className="h-24 w-24">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <CardTitle>John Doe</CardTitle>
                                    <CardDescription>john.doe@example.com</CardDescription>
                                    <div className="flex justify-center gap-2 mt-2">
                                        <Badge>Pro</Badge>
                                        <Badge variant="secondary">Verified</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-muted-foreground">Profile Complete</span>
                                            <span className="font-medium">{profileProgress}%</span>
                                        </div>
                                        <Progress value={profileProgress} />
                                    </div>
                                    <Separator />
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Member since</span>
                                            <span>Jan 2024</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Last active</span>
                                            <span>2 hours ago</span>
                                        </div>
                                    </div>
                                    <Button className="w-full" variant="outline">
                                        Edit Profile
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column - Main Content */}
                        <div className="md:col-span-2 space-y-6">
                            <Tabs defaultValue="profile" className="w-full">
                                <TabsList className="grid w-full grid-cols-4">
                                    <TabsTrigger value="profile">Profile</TabsTrigger>
                                    <TabsTrigger value="settings">Settings</TabsTrigger>
                                    <TabsTrigger value="billing">Billing</TabsTrigger>
                                    <TabsTrigger value="activity">Activity</TabsTrigger>
                                </TabsList>

                                {/* Profile Tab */}
                                <TabsContent value="profile" className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Personal Information</CardTitle>
                                            <CardDescription>Update your personal details</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="grid gap-4 md:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName">First Name</Label>
                                                    <Input id="firstName" defaultValue="John" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName">Last Name</Label>
                                                    <Input id="lastName" defaultValue="Doe" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" type="email" defaultValue="john.doe@example.com" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="bio">Bio</Label>
                                                <Textarea
                                                    id="bio"
                                                    placeholder="Tell us about yourself"
                                                    defaultValue="Software developer passionate about building great user experiences."
                                                    className="min-h-[100px]"
                                                />
                                            </div>
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline">Cancel</Button>
                                                <Button>Save Changes</Button>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Preferences</CardTitle>
                                            <CardDescription>Customize your experience</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-2">
                                                <Label>Theme</Label>
                                                <RadioGroup defaultValue="system">
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="light" id="light" />
                                                        <Label htmlFor="light">Light</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="dark" id="dark" />
                                                        <Label htmlFor="dark">Dark</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="system" id="system" />
                                                        <Label htmlFor="system">System</Label>
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label>Email Notifications</Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Receive emails about your account activity
                                                    </p>
                                                </div>
                                                <Switch defaultChecked />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label>Marketing Emails</Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Receive emails about new features and updates
                                                    </p>
                                                </div>
                                                <Switch />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* Settings Tab */}
                                <TabsContent value="settings" className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Security</CardTitle>
                                            <CardDescription>Manage your account security</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="currentPassword">Current Password</Label>
                                                <Input id="currentPassword" type="password" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="newPassword">New Password</Label>
                                                <Input id="newPassword" type="password" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                                <Input id="confirmPassword" type="password" />
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="twoFactor" />
                                                <Label htmlFor="twoFactor" className="cursor-pointer">
                                                    Enable two-factor authentication
                                                </Label>
                                            </div>
                                            <Button>Update Password</Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Notifications</CardTitle>
                                            <CardDescription>Configure how you receive notifications</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label>Push Notifications</Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Receive push notifications on your device
                                                    </p>
                                                </div>
                                                <Switch defaultChecked />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label>SMS Notifications</Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Receive important updates via SMS
                                                    </p>
                                                </div>
                                                <Switch />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* Billing Tab */}
                                <TabsContent value="billing" className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <CardTitle>Subscription</CardTitle>
                                                    <CardDescription>Manage your subscription plan</CardDescription>
                                                </div>
                                                <Badge>Pro Plan</Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="rounded-lg border p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-medium">Pro Plan</span>
                                                    <span className="text-2xl font-bold">$29</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    Billed monthly. Next billing date: Feb 1, 2024
                                                </p>
                                                <div className="flex gap-2">
                                                    <Button variant="outline" className="flex-1">
                                                        Change Plan
                                                    </Button>
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <Button variant="destructive" className="flex-1">
                                                                Cancel Subscription
                                                            </Button>
                                                        </DialogTrigger>
                                                        <DialogContent>
                                                            <DialogHeader>
                                                                <DialogTitle>Cancel Subscription</DialogTitle>
                                                                <DialogDescription>
                                                                    Are you sure you want to cancel your subscription?
                                                                    You'll lose access to Pro features at the end of
                                                                    your billing period.
                                                                </DialogDescription>
                                                            </DialogHeader>
                                                            <DialogFooter>
                                                                <Button variant="outline">Keep Subscription</Button>
                                                                <Button variant="destructive">Cancel Subscription</Button>
                                                            </DialogFooter>
                                                        </DialogContent>
                                                    </Dialog>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Payment Method</CardTitle>
                                            <CardDescription>Manage your payment methods</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between rounded-lg border p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-16 rounded bg-muted flex items-center justify-center">
                                                        <span className="text-xs font-medium">VISA</span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">•••• •••• •••• 4242</p>
                                                        <p className="text-sm text-muted-foreground">Expires 12/25</p>
                                                    </div>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Update
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* Activity Tab */}
                                <TabsContent value="activity" className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Recent Activity</CardTitle>
                                            <CardDescription>Your account activity log</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Action</TableHead>
                                                        <TableHead>Date</TableHead>
                                                        <TableHead>Status</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>Password changed</TableCell>
                                                        <TableCell>Jan 8, 2024</TableCell>
                                                        <TableCell>
                                                            <Badge variant="secondary">Success</Badge>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Profile updated</TableCell>
                                                        <TableCell>Jan 5, 2024</TableCell>
                                                        <TableCell>
                                                            <Badge variant="secondary">Success</Badge>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Login from new device</TableCell>
                                                        <TableCell>Jan 3, 2024</TableCell>
                                                        <TableCell>
                                                            <Badge variant="outline">Info</Badge>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Subscription renewed</TableCell>
                                                        <TableCell>Jan 1, 2024</TableCell>
                                                        <TableCell>
                                                            <Badge variant="secondary">Success</Badge>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
