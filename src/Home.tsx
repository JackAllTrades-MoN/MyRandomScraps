import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getScraps, Scrap } from './api';
import { Paper } from './paper/Paper';

export const Home = () => {
    const navigate = useNavigate();
    const [searchParams, _setSearchParams] = useSearchParams();
    const [scraps, setScraps] = useState<Scrap[]>([]);
    useEffect(() => {
        const filter = searchParams.get("filter");
        getScraps(filter)
            .then((scraps) => setScraps(scraps))
    }, []);
    return (
        <div className="scrap">
            {scraps.map(scrap => {
            const content = scrap.content;
            if (content.kind === 'external') {
                return (
                <Paper {...scrap} onClick={() => window.open(content.url)} />
                );
            } else {
                return (
                <Paper {...scrap} onClick={() => navigate(`${scrap.id}/detail`)} />
                );
            }
            })}
        </div>
    )
}