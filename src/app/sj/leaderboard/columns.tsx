"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, ExternalLink, Award, Gamepad2 } from "lucide-react";
import Link from "next/link";

export type Participant = {
  name: string;
  email: string;
  profileUrl: string;
  redemptionStatus: string;
  allCompleted: string;
  skillBadges: number;
  arcadeGames: number;
};

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
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
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
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group font-medium text-primary hover:underline inline-flex items-center gap-1.5 transition-all"
        >
          <span>{name}</span>
          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      );
    },
  },
  {
    accessorKey: "redemptionStatus",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Redemption Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("redemptionStatus") as string;
      return status === "Yes" ? (
        <Badge className="bg-green-500 hover:bg-green-600 transition-colors">
          Redeemed
        </Badge>
      ) : (
        <Badge
          variant="secondary"
          className="hover:bg-secondary/80 transition-colors"
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
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          All Completed
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const completed = row.getValue("allCompleted") as string;
      return completed === "Yes" ? (
        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all shadow-sm">
          ✨ Eligible
        </Badge>
      ) : (
        <Badge
          variant="outline"
          className="hover:bg-muted/50 transition-colors"
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
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-muted/50"
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
            variant="secondary"
            className={`font-semibold transition-all ${
              count > 0 ? "bg-blue-100 text-blue-700 hover:bg-blue-200" : ""
            }`}
          >
            <Award className="mr-1 h-3 w-3 inline" />
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
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-muted/50"
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
            variant="secondary"
            className={`font-semibold transition-all ${
              count > 0
                ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                : ""
            }`}
          >
            <Gamepad2 className="mr-1 h-3 w-3 inline" />
            {count}
          </Badge>
        </div>
      );
    },
  },
];
