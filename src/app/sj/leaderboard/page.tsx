"use client";

import { Award, Trophy, Users } from "lucide-react";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columns, type Participant } from "./columns";
import { DataTable } from "./data-table";

export default function LeaderboardPage() {
	const [participants, setParticipants] = useState<Participant[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/data.csv");
				const text = await response.text();

				// Use PapaParse to properly parse CSV
				Papa.parse<Record<string, string>>(text, {
					header: true,
					skipEmptyLines: true,
					complete: (results) => {
						const data: Participant[] = results.data
							.map((row) => ({
								name: row["User Name"] || "",
								email: row["User Email"] || "",
								profileUrl: row["Google Cloud Skills Boost Profile URL"] || "",
								redemptionStatus: row["Access Code Redemption Status"] || "",
								allCompleted: row["All Skill Badges & Games Completed"] || "",
								skillBadges:
									Number.parseInt(row["# of Skill Badges Completed"], 10) || 0,
								arcadeGames:
									Number.parseInt(row["# of Arcade Games Completed"], 10) || 0,
							}))
							.filter((p) => p.name.trim() !== ""); // Filter out empty rows

						// Sort by skill badges (descending), then arcade games (descending)
						data.sort((a, b) => {
							if (b.skillBadges !== a.skillBadges) {
								return b.skillBadges - a.skillBadges;
							}
							return b.arcadeGames - a.arcadeGames;
						});

						setParticipants(data);
						setLoading(false);
					},
					error: (error: Error) => {
						console.error("Error parsing CSV:", error);
						setLoading(false);
					},
				});
			} catch (error) {
				console.error("Error loading data:", error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const eligibleCount = participants.filter(
		(p) => p.allCompleted === "Yes"
	).length;

	const totalCount = participants.length;

	return (
		<>
			<Navbar />

			<main className="relative py-20">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					{/* Header Section */}
					<div className="fade-in slide-in-from-bottom-4 mb-12 animate-in text-center duration-700">
						<h1 className="mb-3 font-semibold text-3xl text-foreground tracking-tight lg:text-4xl">
							Study Jams Leaderboard
						</h1>
						<p className="mx-auto max-w-xl text-muted-foreground text-sm">
							Track participant progress and achievements
						</p>
					</div>

					{/* Stats Cards */}
					<div className="fade-in slide-in-from-bottom-4 mb-12 grid animate-in gap-4 delay-100 duration-700 sm:grid-cols-2">
						<Card className="group border border-border/40 bg-background/40 backdrop-blur-sm transition-colors hover:bg-background/60">
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="font-medium text-sm">
									Total Participants
								</CardTitle>
								<Users className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
							</CardHeader>
							<CardContent>
								<div className="font-bold text-2xl sm:text-3xl">
									{totalCount}
								</div>
								<p className="mt-1 text-muted-foreground text-xs">
									Registered learners
								</p>
							</CardContent>
						</Card>

						<Card className="group border border-border/40 bg-background/40 backdrop-blur-sm transition-colors hover:bg-background/60">
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="font-medium text-sm">
									Eligible for Swags
								</CardTitle>
								<Award className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-green-600" />
							</CardHeader>
							<CardContent>
								<div className="font-bold text-2xl text-green-600 sm:text-3xl">
									{eligibleCount}
								</div>
								<p className="mt-1 text-muted-foreground text-xs">
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
					<Card className="fade-in slide-in-from-bottom-4 animate-in border border-border/40 bg-background/40 backdrop-blur-sm delay-200 duration-700">
						<CardHeader className="space-y-1">
							<CardTitle className="text-xl sm:text-2xl">
								Participant Rankings
							</CardTitle>
							<p className="text-muted-foreground text-sm">
								Click column headers to sort • Search to filter participants
							</p>
						</CardHeader>
						<CardContent>
							{loading ? (
								<div className="flex h-64 items-center justify-center">
									<div className="flex flex-col items-center gap-3">
										<div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
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
					<Card className="fade-in slide-in-from-bottom-4 mt-4 animate-in border border-border/40 bg-background/40 backdrop-blur-sm delay-300 duration-700">
						<CardContent className="pt-6">
							<div className="flex items-start gap-3">
								<div className="rounded-full bg-primary/10 p-2">
									<Trophy className="h-4 w-4 text-primary" />
								</div>
								<div className="flex-1">
									<p className="text-muted-foreground text-sm leading-relaxed">
										<strong className="text-foreground">Pro Tip:</strong>{" "}
										Participants who have completed all skill badges and games
										(marked as{" "}
										<Badge
											className="mx-1 inline-flex border-green-500/20 bg-green-500/10 text-green-700"
											variant="outline"
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
			<Footer />
		</>
	);
}
