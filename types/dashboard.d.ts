export type TCardData = {
    title: string;
    icon: string;
    value: string;
}

export type DashboardData = {
    cardData:TCardData[],
    error: string | null,
    type: string,
}