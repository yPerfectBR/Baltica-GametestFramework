import type * as Protocol from "@serenityjs/protocol";

export type PacketNames = {
	[K in keyof typeof Protocol]: K extends `${string}Packet`
		? K extends "Packet" | "DataPacket"
			? never
			: K
		: never;
}[keyof typeof Protocol];

export enum ProtocolList {
	"1.26.1" = 924,
	"1.26.10" = 944,
	"1.26.20" = 975,
}

export type CurrentVersion = "1.26.20";
export const CurrentVersionConst: CurrentVersion = "1.26.20";