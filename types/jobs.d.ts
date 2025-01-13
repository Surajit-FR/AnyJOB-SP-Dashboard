export type IJobDetail = {
    name: string
    createdAt: string
    date: string
    email: string
    phone: string
    address: string
    type: string[]
    imageUrl: string[]
    detail: string
}

export type JobsState = {
    job: IJobDetail
    error: string | null,
    type: string,
    filteredJob?: any,
    jobSuccess?:boolean
}