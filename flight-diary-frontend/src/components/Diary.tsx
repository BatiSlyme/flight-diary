import { useEffect, useState } from "react"
import { getAllDiaries } from '../../services/diaryService';
import { IDiary } from '../../types';

const Diary = () => {
    const [diaries, setDiaries] = useState<IDiary[]>([]);

    useEffect(() => {
        getAllDiaries().then(res => setDiaries(res));
    }, []);

    return (
        <div>
            <h2>Diaries:</h2>
            {diaries.map(d => {
                return <p key={d.id}>
                    id:{d.id}<br />
                    date:{d.date}<br />
                    weather:{d.weather}<br />
                    visibility:{d.visibility}<br />
                </p>
            })}
        </div>
    )
}

export default Diary;