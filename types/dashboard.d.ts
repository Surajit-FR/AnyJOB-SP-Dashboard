export type TCardData = {
    title: string;
    icon: string;
    value: string;
    id:string
}

export type DashboardData = {
    cardData:TCardData[],
    error: string | null,
    type: string,
}