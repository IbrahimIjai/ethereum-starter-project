"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, Stack, VStack } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<VStack bg="brand.100">
			<Navbar />
			<Box minHeight="75vh">{children}</Box>
			<Footer />
		</VStack>
	);
}
