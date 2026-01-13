"use client";

import { Linkedin, Users } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const team = [
	{
		name: "Shubhang Dixit",
		role: "GDGoC Organizer",
		img: "/Static/Logo/shubhang_dixit.webp",
		linkedin: "https://www.linkedin.com/in/shubhang-dixit/",
		teamLink: null,
	},
	{
		name: "Ritee",
		role: "Vice President / PR Lead",
		img: "/Static/Logo/ritee_ravi.webp",
		linkedin: "https://www.linkedin.com/in/ritee-/",
		teamLink: "/teams/pr",
	},
	{
		name: "Mohammad Almas",
		role: "Vice President",
		img: "/Static/Logo/mohammad_almas_mq5KKGT.webp",
		linkedin: "https://www.linkedin.com/in/mohammad-almas1/",
		teamLink: null,
	},
	{
		name: "Suryansh Agarwal",
		role: "General Secretary / Data Lead",
		img: "/Static/Logo/suryansh_agarwal_QHWAKuW.webp",
		linkedin: "https://www.linkedin.com/in/suryansh-agarwal-b55232289/",
		teamLink: "/teams/data",
	},
	{
		name: "Rupam Ganguly",
		role: "Machine Learning Lead",
		img: "/Static/Logo/rupam_ganguly_iBpF6Bd.webp",
		linkedin: "https://www.linkedin.com/in/rupam-ganguly-88329328b/",
		teamLink: "/teams/ml",
	},
	{
		name: "Shubh Sachar",
		role: "Design Lead",
		img: "/Static/Logo/shubh_sachar.webp",
		linkedin: "https://www.linkedin.com/in/shubh-sachar-baa332292/",
		teamLink: "/teams/design",
	},
	{
		name: "Nikhil Chauhan",
		role: "Android Team Lead",
		img: "/Static/Logo/nikhil_chauhan_JG42kjL.webp",
		linkedin: "https://www.linkedin.com/in/niikhilchauhann/",
		teamLink: "/teams/android",
	},
	{
		name: "Saksham Kushwaha",
		role: "Open Source Lead",
		img: "/Static/Logo/saksham_kushwaha_yn5Hfcd.webp",
		linkedin: "https://www.linkedin.com/in/sakshamkushwaha/",
		teamLink: "/teams/opensource",
	},
];

export default function TeamSection() {
	return (
		<section className="relative w-full py-20">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				{/* Section Header */}
				<div className="fade-in slide-in-from-bottom-4 mb-12 animate-in text-center duration-700">
					<h2 className="mb-3 font-semibold text-3xl text-foreground tracking-tight lg:text-4xl">
						Meet Our Team
					</h2>
					<p className="mx-auto max-w-xl text-muted-foreground text-sm">
						The passionate individuals driving innovation and building our
						community
					</p>
				</div>

				{/* Team Grid */}
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{team.map((member, index) => (
						<Card
							className="group fade-in slide-in-from-bottom-4 relative animate-in overflow-hidden border border-border/40 bg-background/40 backdrop-blur-sm transition-colors hover:bg-background/60"
							key={member.name}
							style={{ animationDelay: `${(index + 1) * 75}ms` }}
						>
							<CardContent className="relative flex flex-col items-center p-5">
								{/* Avatar */}
								<div className="relative mb-3">
									<Avatar className="h-20 w-20 border border-border/40">
										<AvatarImage
											alt={member.name}
											className="object-cover"
											src={member.img}
										/>
										<AvatarFallback className="bg-primary/5 text-base text-primary">
											{member.name
												.split(" ")
												.map((n) => n[0])
												.join("")}
										</AvatarFallback>
									</Avatar>
								</div>

								{/* Info */}
								<h3 className="mb-1 text-center font-semibold text-foreground text-sm">
									{member.name}
								</h3>
								<Badge
									className="mb-3 border-primary/20 bg-primary/5 text-[10px] text-primary"
									variant="secondary"
								>
									{member.role}
								</Badge>

								{/* Actions */}
								<div className="mt-auto flex gap-1.5">
									<Button
										asChild
										className="h-7 gap-1 px-2 text-[10px]"
										size="sm"
										variant="outline"
									>
										<Link
											href={member.linkedin}
											rel="noopener noreferrer"
											target="_blank"
										>
											<Linkedin className="h-3 w-3" />
											LinkedIn
										</Link>
									</Button>
									{member.teamLink && (
										<Button
											asChild
											className="h-7 gap-1 px-2 text-[10px]"
											size="sm"
											variant="outline"
										>
											<Link href={member.teamLink}>
												<Users className="h-3 w-3" />
												Team
											</Link>
										</Button>
									)}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
