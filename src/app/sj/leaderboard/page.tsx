"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Award } from "lucide-react";
import { DataTable } from "./data-table";
import { columns, Participant } from "./columns";

export default function LeaderboardPage() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);

  useMemo(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.csv");
        const text = await response.text();
        const lines = text.split("\n");

        const data: Participant[] = [];

        for (let i = 1; i < lines.length; i++) {
          if (!lines[i].trim()) continue;

          // Parse CSV line handling quoted fields
          const regex = /"([^"]*)"|([^,]+)/g;
          const values: string[] = [];
          let match;

          while ((match = regex.exec(lines[i])) !== null) {
            values.push(match[1] || match[2] || "");
          }

          if (values.length >= 10) {
            data.push({
              name: values[0].replace(/^"|"$/g, ""),
              email: values[1].replace(/^"|"$/g, ""),
              profileUrl: values[2].replace(/^"|"$/g, ""),
              redemptionStatus: values[4].replace(/^"|"$/g, ""),
              allCompleted: values[5].replace(/^"|"$/g, ""),
              skillBadges: parseInt(values[6]) || 0,
              arcadeGames: parseInt(values[8]) || 0,
            });
          }
        }

        // Sort by skill badges (descending), then arcade games (descending)
        data.sort((a, b) => {
          if (b.skillBadges !== a.skillBadges) {
            return b.skillBadges - a.skillBadges;
          }
          return b.arcadeGames - a.arcadeGames;
        });

        setParticipants(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const eligibleCount = useMemo(
    () => participants.filter((p) => p.allCompleted === "Yes").length,
    [participants]
  );

  const totalCount = participants.length;

  return (
    <div className="relative min-h-screen w-full bg-[#f8fafc]">
      {/* Aurora Dream Diagonal Flow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
         radial-gradient(ellipse 80% 60% at 5% 40%, rgba(175, 109, 255, 0.48), transparent 67%),
        radial-gradient(ellipse 70% 60% at 45% 45%, rgba(255, 100, 180, 0.41), transparent 67%),
        radial-gradient(ellipse 62% 52% at 83% 76%, rgba(255, 235, 170, 0.44), transparent 63%),
        radial-gradient(ellipse 60% 48% at 75% 20%, rgba(120, 190, 255, 0.36), transparent 66%),
        linear-gradient(45deg, #f7eaff 0%, #fde2ea 100%)
      `,
        }}
      />
      <Header />

      {/* Main Content */}
      <main className="relative">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="mb-2 flex items-center gap-3 text-3xl font-bold text-foreground sm:text-4xl">
              Study Jams Leaderboard
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg">
              Track participant progress and achievements
            </p>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <Card className="group border-border/40 bg-card/60 shadow-sm backdrop-blur-xl transition-all hover:shadow-md hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Participants
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold sm:text-3xl">
                  {totalCount}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Registered learners
                </p>
              </CardContent>
            </Card>

            <Card className="group border-border/40 bg-card/60 shadow-sm backdrop-blur-xl transition-all hover:shadow-md hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Eligible for Swags
                </CardTitle>
                <Award className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 sm:text-3xl">
                  {eligibleCount}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {totalCount > 0
                    ? `${((eligibleCount / totalCount) * 100).toFixed(
                        1
                      )}% completion rate`
                    : "0% completion rate"}
                </p>
              </CardContent>
            </Card>

            {/* Completion Rate - Commented out for now */}
            {/* <Card className="border-border/40 bg-card/60 shadow-sm backdrop-blur-xl sm:col-span-2 lg:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Completion Rate
                </CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {totalCount > 0
                    ? ((eligibleCount / totalCount) * 100).toFixed(1)
                    : 0}
                  %
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Leaderboard Table */}
          <Card className="border-border/40 bg-card/60 shadow-sm backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl sm:text-2xl">
                Participant Rankings
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Click column headers to sort • Search to filter participants
              </p>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex h-64 items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                    <div className="text-muted-foreground">
                      Loading participants...
                    </div>
                  </div>
                </div>
              ) : (
                <DataTable columns={columns} data={participants} />
              )}
            </CardContent>
          </Card>

          {/* Legend */}
          <Card className="mt-4 border-border/40 bg-card/60 shadow-sm backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Trophy className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Pro Tip:</strong>{" "}
                    Participants who have completed all skill badges and games
                    (marked as{" "}
                    <Badge
                      variant="outline"
                      className="inline-flex mx-1 bg-green-500/10 text-green-700 border-green-500/20"
                    >
                      Eligible
                    </Badge>
                    ) are eligible for swags. Rankings are sorted by the number
                    of skill badges completed, followed by arcade games.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
