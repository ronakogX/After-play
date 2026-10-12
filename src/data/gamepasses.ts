export type GamePass = {id:string;name:string;price:number;minutes:number;benefits:string[];featured?:boolean};
export const gamePasses: GamePass[] = [
{id:"starter",name:"Starter Pass",price:570,minutes:180,benefits:["180 minutes of play","Flexible session booking"]},
{id:"gamer",name:"Gamer Pass",price:930,minutes:300,benefits:["300 minutes of play","Use on eligible stations"],featured:true},
{id:"ultimate",name:"Ultimate Pass",price:1799,minutes:600,benefits:["600 minutes of play","Plan multiple sessions"]},
{id:"legend",name:"Legend Pass",price:2650,minutes:900,benefits:["900 minutes of play","Premium playtime balance"]}
];