import { Button, IconButton } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, HStack, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const navMenuColor = useColorModeValue('#000', '#fff');
	const navMenuBgColor = useColorModeValue('#EDF2F7', '#3A4E5A') 

	return (
		<Box
			p={5}
			background={useColorModeValue('white', 'gray.900')}
			shadow='md'
			borderRadius={{ base: 0, sm: 'md' }}
		>
			<HStack justifyContent={{ base: 'space-between', md: 'space-around' }}>
				<Text>&lt;HARI KOTHA /&gt;</Text>

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
					<Box display={{ md: 'none' }}>
						<Menu>
							<MenuButton as={IconButton} icon={<HamburgerIcon />} />
							<MenuList>
								{ROUTES.map(({ to, label }) => (
									<MenuItem
										as={NavLink}
										to={to}
										style={({ isActive }) => ({
											color: isActive ? navMenuColor : '#858585',
											background: isActive ? navMenuBgColor : 'transparent'
										})}
										key={label}
									>
										{label}
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					</Box>
				</HStack>
			</HStack>
		</Box>
	);
};

export default Header;
