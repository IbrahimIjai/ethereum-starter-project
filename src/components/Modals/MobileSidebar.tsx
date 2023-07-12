import { navlinks } from "@/utils/arrays";
import Logo from "../Layout/Logo";

import React from "react";
import {
	VStack,
	Box,
	Text,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerFooter,
	Button,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
// import { DrawerProps } from "@chakra-ui/react";

interface MobileSidebarProps {
	onClose: () => void;
	isOpen: boolean;
}


export default function MobileSidebar({ onClose, isOpen }: MobileSidebarProps) {
	return (
		<Drawer
			// boxShadow="md"
			placement={"left"}
			onClose={onClose}
			isOpen={isOpen}>
			<DrawerOverlay />
			<DrawerContent bg="#0f84f1">
				<DrawerHeader borderBottomWidth="1px">
					<Logo />
				</DrawerHeader>
				<DrawerBody>
					<VStack height="100%">
						{navlinks.map((item) => {
							return (
								<Link href={item.route} key={item.name}>
									{item.name}
								</Link>
							);
						})}
					</VStack>
				</DrawerBody>
				<DrawerFooter>
					<Button variant="outline" mr={3} onClick={onClose}>
						close
					</Button>
					<Text align="center">
						Built and design by Ibrahim Ijai for learning
					</Text>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
