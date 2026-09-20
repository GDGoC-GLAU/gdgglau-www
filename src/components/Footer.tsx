import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LineMdLinkedin } from "@/components/icons/LineMdLinkedin";
import { MdiInstagram } from "@/components/icons/MdiInstagram";
import { RiTwitterXFill } from "@/components/icons/RiTwitterXFill";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
	{
		name: "Instagram",
		icon: MdiInstagram,
		href: "https://www.instagram.com/gdgglau/",
	},
	{
		name: "X",
		icon: RiTwitterXFill,
		href: "https://x.com/GDG_glau",
	},
	{
		name: "LinkedIn",
		icon: LineMdLinkedin,
		href: "https://www.linkedin.com/company/gdg-glau/posts/?feedView=all",
	},
];

const quickLinks = [
	{ name: "Home", href: "/" },
	{ name: "About Us", href: "/#about" },
	{ name: "Events", href: "/#events" },
	{ name: "Gallery", href: "/gallery" },
	{ name: "Connect", href: "/connect" },
	{ name: "Leaderboard", href: "/sj/leaderboard" },
];

const teams = [
	{ name: "Open Source", href: "/teams/opensource" },
	{ name: "Android", href: "/teams/android" },
	{ name: "Design", href: "/teams/design" },
	{ name: "Machine Learning", href: "/teams/ml" },
	{ name: "PR & Content", href: "/teams/pr" },
	{ name: "Data", href: "/teams/data" },
];

export default function Footer() {
	return (
		<footer className="relative w-full border-border/40 border-t bg-background/40 backdrop-blur-sm">
			<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{/* Brand Section */}
					<div className="space-y-3">
						<Image
							alt="GDG Logo"
							className="h-7 w-auto"
							height={28}
							src="/gdg-logo.svg"
							width={105}
						/>
						<p className="text-muted-foreground text-xs leading-relaxed">
							Google Developer Groups on Campus at GLA University, Mathura.
							Building a community of passionate developers.
						</p>
						<div className="flex items-center gap-1.5 text-muted-foreground text-xs">
							<MapPin className="h-3 w-3" />
							<span>GLA University, Mathura, India</span>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="mb-3 font-semibold text-foreground text-xs uppercase tracking-wider">
							Quick Links
						</h3>
						<ul className="space-y-1.5">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<Link
										className="text-muted-foreground text-xs transition-colors hover:text-foreground"
										href={link.href}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Teams */}
					<div>
						<h3 className="mb-3 font-semibold text-foreground text-xs uppercase tracking-wider">
							Our Teams
						</h3>
						<ul className="space-y-1.5">
							{teams.map((team) => (
								<li key={team.name}>
									<Link
										className="text-muted-foreground text-xs transition-colors hover:text-foreground"
										href={team.href}
									>
										{team.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Connect */}
					<div>
						<h3 className="mb-3 font-semibold text-foreground text-xs uppercase tracking-wider">
							Connect With Us
						</h3>
						<div className="flex gap-2">
							{socialLinks.map((social) => (
								<Button
									asChild
									className="h-8 w-8"
									key={social.name}
									size="icon"
									variant="outline"
								>
									<Link
										href={social.href}
										rel="noopener noreferrer"
										target="_blank"
									>
										<social.icon className="h-4 w-4" />
										<span className="sr-only">{social.name}</span>
									</Link>
								</Button>
							))}
						</div>
						<div className="mt-4">
							<Button
								asChild
								className="h-8 w-full border-primary/20 bg-primary px-3 text-primary-foreground text-xs tracking-tight hover:bg-primary/90"
							>
								<Link
									href="https://gdg.community.dev/gdg-on-campus-gla-university-mathura-india/"
									rel="noopener noreferrer"
									target="_blank"
								>
									Join Community
								</Link>
							</Button>
						</div>
					</div>
				</div>

				<Separator className="my-8" />

				<div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row">
					<p className="text-muted-foreground text-xs">
						© {new Date().getFullYear()} GDG On Campus - GLA University Mathura
					</p>
					<p className="text-muted-foreground text-xs">
						Built by Google Developers
					</p>
				</div>
			</div>
		</footer>
	);
}
