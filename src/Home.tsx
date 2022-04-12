import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getScraps, Scrap } from './api';
import { Paper } from './paper/Paper';

export const Home = () => {
    const navigate = useNavigate();
    const [searchParams, _setSearchParams] = useSearchParams();
    const [scraps, setScraps] = useState<Scrap[]>([]);
    const [limit, setLimit] = useState<number>(10);
    const filter = searchParams.get("filter");
    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            console.log("Development mode");
        };
    }, [])
    useEffect(() => {
        ((filter)
            ? getScraps(limit.toString(), filter)
            : getScraps(limit.toString()))
            .then(res => {
                const { data, status } = res;
                console.log(`status: ${status}`);
                console.log(`data: ${data}`);
                setScraps(data);
            });
    }, [filter]);
    return (
        <div className="scrap">
            {scraps.map(scrap => {
            const content = scrap.content;
            if (content.kind === 'external') {
                return (
                <Paper {...scrap} onClick={() => window.open(content.url)} key={scrap.id}/>
                );
            } else {
                return (
                <Paper {...scrap} onClick={() => navigate(`${scrap.id}/detail`)} key={scrap.id}/>
                );
            }
            })}
        </div>
    )
}