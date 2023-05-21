import { Image } from '@chakra-ui/image';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, Text, VStack } from '@chakra-ui/layout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Resume from './Resume';

const About = () => {
	useDocumentTitle();

	return (
		<Box
			minHeight={{ md: 'calc(100vh - 120px)' }}
			background={useColorModeValue('gray.50', 'black')}
			p={5}
		>
			<Center minHeight={{ md: 'calc(100vh - 250px)' }}>
				<VStack>
					<Image borderRadius='6px' maxH='300px' src='/images/me.png' alt='hari kotha cover' />
					<Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight='600'>
						Hi, I'm Hugues 👋
					</Text>
					<Text fontSize={{ base: 'xl', md: '2xl' }}>
						Passionate{' '}
						<Text as='span' display='inline' borderBottomColor='gray.500' borderBottomWidth='5px'>
							Web Developer
						</Text>{' '}
						since I was 18.
					</Text>
					<Text fontSize={{ base: 'xl', md: '2xl' }} as='span' maxW={{ base: '340px', sm: '100%', md: 768 }}>
						I specialize in building responsive UI with modern{' '}
						<Text display='inline' borderBottomColor='gray.500' borderBottomWidth='5px'>
							JavaScript
						</Text>{' '}
						tools. I also have a lot of experience with PHP as I started with PHP about 11 years ago.
						I know C# because my first applications were WinForm and WPF applications.
						I know a bit of C++ and C for programming my electronic components (Arduino).
					</Text>
					<Resume />
				</VStack>
			</Center>
		</Box>
	);
};

export default About;
