import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import { cpfMast } from "../contains/cpfMask";
import { cepMask } from "../contains/cepMask";

export default function Recibo() {
  useEffect(() => {
    
    console.log(cpfMast('08738012960'))
    console.log(cepMask('89801251'))
  }, []);

  return (
    <Flex align="center" justify="center" color="#000">
      <Flex w="100%" maxWidth="1140px" bg="gray.50" p="8" mt="8" justify="center" borderRadius={8} flexDir="column">
        <Flex justify="space-between" alignContent="center">
          <Flex flexDir="column">
            <Text>Valdemir Luiz Abbatti</Text>
            <Text>Rua: Selistre de campos, 179 </Text>
            <Text>{cepMask('89820000')}</Text>
            <Text>{cpfMast('08738012960')}</Text>
            <Text>Xanxere-SC</Text>
          </Flex>
          <Flex alignSelf="center" flexDir="column">
            <Box border="2px" borderColor="gray.800" p="2" borderRadius={8}>
              <Text>
                <strong>{Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  }).format(80)}
                </strong>
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Divider mt="2" variant="solid" border="2px" borderColor="gray.800" />
        
      </Flex>
    </Flex>
  )
}