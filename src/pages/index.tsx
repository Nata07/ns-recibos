import { Flex, Button, Stack, Text, Heading, Divider, HStack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { Header } from '../components/Header'

export default function SignIn() {
  return (
    <Flex w="100%" align="center" justify="center" direction="column">
      <Header />

      <Flex as="form" w="100%" maxWidth="720px" bg="gray.800" p="8" mt="8" justify="center" borderRadius={8} flexDir="column">
        <Flex direction="column">
          <Heading fontSize="25px">Dados empresa</Heading>
          <HStack spacing="2" mt="6" align="flex-start" justify="start" textAlign="start">
            <Input label="Responsável" name="responsavel" />
            <Input label="CPF/CNPJ Responsável" name="cpf"  />
          </HStack>
          <HStack spacing="2" mt="6" align="flex-start" justify="start" textAlign="start">
            <Input label="Endereço (rua, número)" name="endereco" />
            <Input label="CEP" name="cep" />
          </HStack>

          <Divider mt="4" variant="solid" border="thin" borderColor="gray.700" />

          <Heading fontSize="25px" mt="6">Dados cliente</Heading>
          <HStack spacing="2" mt="6" align="flex-start" justify="start" textAlign="start">
            <Input label="Nome completo" name="nome" />
            <Input label="CPF/CNPJ Cliente" name="cpfCliente" />
          </HStack>
          <HStack spacing="2" mt="6" align="flex-start" justify="start" textAlign="start">
            <Input label="Serviço" name="servico" />
            <Input label="valor" name="valor" />
          </HStack>

        </Flex>
        <Button type="submit" mt="4" colorScheme="pink" size="lg">Gerar Recibo</Button>
      </Flex>
      {/* <Flex as="form" w="100%" maxWidth={360} bg="gray.800" p="8" justify="space-between" borderRadius={8} flexDir="column">
        <Stack spacing="4">
          <Heading fontSize="28px"> Dados da empresa </Heading>
          <Input name="company" label="Empresa" />
          <Input name="responsible" label="Responsável" />
          <Input name="cpf" type="text" label="CPF Responsável" />

          <Divider mt="8" variant="solid" border="thin" />
          
        </Stack>

        <Button type="submit" mt="4" colorScheme="pink" size="lg">Entrar</Button>
      </Flex> */}
    </Flex>
  )
}
