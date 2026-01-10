import { useState } from 'react';
import { Head } from '@inertiajs/react';

import { Badge } from '@/components/ui/8bit/badge';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

export default function Demo5() {
    const [health, setHealth] = useState(85);
    const [xp, setXp] = useState(65);
    const [level, setLevel] = useState(12);
    const [score, setScore] = useState(12500);

    return (
        <>
            <Head title="8-Bit Game Dashboard" />
            <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 p-4 md:p-8">
                <div className="max-w-6xl mx-auto space-y-6">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="retro text-4xl md:text-6xl text-yellow-300 mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)]">
                            RETRO GAME DASHBOARD
                        </h1>
                        <Badge variant="default" className="text-lg px-4 py-2 bg-green-500 text-white border-green-600">
                            LEVEL {level}
                        </Badge>
                    </div>

                    {/* Stats Row */}
                    <div className="grid md:grid-cols-3 gap-4">
                        <Card className="bg-red-600/90 border-red-800">
                            <CardHeader className="pb-2">
                                <CardTitle className="retro text-red-100 text-sm">HEALTH</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="retro text-red-100 text-xs">{health}%</span>
                                        <span className="text-red-200">❤️</span>
                                    </div>
                                    <Progress value={health} className="h-4 bg-red-800" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-blue-600/90 border-blue-800">
                            <CardHeader className="pb-2">
                                <CardTitle className="retro text-blue-100 text-sm">EXPERIENCE</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="retro text-blue-100 text-xs">{xp}%</span>
                                        <span className="text-blue-200">⭐</span>
                                    </div>
                                    <Progress value={xp} className="h-4 bg-blue-800" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-yellow-600/90 border-yellow-800">
                            <CardHeader className="pb-2">
                                <CardTitle className="retro text-yellow-100 text-sm">SCORE</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="retro text-yellow-100 text-2xl text-center pt-2">
                                    {score.toLocaleString()}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Game Area */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Inventory */}
                        <Card className="bg-green-700/90 border-green-800">
                            <CardHeader>
                                <CardTitle className="retro text-green-100">INVENTORY</CardTitle>
                                <CardDescription className="text-green-200">Items collected</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="grid grid-cols-4 gap-2">
                                    {['⚔️', '🛡️', '💎', '🧪', '🗝️', '📜', '🔮', '⚡'].map((item, i) => (
                                        <div
                                            key={i}
                                            className="aspect-square bg-green-800/50 border-2 border-green-900 flex items-center justify-center text-2xl hover:bg-green-600/50 transition-colors cursor-pointer"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-2">
                                    <Badge variant="secondary" className="bg-green-800 text-green-100">
                                        8/12 SLOTS
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quests */}
                        <Card className="bg-purple-700/90 border-purple-800">
                            <CardHeader>
                                <CardTitle className="retro text-purple-100">ACTIVE QUESTS</CardTitle>
                                <CardDescription className="text-purple-200">Current missions</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="bg-purple-800/50 p-3 border-2 border-purple-900">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="retro text-purple-100 text-xs">DEFEAT DRAGON</span>
                                            <Badge variant="default" className="bg-yellow-500 text-yellow-900 text-xs">
                                                75%
                                            </Badge>
                                        </div>
                                        <Progress value={75} className="h-2 bg-purple-900" />
                                    </div>
                                    <div className="bg-purple-800/50 p-3 border-2 border-purple-900">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="retro text-purple-100 text-xs">COLLECT GEMS</span>
                                            <Badge variant="default" className="bg-yellow-500 text-yellow-900 text-xs">
                                                50%
                                            </Badge>
                                        </div>
                                        <Progress value={50} className="h-2 bg-purple-900" />
                                    </div>
                                    <div className="bg-purple-800/50 p-3 border-2 border-purple-900">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="retro text-purple-100 text-xs">EXPLORE DUNGEON</span>
                                            <Badge variant="default" className="bg-yellow-500 text-yellow-900 text-xs">
                                                25%
                                            </Badge>
                                        </div>
                                        <Progress value={25} className="h-2 bg-purple-900" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Action Buttons */}
                    <Card className="bg-indigo-700/90 border-indigo-800">
                        <CardHeader>
                            <CardTitle className="retro text-indigo-100">GAME ACTIONS</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <Button
                                    variant="default"
                                    className="retro bg-red-600 hover:bg-red-700 text-white border-red-800"
                                    font="retro"
                                >
                                    ATTACK
                                </Button>
                                <Button
                                    variant="default"
                                    className="retro bg-blue-600 hover:bg-blue-700 text-white border-blue-800"
                                    font="retro"
                                >
                                    DEFEND
                                </Button>
                                <Button
                                    variant="default"
                                    className="retro bg-green-600 hover:bg-green-700 text-white border-green-800"
                                    font="retro"
                                >
                                    HEAL
                                </Button>
                                <Button
                                    variant="default"
                                    className="retro bg-yellow-600 hover:bg-yellow-700 text-white border-yellow-800"
                                    font="retro"
                                >
                                    ITEMS
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Leaderboard */}
                    <Card className="bg-orange-700/90 border-orange-800">
                        <CardHeader>
                            <CardTitle className="retro text-orange-100">LEADERBOARD</CardTitle>
                            <CardDescription className="text-orange-200">Top players this week</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {[
                                    { rank: 1, name: 'PLAYER_ONE', score: 98765 },
                                    { rank: 2, name: 'GAME_MASTER', score: 87654 },
                                    { rank: 3, name: 'LEGEND_99', score: 76543 },
                                    { rank: 4, name: 'YOU', score: score, highlight: true },
                                    { rank: 5, name: 'NEWBIE_42', score: 54321 },
                                ].map((player) => (
                                    <div
                                        key={player.rank}
                                        className={`flex items-center justify-between p-3 border-2 ${
                                            player.highlight
                                                ? 'bg-yellow-600/50 border-yellow-800'
                                                : 'bg-orange-800/50 border-orange-900'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="retro text-orange-100 text-xs">#{player.rank}</span>
                                            <span
                                                className={`retro text-xs ${
                                                    player.highlight ? 'text-yellow-200' : 'text-orange-100'
                                                }`}
                                            >
                                                {player.name}
                                            </span>
                                        </div>
                                        <span className="retro text-orange-100 text-xs">
                                            {player.score.toLocaleString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Footer Actions */}
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button variant="outline" className="retro border-white text-white hover:bg-white/20" font="retro">
                            SAVE GAME
                        </Button>
                        <Button variant="outline" className="retro border-white text-white hover:bg-white/20" font="retro">
                            SETTINGS
                        </Button>
                        <Button variant="outline" className="retro border-white text-white hover:bg-white/20" font="retro">
                            QUIT
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
