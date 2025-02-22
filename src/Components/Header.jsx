import { NavLink, useNavigate } from 'react-router-dom';
import { useBreakpoint, Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, HStack, Text } from '@chakra-ui/layout';
import { MOBILE_DEVICES, ROUTES } from '../utils/constants';
import React from "react";

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const navMenuColor = useColorModeValue('#000', '#fff');
	const breakpoint = useBreakpoint();
	const isMobile = MOBILE_DEVICES.includes(breakpoint);
	const navigate = useNavigate();

	const navigateHome = () => {
		if (isMobile) {
			document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
		} else {
			navigate('/');
		}
	};

	return (
		<Box
			p={5}
			background={useColorModeValue('white', 'gray.900')}
			shadow='sm'
			borderRadius={{ base: 0, sm: 'md' }}
			position={{ base: 'fixed', md: 'relative' }}
			zIndex='1000'
			width={{ base: '100%', md: '100%' }}
		>
			<HStack justifyContent={{ base: 'space-between', md: 'space-around' }}>
				<Box cursor='pointer' onClick={navigateHome}>
					<Image w={"10%"} src="https://vighor.com/templates/hugue-theme-main/img/logo-primary.png"/>
				</Box>

				<HStack justifyContent='space-between' spacing={{ base: 4, md: 12 }}>
					<HStack
						as='nav'
						display={{ base: 'none', md: 'block' }}
						spacing={{ md: '6', lg: '10', xl: '16' }}
					>
						{ROUTES.map(({ to, label }) => (
							<Text
								as={NavLink}
								to={to}
								fontSize='small'
								letterSpacing={{ md: '2px', lg: '4px' }}
								style={({ isActive }) => ({
									color: isActive ? navMenuColor : '#858585',
								})}
								key={label}
							>
								{label}
							</Text>
						))}
					</HStack>
					<Button onClick={toggleColorMode}>
						{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
					</Button>
				</HStack>
			</HStack>
		</Box>
	);
};

export default Header;
