import {defineStore} from 'pinia';
import {mockDailyReports} from "./DailyReportMockData";

export interface DailyReportState {
    dailyReports: DailyReport[];
    filter: 'all' | 'byDate' | 'byTitle';
    nextId: number;
}

export interface DailyReport {
    id: number;
    date: number;
    title: string;
    content: string;
    isClosed: boolean;
}

export const useDailyReports = defineStore('dailyReports', {
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
        async fetchDailyReports(): Promise<void> {
            const promise: Promise<DailyReport[]> = new Promise((resolve): void => {
                resolve(mockDailyReports);
            });
            this.dailyReports = await promise;
        },
    },
});