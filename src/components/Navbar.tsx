"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const teams = [
	{
		name: "Open Source",
		href: "/teams/opensource",
		description: "Building open source solutions",
	},
	{
		name: "Android",
		href: "/teams/android",
		description: "Mobile app development",
	},
	{
		name: "Design",
		href: "/teams/design",
		description: "UI/UX and creative design",
	},
	{
		name: "Machine Learning",
		href: "/teams/ml",
		description: "AI and ML innovations",
	},
	{
		name: "PR & Content",
		href: "/teams/pr",
		description: "Public relations and content",
	},
	{
		name: "Data",
		href: "/teams/data",
		description: "Data science and analytics",
	},
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/70 backdrop-blur-md">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="flex h-14 items-center justify-between">
					{/* Logo */}
					<Link
						className="flex items-center transition-opacity hover:opacity-70"
						href="/"
					>
						<Image
							alt="GDG Logo"
							className="h-7 w-auto"
							height={28}
							priority
							src="/Static/Logo/gdg logo.png"
							width={105}
						/>
					</Link>

					{/* Desktop Navigation */}
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href="/" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Home
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<Link href="/#about" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										About
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger>Teams</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[380px] gap-2 p-3 md:w-[440px] md:grid-cols-2">
										{teams.map((team) => (
											<li key={team.name}>
												<NavigationMenuLink asChild>
													<Link
														className="block select-none rounded-md border border-border/40 bg-background/50 p-2.5 leading-none no-underline outline-none transition-colors hover:border-border hover:bg-muted/30"
														href={team.href}
													>
														<div className="font-medium text-foreground text-xs leading-none tracking-tight">
															{team.name}
														</div>
														<p className="mt-1 line-clamp-1 text-[11px] text-muted-foreground leading-tight">
															{team.description}
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<Link href="/#events" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Events
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<Link href="/gallery" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Gallery
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>

					{/* Desktop CTA */}
					<div className="hidden md:flex">
						<Button
							asChild
							className="h-8 border-primary/20 bg-primary/5 px-3 font-medium text-primary text-xs tracking-tight hover:bg-primary/10"
							variant="outline"
						>
							<Link
								href="https://gdg.community.dev/gdg-on-campus-gla-university-mathura-india/"
								rel="noopener noreferrer"
								target="_blank"
							>
								Join
							</Link>
						</Button>
					</div>

					{/* Mobile Menu */}
					<Sheet onOpenChange={setIsOpen} open={isOpen}>
						<SheetTrigger asChild className="md:hidden">
							<Button className="h-8 w-8" size="icon" variant="ghost">
								<Menu className="h-4 w-4" />
								<span className="sr-only">Menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							className="w-[280px] border-border/40 bg-background/95 backdrop-blur-md"
							side="right"
						>
							<nav className="mt-8 flex flex-col gap-1">
								<Link
									className="rounded-md px-3 py-2 font-medium text-sm transition-colors hover:bg-muted/30"
									href="/"
									onClick={() => setIsOpen(false)}
								>
									Home
								</Link>
								<Link
									className="rounded-md px-3 py-2 font-medium text-sm transition-colors hover:bg-muted/30"
									href="/#about"
									onClick={() => setIsOpen(false)}
								>
									About
								</Link>

								<div className="mt-2 space-y-1">
									<p className="px-3 py-2 text-muted-foreground text-xs uppercase tracking-wider">
										Teams
									</p>
									<div className="flex flex-col gap-0.5">
										{teams.map((team) => (
											<Link
												className="rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-muted/30"
												href={team.href}
												key={team.name}
												onClick={() => setIsOpen(false)}
											>
												{team.name}
											</Link>
										))}
									</div>
								</div>

								<Link
									className="rounded-md px-3 py-2 font-medium text-sm transition-colors hover:bg-muted/30"
									href="/#events"
									onClick={() => setIsOpen(false)}
								>
									Events
								</Link>
								<Link
									className="rounded-md px-3 py-2 font-medium text-sm transition-colors hover:bg-muted/30"
									href="/gallery"
									onClick={() => setIsOpen(false)}
								>
									Gallery
								</Link>

								<Button
									asChild
									className="mt-6 border-primary/20 bg-primary/5 font-medium text-primary text-sm hover:bg-primary/10"
									variant="outline"
								>
									<Link
										href="https://gdg.community.dev/gdg-on-campus-gla-university-mathura-india/"
										onClick={() => setIsOpen(false)}
										rel="noopener noreferrer"
										target="_blank"
									>
										Join Community
									</Link>
								</Button>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
