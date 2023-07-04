import {defineStore, StoreDefinition} from 'pinia';


export interface DailyReport {
    id: number;
    date: number;
    title: string;
    content: string;
    isClosed: boolean;
}

export interface DailyReportState {
    dailyReports: DailyReport[];
    filter: 'all' | 'byDate' | 'byTitle';
    nextId: number;
}

export const useDailyReports: StoreDefinition = defineStore('dailyReports', {
    state: (): DailyReportState => ({
        dailyReports: [],
        filter: 'all',
        nextId: 0,
    }),
    getters: {
        dateFilteredDailyReports(state): (date: number) => DailyReport[] {
            return (date: number): DailyReport[] => {
                return state.dailyReports.filter((report: DailyReport): boolean => report.date === date)
            };
        },

        titleFilteredDailyReports(state): (title: string) => DailyReport[] {
            return (title: string): DailyReport[] => {
                return state.dailyReports.filter((report: DailyReport): boolean => report.title === title)
            };
        },
    },
    actions: {
        addDailyReport(dailyReport: DailyReport): void {
            this.dailyReports.push({...dailyReport, id: this.nextId++});
        },
        async fetchMockDailyReports(): Promise<void> {
            const promise: Promise<DailyReport[]> = new Promise((resolve: (value: (PromiseLike<DailyReport[]> | DailyReport[])) => void): void => {
                resolve([
                    {
                        id: 1,
                        date: Date.UTC(2023, 12, 22),
                        title: 'EW-1052 Stuff to do in Frontend',
                        content: '#Markdown content for frontend ticket',
                        isClosed: false
                    },
                    {
                        id: 2,
                        date: Date.UTC(2023, 12, 23),
                        title: 'EX-654 Stuff to do in Backend',
                        content: '#Markdown content for backend ticket',
                        isClosed: false
                    },
                ])
            })

            this.dailyReports = await promise
        },
    },
});