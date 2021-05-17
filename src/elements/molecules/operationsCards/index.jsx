import Card from './style';
import Text from '../../atoms/textField';

const OperationCard = ({ num, type, date, value}) => {
    const capitalize = (string) => {
        const firstLetter = string[0].toUpperCase()
        const capitalized = string.replace(string[0], firstLetter)

        return capitalized
    }

    const serializeDate = (dates) => {
        const date = dates.substring(0, 10)
        const time = dates.substring(11, 19)
        const hour = parseInt(time.substring(0, 3)) - 3
        if (hour < 0) {
            hour += 24
        }
        const serializedTime = hour.toString() + time.substring(2, 8)



        return `${date} as ${serializedTime}`
    }

    console.log(date[0])

    return(
        <Card>
            <div className = "up">
                <Text content = {`Operação de: ${capitalize(type)}`} size = "1.5rem" margin = "1vh 2vw"/>
                <Text content = {`Feita em: ${serializeDate(date)}`} size = "1.5rem" margin = "1vh 2vw"/>
            </div>
            <div className = "down">
                <Text content = {`Valor: R$${value},00`} size = "1.5rem" margin = "1vh 2vw"/>
                <Text content = {`Operação: nª${num.toString().padStart(3, "0")}`} size = "1.5rem" margin = "1vh 2vw"/>
            </div>
        </Card>
    )
}

export default OperationCard