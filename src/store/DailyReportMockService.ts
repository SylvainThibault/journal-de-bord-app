import {mockDailyReports} from "./DailyReportMockData";
import {DailyReport} from "./DailyReportStore";

const fetch = (mockData: DailyReport[], time: number = 0): Promise<DailyReport[]> => {
    return new Promise((resolve): void => {
        setTimeout((): void => {
            resolve(mockData)
        }, time)
    })
}
export default {
    fetchDailyReports(): Promise<DailyReport[]> {
        return fetch(mockDailyReports, 1000) // wait 1s before returning posts
    }
}