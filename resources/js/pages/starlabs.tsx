import { useState } from 'react';
import { Head } from '@inertiajs/react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FlipClock from '@/components/ui/flip-clock';
import PartitionBar, { PartitionBarSegment, PartitionBarSegmentTitle, PartitionBarSegmentValue } from '@/components/ui/partition-bar';
import ScrollFade from '@/components/ui/scroll-fade';
import StatusIndicator from '@/components/ui/status-indicator';
import Timeline, { TimelineItem, TimelineItemDate, TimelineItemTitle, TimelineItemDescription } from '@/components/ui/timeline';

export default function Starlabs() {
    const [targetDate] = useState(() => {
        const date = new Date();
        date.setDate(date.getDate() + 7);
        return date;
    });

    return (
        <>
            <Head title="8StarLabs UI Components" />
            <div className="min-h-screen bg-background p-4 md:p-8">
                <div className="container mx-auto max-w-6xl space-y-12">
                    {/* Header */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">8StarLabs UI Components</h1>
                        <p className="text-muted-foreground text-lg">
                            High-utility, niche components for developers
                        </p>
                    </div>

                    {/* Flip Clock */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Flip Clock</CardTitle>
                            <CardDescription>Animated flip clock with countdown support</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="flex justify-center">
                                <FlipClock size="lg" variant="default" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold">Countdown Timer</h3>
                                <div className="flex justify-center">
                                    <FlipClock
                                        countdown
                                        targetDate={targetDate}
                                        size="md"
                                        variant="default"
                                        showDays="always"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-sm font-semibold">Size Variations</h3>
                                <div className="space-y-8">
                                    <div className="flex flex-col items-center space-y-2">
                                        <p className="text-xs text-muted-foreground">Small</p>
                                        <FlipClock size="sm" variant="default" />
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <p className="text-xs text-muted-foreground">Medium</p>
                                        <FlipClock size="md" variant="secondary" />
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <p className="text-xs text-muted-foreground">Large</p>
                                        <FlipClock size="lg" variant="default" />
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <p className="text-xs text-muted-foreground">XL</p>
                                        <FlipClock size="xl" variant="outline" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Partition Bar */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Partition Bar</CardTitle>
                            <CardDescription>Visual representation of data segments</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="text-sm font-semibold mb-4">Server Resources</h3>
                                <PartitionBar size="md" gap={1}>
                                    <PartitionBarSegment num={45} variant="default" alignment="left">
                                        <PartitionBarSegmentTitle>CPU</PartitionBarSegmentTitle>
                                        <PartitionBarSegmentValue>45%</PartitionBarSegmentValue>
                                    </PartitionBarSegment>
                                    <PartitionBarSegment num={30} variant="secondary" alignment="center">
                                        <PartitionBarSegmentTitle>Memory</PartitionBarSegmentTitle>
                                        <PartitionBarSegmentValue>30%</PartitionBarSegmentValue>
                                    </PartitionBarSegment>
                                    <PartitionBarSegment num={15} variant="muted" alignment="right">
                                        <PartitionBarSegmentTitle>Disk</PartitionBarSegmentTitle>
                                        <PartitionBarSegmentValue>15%</PartitionBarSegmentValue>
                                    </PartitionBarSegment>
                                    <PartitionBarSegment num={10} variant="outline" alignment="left">
                                        <PartitionBarSegmentTitle>Network</PartitionBarSegmentTitle>
                                        <PartitionBarSegmentValue>10%</PartitionBarSegmentValue>
                                    </PartitionBarSegment>
                                </PartitionBar>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold mb-4">Project Budget</h3>
                                <PartitionBar size="lg" gap={2}>
                                    <PartitionBarSegment num={60} variant="default">
                                        <PartitionBarSegmentTitle>Development</PartitionBarSegmentTitle>
                                        <PartitionBarSegmentValue>$60k</PartitionBarSegmentValue>
                                    </PartitionBarSegment>
                                    <PartitionBarSegment num={25} variant="secondary">
                                        <PartitionBarSegmentTitle>Marketing</PartitionBarSegmentTitle>
                                        <PartitionBarSegmentValue>$25k</PartitionBarSegmentValue>
                                    </PartitionBarSegment>
                                    <PartitionBarSegment num={15} variant="destructive">
                                        <PartitionBarSegmentTitle>Operations</PartitionBarSegmentTitle>
                                        <PartitionBarSegmentValue>$15k</PartitionBarSegmentValue>
                                    </PartitionBarSegment>
                                </PartitionBar>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Status Indicators */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Status Indicator</CardTitle>
                            <CardDescription>Real-time status with animated indicators</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold">System Status</h3>
                                    <div className="space-y-3">
                                        <StatusIndicator state="active" label="All Systems Operational" size="md" />
                                        <StatusIndicator state="down" label="Service Unavailable" size="md" />
                                        <StatusIndicator state="fixing" label="Maintenance in Progress" size="md" />
                                        <StatusIndicator state="idle" label="System Idle" size="md" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold">Sizes</h3>
                                    <div className="space-y-3">
                                        <StatusIndicator state="active" label="Small" size="sm" />
                                        <StatusIndicator state="active" label="Medium" size="md" />
                                        <StatusIndicator state="active" label="Large" size="lg" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Timeline */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Timeline</CardTitle>
                            <CardDescription>Horizontal timeline with alternating cards</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Timeline orientation="horizontal" alternating>
                                <TimelineItem variant="default">
                                    <TimelineItemDate>Jan 2024</TimelineItemDate>
                                    <TimelineItemTitle>Project Launch</TimelineItemTitle>
                                    <TimelineItemDescription>
                                        Successfully launched the initial version of the product
                                    </TimelineItemDescription>
                                </TimelineItem>
                                <TimelineItem variant="secondary">
                                    <TimelineItemDate>Mar 2024</TimelineItemDate>
                                    <TimelineItemTitle>First Major Update</TimelineItemTitle>
                                    <TimelineItemDescription>
                                        Added new features based on user feedback
                                    </TimelineItemDescription>
                                </TimelineItem>
                                <TimelineItem variant="default">
                                    <TimelineItemDate>Jun 2024</TimelineItemDate>
                                    <TimelineItemTitle>Milestone Reached</TimelineItemTitle>
                                    <TimelineItemDescription>
                                        Reached 10,000 active users milestone
                                    </TimelineItemDescription>
                                </TimelineItem>
                                <TimelineItem variant="secondary">
                                    <TimelineItemDate>Sep 2024</TimelineItemDate>
                                    <TimelineItemTitle>Platform Expansion</TimelineItemTitle>
                                    <TimelineItemDescription>
                                        Expanded to new markets and regions
                                    </TimelineItemDescription>
                                </TimelineItem>
                            </Timeline>
                        </CardContent>
                    </Card>

                    {/* Scroll Fade */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Scroll Fade</CardTitle>
                            <CardDescription>Content with fade effects on scroll</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollFade axis="horizontal" className="max-w-full">
                                <div className="flex gap-4 pb-4">
                                    {Array.from({ length: 15 }).map((_, i) => (
                                        <Card key={i} className="min-w-[200px] flex-shrink-0">
                                            <CardHeader>
                                                <CardTitle className="text-sm">Card {i + 1}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground">
                                                    Scroll horizontally to see the fade effect
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </ScrollFade>
                        </CardContent>
                    </Card>

                    {/* Combined Example */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Real-World Example</CardTitle>
                            <CardDescription>Dashboard combining multiple components</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">Server Health</h3>
                                <StatusIndicator state="active" label="Online" />
                            </div>
                            <PartitionBar size="md" gap={1}>
                                <PartitionBarSegment num={75} variant="default">
                                    <PartitionBarSegmentTitle>Production</PartitionBarSegmentTitle>
                                    <PartitionBarSegmentValue>75%</PartitionBarSegmentValue>
                                </PartitionBarSegment>
                                <PartitionBarSegment num={20} variant="secondary">
                                    <PartitionBarSegmentTitle>Staging</PartitionBarSegmentTitle>
                                    <PartitionBarSegmentValue>20%</PartitionBarSegmentValue>
                                </PartitionBarSegment>
                                <PartitionBarSegment num={5} variant="muted">
                                    <PartitionBarSegmentTitle>Development</PartitionBarSegmentTitle>
                                    <PartitionBarSegmentValue>5%</PartitionBarSegmentValue>
                                </PartitionBarSegment>
                            </PartitionBar>
                            <div className="pt-4 border-t">
                                <p className="text-sm text-muted-foreground mb-2">Uptime Counter</p>
                                <FlipClock size="md" variant="default" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
