import dataCards from '../../data.json'
import { Card } from '../components/Card'

export function Weekly() {
    return(
        <>
            {dataCards.map((dataCard, i)  => (
                <Card 
                    key={i} 
                    backgroundColor={dataCard.backgrounds?.color} 
                    backgroundImage={dataCard.backgrounds?.image} 
                    title={dataCard.title}
                    current={dataCard.timeframes.weekly.current}
                    previous={dataCard.timeframes.weekly.previous}
                />
            ))}
        </>
    )
}