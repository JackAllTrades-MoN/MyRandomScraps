import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';
import { getDetail, DetailRecord } from '../api';

const lbToBr = (txt: any) => {
    return (
        txt.split(/(\n)/g).map((t: any, idx: number) => (t === '\n')?<br key={idx}/>:t)
    )
}

export const Detail = () => {
    const params = useParams();
    const [detailRecord, setDetailRecord] = useState<DetailRecord | null>(null);
    useEffect(() => {
        if (params.detail_id) {
            const did = parseInt(params.detail_id);
            getDetail(did)
            .then(res => {
                const {data, status} = res;
                setDetailRecord(data);
            });
        }
    }, [])
    if (detailRecord) {
        return (
            <div className="detail-container">
                <div className="detail-caption">
                    {detailRecord.caption}
                </div>
                <div className="detail-body">
                    {lbToBr(detailRecord.body)}
                </div>
            </div>
        )
    } else {
        return <div>NowLoading</div>
    }
}