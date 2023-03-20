import { Card } from "../components/Card";
import dataCards from '../../data.json'

export function Daily() {
    return(
        <>
            {dataCards.map((dataCard, i)  => (
                <Card 
                    key={i} 
                    backgroundColor={dataCard.backgrounds?.color} 
                    backgroundImage={dataCard.backgrounds?.image} 
                    title={dataCard.title}
                    current={dataCard.timeframes.daily.current}
                    previous={dataCard.timeframes.daily.previous}
                />
            ))}
        </>

    )
}