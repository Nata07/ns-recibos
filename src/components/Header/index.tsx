import { Flex, Stack, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" h="20" mt="4" px="6" mx="auto" w="100%" align="center" justify="center">
      <Flex align="center" textAlign="center" direction="column">
        <Text 
            fontSize="3xl" 
            fontWeight="bold"
            letterSpacing="tight"
            w="64">
            NS Recibos
          <Text as="span" ml="1" color="pink.500">.</Text>
        </Text>
        <Text fontSize="14px">
          A forma mais simples de emitir recibos online
          <Text as="span" ml="1" color="pink.500">!</Text>
        </Text>
      </Flex>  
    </Flex>
  )
}