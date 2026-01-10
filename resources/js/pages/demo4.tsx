import { useState } from 'react';
import { Head } from '@inertiajs/react';

import { Header } from '@/components/Header';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

export default function Demo4() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000);
    };

    return (
        <>
            <Head title="Modern Dashboard - Demo4" />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <Header
                    logoText="ModernApp"
                    navItems={[
                        { label: 'Dashboard', href: '#' },
                        { label: 'Projects', href: '#' },
                        { label: 'Team', href: '#' },
                    ]}
                />

                <div className="container mx-auto px-4 py-12 max-w-7xl">
                    {/* Hero Section with Gradient Cards */}
                    <div className="mb-12">
                        <div className="text-center mb-8">
                            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                                New Feature
                            </Badge>
                            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Modern Dashboard Experience
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Built with shadcn/ui components from custom registries. See how different
                                styling can transform the same components.
                            </p>
                        </div>

                        {/* Stats Cards with Gradient Backgrounds */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <Card className="border-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-blue-600 dark:text-blue-400">Active Users</CardTitle>
                                    <CardDescription>Current month</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">12,543</div>
                                    <p className="text-sm text-muted-foreground mt-2">+23% from last month</p>
                                </CardContent>
                            </Card>

                            <Card className="border-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-purple-600 dark:text-purple-400">Revenue</CardTitle>
                                    <CardDescription>This quarter</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">$89,432</div>
                                    <p className="text-sm text-muted-foreground mt-2">+45% from last quarter</p>
                                </CardContent>
                            </Card>

                            <Card className="border-0 bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-green-600 dark:text-green-400">Projects</CardTitle>
                                    <CardDescription>In progress</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-bold text-green-600 dark:text-green-400">47</div>
                                    <p className="text-sm text-muted-foreground mt-2">8 completed this week</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <Separator className="my-12" />

                    {/* Feature Tabs */}
                    <Tabs defaultValue="overview" className="w-full mb-12">
                        <TabsList className="grid w-full grid-cols-3 mb-8">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="analytics">Analytics</TabsTrigger>
                            <TabsTrigger value="settings">Settings</TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card className="border-2 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
                                    <CardHeader>
                                        <CardTitle>Quick Actions</CardTitle>
                                        <CardDescription>Common tasks at your fingertips</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <Button className="w-full" variant="outline">
                                            Create New Project
                                        </Button>
                                        <Button className="w-full" variant="outline">
                                            Invite Team Member
                                        </Button>
                                        <Button className="w-full" variant="outline">
                                            View Reports
                                        </Button>
                                    </CardContent>
                                </Card>

                                <Card className="border-2 border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/20">
                                    <CardHeader>
                                        <CardTitle>Recent Activity</CardTitle>
                                        <CardDescription>Latest updates and changes</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">Project Alpha updated</p>
                                                <p className="text-xs text-muted-foreground">2 hours ago</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">New team member added</p>
                                                <p className="text-xs text-muted-foreground">5 hours ago</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">Report generated</p>
                                                <p className="text-xs text-muted-foreground">1 day ago</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="analytics">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Analytics Dashboard</CardTitle>
                                    <CardDescription>Track your performance metrics</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                                        <p className="text-muted-foreground">Analytics charts would go here</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="settings">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Settings</CardTitle>
                                    <CardDescription>Manage your preferences</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Workspace Name</Label>
                                        <Input placeholder="My Workspace" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Description</Label>
                                        <Textarea placeholder="Tell us about your workspace..." />
                                    </div>
                                    <Button>Save Changes</Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <Separator className="my-12" />

                    {/* Contact Form with Gradient Accent */}
                    <div className="max-w-2xl mx-auto">
                        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-950/20">
                            <CardHeader className="text-center">
                                <CardTitle className="text-3xl">Get in Touch</CardTitle>
                                <CardDescription>
                                    This form uses the same shadcn components but with custom gradient styling
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {formSubmitted && (
                                    <Alert className="mb-6 border-green-200 bg-green-50 dark:bg-green-950/20">
                                        <AlertDescription>
                                            Thank you! Your message has been sent successfully.
                                        </AlertDescription>
                                    </Alert>
                                )}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input
                                                id="firstName"
                                                placeholder="John"
                                                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input
                                                id="lastName"
                                                placeholder="Doe"
                                                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us what you're thinking..."
                                            className="min-h-[150px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                                        size="lg"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
