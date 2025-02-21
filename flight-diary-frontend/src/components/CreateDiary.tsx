import { useState } from "react";
import { createDiary } from "../../services/diaryService";
import { Visibility, Weather } from "../../types";
const weatherOpitons =
    [
        'sunny',
        'rainy',
        'cloudy',
        'stormy',
        'windy'
    ]
const visibilityOptions = ['great',
    'good',
    'ok',
    'poor']
const CreateDiary = () => {
    const [date, setDate] = useState<string>('');
    const [weather, setWeather] = useState<Weather>('sunny');
    const [visibility, setVisibility] = useState<Visibility>('good');
    const [comment, setComment] = useState<string>('');
    const [err, setErr] = useState<string>('');

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            await createDiary({ date, weather, visibility, comment });
            setErr('');
        } catch (error) {
            setErr((error as Error).message);
        }
    }

    return (<>
        {err && <div style={{ color: 'red' }}>{err}</div>}
        <form onSubmit={onSubmit}>
            <div>
                date: <input type="text" onChange={(e) => setDate(e.target.value)} />
            </div>
            <fieldset>
                <legend>weather:</legend>
                {weatherOpitons.map((w, i) => {
                    return <div key={w} style={{ display: "inline", }}>
                        <input
                            key={w}
                            type="radio"
                            id={w}
                            name="weather"
                            value={w}
                            defaultChecked={i === 0}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeather(e.target.value as Weather)} />
                        <label htmlFor={w}>{w}</label>
                    </div>
                })}
            </fieldset>
            <fieldset>
                <legend>visibility:</legend>
                {visibilityOptions.map((w, i) => {
                    return <div key={w} style={{ display: "inline", }}>
                        <input
                            key={w}
                            type="radio"
                            id={w}
                            name="visibility"
                            value={w}
                            defaultChecked={i === 0}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVisibility(e.target.value as Visibility)} />
                        <label htmlFor={w}>{w}</label>
                    </div>
                })}
            </fieldset>
            <div>
                comment: <input type="text" onChange={(e) => setComment(e.target.value)} />
            </div>
            <button type="submit">create</button>
        </form >
    </>)

}

export default CreateDiary;