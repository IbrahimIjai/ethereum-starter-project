"use client";

import { HStack, Box, useDisclosure } from "@chakra-ui/react";
import Logo from "./Logo";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import MobileSidebar from "../Modals/MobileSidebar";


import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	
	return (
		<>
			<HStack
				position="fixed"
				bg="rgba(255, 255, 255, 0.14)"
				top="0"
				left="0"
				right="0"
				backdropBlur="16px"
				px="5%"
				py="10px"
				width="100%"
				justify="space-between">
				<Logo />
				<HStack>
					<ConnectButton />
					<Box display={["flex", "none"]}>
						<TiThMenu size={30} onClick={onOpen} />
					</Box>
				</HStack>
			</HStack>
			<MobileSidebar onClose={onClose} isOpen={isOpen} />
		</>
	);
}
