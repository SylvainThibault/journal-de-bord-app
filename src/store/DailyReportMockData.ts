import {DailyReport} from "./DailyReportStore";

export const mockDailyReports: DailyReport[] = [
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
];