import { Card as CardChakra, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react"
import styles from './styles'
const Card: React.FC<ICardProps> = ({body}) => {
    return(
    <CardChakra style={{width: styles.width}}>
    <CardHeader>
      <Heading size={'md'}>{body.name}</Heading>
    </CardHeader>
    <CardBody>
      <Text>Usuário: {body.username}</Text>
      <Text>Email: {body.email}</Text>
    <Text>Cidade: {body.address.city}</Text>
      <Text>Cel: {body.phone}</Text>
      <Text>Nome da companhia: {body.company.name}</Text>
      <Text>Website: {body.website}</Text>
    </CardBody>
  </CardChakra>
    )
}

export default Card