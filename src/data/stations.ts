export type Station = { id:string; name:string; type:string; price:number; image:string; enabled:boolean; note:string };
export const stations: Station[] = [
{id:"PS5-01",name:"PlayStation 5 · One",type:"PlayStation 5",price:180,image:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1000&q=85",enabled:true,note:"4K-ready console gaming"},
{id:"PS5-02",name:"PlayStation 5 · Two",type:"PlayStation 5",price:180,image:"https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=1000&q=85",enabled:true,note:"Premium dual-controller setup"},
{id:"PS5-03",name:"PlayStation 5 · Three",type:"PlayStation 5",price:180,image:"https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=1000&q=85",enabled:true,note:"Next-gen gaming station"},
{id:"PS5-04",name:"PlayStation 5 · Four",type:"PlayStation 5",price:180,image:"https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=1000&q=85",enabled:true,note:"Your next session starts here"},
{id:"PS5-05",name:"PlayStation 5 · Five",type:"PlayStation 5",price:180,image:"https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1000&q=85",enabled:true,note:"Console-ready, player-ready"},
{id:"PS4-01",name:"PlayStation 4",type:"PlayStation 4",price:120,image:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1000&q=85",enabled:true,note:"Classic favourites, great sessions"},
{id:"RACING-01",name:"Racing Wheel",type:"Wheel + pedals",price:220,image:"https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=85",enabled:true,note:"Steering wheel, clutch and pedals"}
];