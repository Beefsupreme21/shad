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
import { Textarea } from '@/components/ui/textarea';

export default function Demo3() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000);
    };

    return (
        <>
            <Head title="Welcome - Amazing Product" />
            <div className="min-h-screen bg-background">
                {/* Navigation */}
                <Header
                    logoText="Acme"
                    navItems={[
                        { label: 'Features', href: '#features' },
                        { label: 'Pricing', href: '#pricing' },
                        { label: 'About', href: '#about' },
                        { label: 'Contact', href: '#contact' },
                    ]}
                />

                {/* Hero Section */}
                <section className="container mx-auto px-4 py-20 md:py-32">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <Badge variant="secondary" className="mb-4">
                            New: Version 2.0 Released
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Build Amazing Things
                            <br />
                            <span className="text-primary">Faster Than Ever</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            The all-in-one platform that helps you create, deploy, and scale your applications
                            with ease. Join thousands of developers who ship faster.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" className="text-lg px-8">
                                Start Free Trial
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8">
                                Watch Demo
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground pt-4">
                            No credit card required • 14-day free trial • Cancel anytime
                        </p>
                    </div>
                </section>

                <Separator />

                {/* Features Section */}
                <section id="features" className="container mx-auto px-4 py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Powerful features that help you build and ship products faster
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <Card>
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <CardTitle>Lightning Fast</CardTitle>
                                <CardDescription>
                                    Built for speed with optimized performance and minimal latency
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <span className="text-2xl">🔒</span>
                                </div>
                                <CardTitle>Secure by Default</CardTitle>
                                <CardDescription>
                                    Enterprise-grade security with encryption and compliance built in
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <span className="text-2xl">📈</span>
                                </div>
                                <CardTitle>Scalable</CardTitle>
                                <CardDescription>
                                    Grows with your business from startup to enterprise scale
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <CardTitle>Beautiful Design</CardTitle>
                                <CardDescription>
                                    Stunning UI components that make your product look professional
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <span className="text-2xl">🔧</span>
                                </div>
                                <CardTitle>Easy Integration</CardTitle>
                                <CardDescription>
                                    Connect with your favorite tools and services in minutes
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <span className="text-2xl">💬</span>
                                </div>
                                <CardTitle>24/7 Support</CardTitle>
                                <CardDescription>
                                    Get help when you need it with our dedicated support team
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* Pricing Section */}
                <section id="pricing" className="container mx-auto px-4 py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Choose the plan that's right for you
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle>Starter</CardTitle>
                                <CardDescription>Perfect for individuals</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">$9</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span>✓</span>
                                        <span>Up to 5 projects</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>✓</span>
                                        <span>10GB storage</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>✓</span>
                                        <span>Email support</span>
                                    </li>
                                </ul>
                                <Button className="w-full" variant="outline">
                                    Get Started
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="border-primary">
                            <CardHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <CardTitle>Pro</CardTitle>
                                    <Badge>Popular</Badge>
                                </div>
                                <CardDescription>Best for growing teams</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">$29</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span>✓</span>
                                        <span>Unlimited projects</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>✓</span>
                                        <span>100GB storage</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>✓</span>
                                        <span>Priority support</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>✓</span>
                                        <span>Advanced analytics</span>
                                    </li>
                                </ul>
                                <Button className="w-full">Get Started</Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Enterprise</CardTitle>
                                <CardDescription>For large organizations</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">$99</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span>✓</span>
                                        <span>Everything in Pro</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>✓</span>
                                        <span>Unlimited storage</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>✓</span>
                                        <span>Dedicated support</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>✓</span>
                                        <span>Custom integrations</span>
                                    </li>
                                </ul>
                                <Button className="w-full" variant="outline">
                                    Contact Sales
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* About Section */}
                <section id="about" className="container mx-auto px-4 py-20">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Trusted by Thousands</h2>
                        <p className="text-lg text-muted-foreground">
                            We've helped companies of all sizes build amazing products. From startups to Fortune 500
                            companies, our platform powers innovation around the world.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-primary">10K+</div>
                                <div className="text-sm text-muted-foreground mt-2">Active Users</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">500+</div>
                                <div className="text-sm text-muted-foreground mt-2">Companies</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">99.9%</div>
                                <div className="text-sm text-muted-foreground mt-2">Uptime</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">24/7</div>
                                <div className="text-sm text-muted-foreground mt-2">Support</div>
                            </div>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Contact Form Section */}
                <section id="contact" className="container mx-auto px-4 py-20">
                    <div className="max-w-2xl mx-auto">
                        <Card>
                            <CardHeader className="text-center">
                                <CardTitle className="text-3xl">Get in Touch</CardTitle>
                                <CardDescription>
                                    Have a question? We'd love to hear from you. Send us a message and we'll respond
                                    as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {formSubmitted && (
                                    <Alert className="mb-6">
                                        <AlertDescription>
                                            Thank you for your message! We'll get back to you soon.
                                        </AlertDescription>
                                    </Alert>
                                )}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" placeholder="John" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" placeholder="Doe" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="How can we help?" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us more about your inquiry..."
                                            className="min-h-[150px]"
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full" size="lg">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t bg-muted/50">
                    <div className="container mx-auto px-4 py-12">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="h-6 w-6 rounded bg-primary"></div>
                                    <span className="font-bold">Acme</span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Building the future of software development.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-4">Product</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>
                                        <a href="#" className="hover:text-foreground transition-colors">
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-foreground transition-colors">
                                            Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-foreground transition-colors">
                                            Documentation
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-4">Company</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>
                                        <a href="#" className="hover:text-foreground transition-colors">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-foreground transition-colors">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-foreground transition-colors">
                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-4">Support</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>
                                        <a href="#" className="hover:text-foreground transition-colors">
                                            Help Center
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-foreground transition-colors">
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-foreground transition-colors">
                                            Privacy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Separator className="my-8" />
                        <div className="text-center text-sm text-muted-foreground">
                            © 2024 Acme. All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
