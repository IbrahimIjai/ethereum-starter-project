"use client"

import * as React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiConfig, demoAppInfo } from "../wagmi/index";

import theme from "@/chakra/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = React.useState(false);
	React.useEffect(() => setMounted(true), []);
	return (
		<CacheProvider>
			<ChakraProvider theme={theme}>
				<WagmiConfig config={wagmiConfig}>
					<RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
						{mounted && children}
					</RainbowKitProvider>
				</WagmiConfig>
			</ChakraProvider>
		</CacheProvider>
	);
}
