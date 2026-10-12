import { gamePasses } from "../data/gamepasses";
import { stations } from "../data/stations";
import { demoBookedSlots } from "../data/availability";
import { demoRedeemCodes } from "../data/demo-redeem-codes";
const KEY="playroom-demo-v1";
export type Booking={id:string;stationId:string;date:string;start:string;minutes:number;cost:number;source:"cash"|"pass";status:"upcoming"|"cancelled"|"completed";createdAt:string};
export type Transaction={id:string;label:string;amount:number;kind:"purchase"|"booking"|"reward"|"redeem";date:string};
export type DemoState={phone:string;loggedIn:boolean;passes:Record<string,number>;bookings:Booking[];transactions:Transaction[];credits:number;earned:number;spent:number;usedCodes:string[]};
export const freshState=():DemoState=>({phone:"",loggedIn:false,passes:Object.fromEntries(gamePasses.map(p=>[p.id,0])),bookings:[],transactions:[],credits:0,earned:0,spent:0,usedCodes:[]});
export function loadState():DemoState { try { const raw=localStorage.getItem(KEY); if(!raw)return freshState(); const parsed=JSON.parse(raw); if(!parsed||typeof parsed!=="object"||!parsed.passes||!Array.isArray(parsed.bookings))return freshState(); return {...freshState(),...parsed}; } catch { return freshState(); } }
export function saveState(s:DemoState){localStorage.setItem(KEY,JSON.stringify(s));}
export function makeId(prefix:string){return `${prefix}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;}
export function isSlotFree(state:DemoState,stationId:string,date:string,start:string,minutes:number){
 const slots=[...demoBookedSlots.filter(x=>x.date===date&&x.stationId===stationId).map(x=>({start:x.start,minutes:x.minutes})),...state.bookings.filter(x=>x.date===date&&x.stationId===stationId&&x.status==="upcoming").map(x=>({start:x.start,minutes:x.minutes}))];
 const toMin=(t:string)=>{const [h,m]=t.split(":").map(Number);return h*60+m;}; const a=toMin(start),b=a+minutes;
 return !slots.some(s=>a<toMin(s.start)+s.minutes&&b>toMin(s.start));
}
export {gamePasses,stations,demoRedeemCodes};