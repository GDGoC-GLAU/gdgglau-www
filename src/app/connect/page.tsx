import type { ComponentType, SVGProps } from "react";
import {
	ArrowUpRight,
	UserRoundGroup,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MdiInstagram } from "@/components/icons/MdiInstagram";
import { LineMdLinkedin } from "@/components/icons/LineMdLinkedin";
import { RiTwitterXFill } from "@/components/icons/RiTwitterXFill";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type SocialLink = {
	description: string;
	handle: string;
	href: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	name: string;
	style: string;
};

const socialLinks: SocialLink[] = [
	{
		name: "GDG Community",
		handle: "GDG On Campus · GLA University",
		description:
			"Become a member, discover upcoming events, and RSVP to learn with us.",
		href: "https://gdg.community.dev/gdg-on-campus-gla-university-mathura-india/",
		icon: UserRoundGroup,
		style: "bg-blue-500/10 text-blue-700",
	},
	{
		name: "Instagram",
		handle: "@gdgglau",
		description:
			"See event highlights, community moments, and what we are building next.",
		href: "https://www.instagram.com/gdgglau/",
		icon: MdiInstagram,
		style: "bg-pink-500/10 text-pink-700",
	},
	{
		name: "LinkedIn",
		handle: "GDG GLAU",
		description:
			"Follow our professional updates, opportunities, and community milestones.",
		href: "https://www.linkedin.com/company/gdg-glau/",
		icon: LineMdLinkedin,
		style: "bg-sky-500/10 text-sky-700",
	},
	{
		name: "X",
		handle: "@GDG_glau",
		description:
			"Keep up with quick announcements, conversations, and live event updates.",
		href: "https://x.com/GDG_glau",
		icon: RiTwitterXFill,
		style: "bg-slate-500/10 text-slate-700",
	},
];

export default function ConnectPage() {
	return (
		<>
			<Navbar />
			<main className="relative overflow-hidden py-16 sm:py-20">
				<div className="mx-auto max-w-5xl px-6 lg:px-8">
					<section className="mx-auto max-w-2xl text-center">
						<Badge className="fade-in slide-in-from-bottom-4 animate-in border-primary/15 bg-primary/5 px-3 py-1 font-medium text-primary duration-700">
							{/* <Community className="mr-1.5 h-3.5 w-3.5" /> */}
							Stay in the loop
						</Badge>
						<h1 className="fade-in slide-in-from-bottom-4 mt-5 animate-in font-semibold text-4xl text-foreground tracking-tight delay-150 duration-700 sm:text-5xl">
							Let&apos;s stay{" "}
							<span className="bg-gradient-to-r from-blue-600 via-primary to-pink-500 bg-clip-text text-transparent">
								connected
							</span>
						</h1>
						<p className="fade-in slide-in-from-bottom-4 mt-5 animate-in text-muted-foreground text-sm leading-relaxed delay-300 duration-700 sm:text-base">
							Follow GDG On Campus GLA University for workshops, events,
							opportunities, and the people shaping our developer community.
						</p>
					</section>

					<section
						aria-label="GDG GLAU social profiles"
						className="mt-12 grid gap-4 sm:grid-cols-2"
					>
						{socialLinks.map((social) => {
							const Icon = social.icon;

							return (
								<Card
									className="group fade-in slide-in-from-bottom-4 animate-in border-border/40 bg-background/45 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-background/70 hover:shadow-md"
									key={social.name}
								>
									<CardContent className="p-5 sm:p-6">
										<div className="flex items-start justify-between gap-4">
											<div className={"rounded-lg p-2.5" + social.style}>
												<Icon className="h-5 w-5" />
											</div>
											<ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
										</div>
										<h2 className="mt-5 font-semibold text-foreground text-lg tracking-tight">
											{social.name}
										</h2>
										<p className="mt-1 text-muted-foreground text-xs">
											{social.handle}
										</p>
										<p className="mt-4 min-h-10 text-muted-foreground text-sm leading-relaxed">
											{social.description}
										</p>
										<Button
											asChild
											className="mt-5 h-8 w-full text-xs"
											variant="outline"
										>
											<a
												href={social.href}
												rel="noopener noreferrer"
												target="_blank"
											>
												Visit {social.name}
												<ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
											</a>
										</Button>
									</CardContent>
								</Card>
							);
						})}
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
}
