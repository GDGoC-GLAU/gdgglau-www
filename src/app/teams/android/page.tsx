import { ArrowLeft, Linkedin, Smartphone } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
	{
		name: "Prakhar",
		role: "Android Team",
		img: "/Static/ProfilePictures/AndroidTeam/Prakhar Android Team.jpg",
		linkedin: "",
	},
	{
		name: "Kartik Gaur",
		role: "Android Team",
		img: "/Static/ProfilePictures/AndroidTeam/Kartik Gaur Android Team.jpg",
		linkedin: "",
	},
];

const teamLead = {
	name: "Nikhil Chauhan",
	role: "Android Team Lead",
	img: "/Static/Logo/nikhil_chauhan_JG42kjL.webp",
	linkedin: "https://www.linkedin.com/in/niikhilchauhann/",
};

export default function AndroidTeamPage() {
	return (
		<>
			<Navbar />

			<main className="relative">
				<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
					{/* Back Button */}
					<Button asChild className="mb-8 gap-1.5" variant="ghost">
						<Link href="/">
							<ArrowLeft className="h-4 w-4" />
							Back to Home
						</Link>
					</Button>

					{/* Header */}
					<div className="fade-in slide-in-from-bottom-4 mb-12 animate-in text-center duration-700">
						<div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-primary text-xs">
							<Smartphone className="h-3.5 w-3.5" />
							Android Development
						</div>
						<h1 className="mb-4 font-semibold text-3xl tracking-tight lg:text-4xl">
							Android Team
						</h1>
						<p className="mx-auto max-w-2xl text-muted-foreground text-sm">
							Crafting beautiful and performant Android applications. From
							native Kotlin to Jetpack Compose, we build the future of mobile.
						</p>
					</div>

					{/* Team Lead */}
					<div className="fade-in slide-in-from-bottom-4 mb-12 flex animate-in justify-center delay-150 duration-700">
						<Card className="group w-full max-w-sm border border-border/40 bg-background/40 backdrop-blur-sm transition-colors hover:bg-background/60">
							<CardContent className="flex flex-col items-center p-6">
								<Badge className="mb-4 border-primary/20 bg-primary/5 text-[10px] text-primary">
									Team Lead
								</Badge>
								<Avatar className="mb-4 h-24 w-24">
									<AvatarImage
										alt={teamLead.name}
										className="object-cover"
										src={teamLead.img}
									/>
									<AvatarFallback className="border-primary/10 bg-primary/5 text-sm">
										{teamLead.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								<h3 className="mb-1 font-medium text-sm">{teamLead.name}</h3>
								<p className="mb-4 text-muted-foreground text-xs">
									{teamLead.role}
								</p>
								<Button asChild className="h-8 gap-1.5" variant="outline">
									<Link
										href={teamLead.linkedin}
										rel="noopener noreferrer"
										target="_blank"
									>
										<Linkedin className="h-3.5 w-3.5" />
										LinkedIn
									</Link>
								</Button>
							</CardContent>
						</Card>
					</div>

					{/* Team Grid */}
					<div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{teamMembers.map((member, index) => (
							<Card
								className="group fade-in slide-in-from-bottom-4 animate-in border border-border/40 bg-background/40 backdrop-blur-sm transition-colors hover:bg-background/60"
								key={member.name}
								style={{ animationDelay: `${(index + 1) * 75}ms` }}
							>
								<CardContent className="flex flex-col items-center p-4">
									<Avatar className="mb-3 h-20 w-20">
										<AvatarImage
											alt={member.name}
											className="object-cover"
											src={member.img}
										/>
										<AvatarFallback className="border-primary/10 bg-primary/5 text-xs">
											{member.name
												.split(" ")
												.map((n) => n[0])
												.join("")}
										</AvatarFallback>
									</Avatar>
									<h3 className="mb-1 font-medium text-sm">{member.name}</h3>
									<Badge className="mb-3 border-primary/20 bg-primary/5 text-[10px] text-primary">
										{member.role}
									</Badge>
									{member.linkedin && (
										<Button
											asChild
											className="h-7 gap-1.5 text-xs"
											variant="outline"
										>
											<Link
												href={member.linkedin}
												rel="noopener noreferrer"
												target="_blank"
											>
												<Linkedin className="h-3.5 w-3.5" />
												LinkedIn
											</Link>
										</Button>
									)}
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
