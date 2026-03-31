"use client";

import { Broom, GridFour, Couch, Shovel, PawPrint, Buildings } from "@phosphor-icons/react";

const iconMap: Record<string, React.ReactNode> = {
  "Carpet Cleaning": <Broom size={72} color="#fff" weight="light" />,
  "Tile & Grout Cleaning": <GridFour size={72} color="#fff" weight="light" />,
  "Upholstery Cleaning": <Couch size={72} color="#fff" weight="light" />,
  "Aggregate Cleaning": <Shovel size={72} color="#fff" weight="light" />,
  "Pet Stain & Odor Removal": <PawPrint size={72} color="#fff" weight="light" />,
  "Commercial Cleaning": <Buildings size={72} color="#fff" weight="light" />,
};

export default function ServiceIcon({ title }: { title: string }) {
  return <>{iconMap[title] ?? null}</>;
}
