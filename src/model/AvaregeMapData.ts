export interface AvaregeMapData {
    id: string;
    sensors: number;
    avgTemperature: number;
    avgUmidity: number;
}

export interface AvarageMapDataResponse {
    "id": string;
    "region": string;
    "totalSensor": number;
    "detail": [
        {
            "avgTemp": number;
            "avgUmd": number;
        }
    ]
}