export type Visibility = 'great' | 'good' | 'ok' | 'poor';
export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'stormy' | 'windy';
export type IDiary = {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment?: string
}

export type NewDiary = Omit<IDiary, 'id'>;
