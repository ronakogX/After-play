// Deterministic sample schedule. Replace with server-backed availability in production.
export const demoBookedSlots: {stationId:string;date:string;start:string;minutes:number}[] = [
{stationId:"PS5-01",date:"2026-10-12",start:"18:00",minutes:60},
{stationId:"RACING-01",date:"2026-10-12",start:"19:00",minutes:120},
{stationId:"PS5-03",date:"2026-10-13",start:"16:00",minutes:60}
];