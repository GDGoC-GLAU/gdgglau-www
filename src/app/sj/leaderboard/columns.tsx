"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Award, ExternalLink, Gamepad2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface Participant {
	name: string;
	email: string;
	profileUrl: string;
	redemptionStatus: string;
	allCompleted: string;
	skillBadges: number;
	arcadeGames: number;
}

// Helper function to convert names to title case
function toTitleCase(str: string): string {
	return str
		.toLowerCase()
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

export const columns: ColumnDef<Participant>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<Button
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					variant="ghost"
				>
					Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const name = toTitleCase(row.getValue("name"));
			const profileUrl = row.original.profileUrl;
			return (
				<Link
					className="group inline-flex items-center gap-1.5 font-medium text-primary transition-all hover:underline"
					href={profileUrl}
					rel="noopener noreferrer"
					target="_blank"
				>
					<span>{name}</span>
					<ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
				</Link>
			);
		},
	},
	{
		accessorKey: "redemptionStatus",
		header: ({ column }) => {
			return (
				<Button
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					variant="ghost"
				>
					Redemption Status
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const status = row.getValue("redemptionStatus") as string;
			return status === "Yes" ? (
				<Badge className="bg-green-500 transition-colors hover:bg-green-600">
					Redeemed
				</Badge>
			) : (
				<Badge
					className="transition-colors hover:bg-secondary/80"
					variant="secondary"
				>
					Not Redeemed
				</Badge>
			);
		},
	},
	{
		accessorKey: "allCompleted",
		header: ({ column }) => {
			return (
				<Button
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					variant="ghost"
				>
					All Completed
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const completed = row.getValue("allCompleted") as string;
			return completed === "Yes" ? (
				<Badge className="bg-green-500 transition-colors hover:bg-green-600">
					Eligible
				</Badge>
			) : (
				<Badge
					className="transition-colors hover:bg-muted/50"
					variant="outline"
				>
					In Progress
				</Badge>
			);
		},
	},
	{
		accessorKey: "skillBadges",
		header: ({ column }) => {
			return (
				<Button
					className="hover:bg-muted/50"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					variant="ghost"
				>
					<Award className="mr-2 h-4 w-4" />
					Skill Badges
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const count = row.getValue("skillBadges") as number;
			return (
				<div className="text-center">
					<Badge
						className="border-primary/20 bg-primary/5 font-semibold text-primary"
						variant="secondary"
					>
						<Award className="mr-1 inline h-3 w-3" />
						{count}
					</Badge>
				</div>
			);
		},
	},
	{
		accessorKey: "arcadeGames",
		header: ({ column }) => {
			return (
				<Button
					className="hover:bg-muted/50"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					variant="ghost"
				>
					<Gamepad2 className="mr-2 h-4 w-4" />
					Arcade Games
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const count = row.getValue("arcadeGames") as number;
			return (
				<div className="text-center">
					<Badge
						className="border-primary/20 bg-primary/5 font-semibold text-primary"
						variant="secondary"
					>
						<Gamepad2 className="mr-1 inline h-3 w-3" />
						{count}
					</Badge>
				</div>
			);
		},
	},
];
