"use client"

import {
	RainbowKitProvider,
	getDefaultWallets,
	connectorsForWallets,
} from "@rainbow-me/rainbowkit";


import {
	argentWallet,
	trustWallet,
	ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";

import { configureChains, createConfig, WagmiConfig } from "wagmi";

import { bscTestnet, bsc, goerli } from "wagmi/chains";

import { publicProvider } from "wagmi/providers/public";

export const { chains, publicClient, webSocketPublicClient } = configureChains(
	[
		bsc,
		...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
			? [goerli, bscTestnet]
			: []),
	],
	[publicProvider()],
);

const projectId = "1075c8bb7de1c2c96179acc77e9d78b3";
export const demoAppInfo = {
	appName: "Trader whiz",
};

const { wallets } = getDefaultWallets({
	appName: "Trader whiz",
	projectId,
	chains,
});

const connectors = connectorsForWallets([
	...wallets,
	{
		groupName: "Other",
		wallets: [
			argentWallet({ projectId, chains }),
			ledgerWallet({ projectId, chains }),
		],
	},
]);

export const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
	webSocketPublicClient,
});