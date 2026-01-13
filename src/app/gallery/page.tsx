"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ArrowLeft, ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const galleryImages = [
	{ img: "/Static/EventGallery/eventgallery.webp", title: "Community Event" },
	{ img: "/Static/EventGallery/eventgallery1.webp", title: "Tech Workshop" },
	{ img: "/Static/EventGallery/eventgallery2.webp", title: "Tech Workshop" },
	{ img: "/Static/EventGallery/eventgallery3.webp", title: "Community Event" },
	{ img: "/Static/EventGallery/eventgallery4.webp", title: "Celebration" },
	{ img: "/Static/EventGallery/eventgallery5.webp", title: "Celebration" },
];

export default function GalleryPage() {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const openImage = (index: number) => {
		setSelectedIndex(index);
	};

	const closeImage = () => {
		setSelectedIndex(null);
	};

	const goToPrevious = () => {
		if (selectedIndex !== null) {
			setSelectedIndex(
				selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
			);
		}
	};

	const goToNext = () => {
		if (selectedIndex !== null) {
			setSelectedIndex(
				selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1
			);
		}
	};

	return (
		<>
			<Navbar />

			<main className="relative py-20">
				<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
					{/* Back Button */}
					<Button asChild className="mb-8 gap-2" variant="ghost">
						<Link href="/">
							<ArrowLeft className="h-4 w-4" />
							Back to Home
						</Link>
					</Button>

					{/* Header */}
					<div className="fade-in slide-in-from-bottom-4 mb-12 animate-in text-center duration-700">
						<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 font-medium text-blue-700 text-sm">
							<Images className="h-4 w-4" />
							Photo Gallery
						</div>
						<h1 className="mb-4 font-bold text-4xl text-foreground tracking-tight sm:text-5xl">
							Event{" "}
							<span className="bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent">
								Gallery
							</span>
						</h1>
						<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
							Capturing moments from our amazing events, workshops, and
							community gatherings
						</p>
					</div>

					{/* Gallery Grid */}
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{galleryImages.map((item, index) => (
							<Card
								className="group fade-in slide-in-from-bottom-4 relative animate-in cursor-pointer overflow-hidden border border-border/40 bg-background/40 backdrop-blur-sm transition-colors hover:bg-background/60"
								key={item.img}
								onClick={() => openImage(index)}
								style={{ animationDelay: `${(index + 1) * 100}ms` }}
							>
								<div className="relative aspect-[4/3] overflow-hidden">
									<Image
										alt={item.title}
										className="object-cover transition-transform duration-500 group-hover:scale-105"
										fill
										src={item.img}
									/>
									{/* Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

									{/* Badge on hover */}
									<div className="absolute right-3 bottom-3 left-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
										<Badge className="border-primary/20 bg-primary/5 text-primary text-xs">
											{item.title}
										</Badge>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</main>

			{/* Image Modal */}
			<Dialog onOpenChange={() => closeImage()} open={selectedIndex !== null}>
				<DialogContent className="max-w-5xl border-0 bg-black/95 p-0">
					<VisuallyHidden>
						<DialogTitle>
							{selectedIndex !== null
								? galleryImages[selectedIndex].title
								: "Gallery Image"}
						</DialogTitle>
					</VisuallyHidden>

					{selectedIndex !== null && (
						<div className="relative">
							{/* Close button */}
							<Button
								className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
								onClick={closeImage}
								size="icon"
								variant="ghost"
							>
								<X className="h-6 w-6" />
							</Button>

							{/* Navigation buttons */}
							<Button
								className="absolute top-1/2 left-4 z-10 -translate-y-1/2 text-white hover:bg-white/20"
								onClick={goToPrevious}
								size="icon"
								variant="ghost"
							>
								<ChevronLeft className="h-8 w-8" />
							</Button>

							<Button
								className="absolute top-1/2 right-4 z-10 -translate-y-1/2 text-white hover:bg-white/20"
								onClick={goToNext}
								size="icon"
								variant="ghost"
							>
								<ChevronRight className="h-8 w-8" />
							</Button>

							{/* Image */}
							<div className="relative aspect-video w-full">
								<Image
									alt={galleryImages[selectedIndex].title}
									className="object-contain"
									fill
									src={galleryImages[selectedIndex].img}
								/>
							</div>

							{/* Caption */}
							<div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-6">
								<p className="text-center font-medium text-lg text-white">
									{galleryImages[selectedIndex].title}
								</p>
								<p className="text-center text-sm text-white/60">
									{selectedIndex + 1} / {galleryImages.length}
								</p>
							</div>
						</div>
					)}
				</DialogContent>
			</Dialog>

			<Footer />
		</>
	);
}
