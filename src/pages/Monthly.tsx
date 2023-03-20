import dataCards from '../../data.json'
import { Card } from '../components/Card'

export function Monthly() {
    return(
        <>
            {dataCards.map((dataCard, i)  => (
                <Card 
                    key={i} 
                    backgroundColor={dataCard.backgrounds?.color} 
                    backgroundImage={dataCard.backgrounds?.image} 
                    title={dataCard.title}
                    current={dataCard.timeframes.monthly.current}
                    previous={dataCard.timeframes.monthly.previous}
                />
            ))}
        </>
    )
}