import axios from "axios";
let baseURL;

/**CHANGE THIS**/
process.env.NODE_ENV === "production"
  ? (baseURL = "/api") //https://rocky-ocean-03987.herokuapp.com/
  : (baseURL = "http://localhost:5000/api");
/****/

console.log(process.env, baseURL);

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get("/is-logged-in");
  },
  signUp: async user => {
    return await service.post("/signup", user);
  },
  logIn: async user => {
    return await service.post("/login", user);
  },
  logOut: async () => {
    return await service.get("/logout");
  },

  draft: async () => {
    return await service.get("/draft-order");
  },
  createLink: async link => {
    return await service.post("/new-link", link);
  },
  list: async () => {
    return await service.get("/all-links");
  },
  update: async (data, id) => {
    return await service.post(`/update-list/${id}`, data);
  },
//-----------INVENTORY---------------
createLinkInventory: async link => {
  return await service.post("/new-link-inventory", link);
},
listInventory: async () => {
  return await service.get("/all-links-inventory");
},
updateInventory: async (data, id) => {
  return await service.post(`/update-list-inventory/${id}`, data);
},
//------------MARKETING------------------
createLinkMarketing: async link => {
  return await service.post("/new-link-marketing", link);
},
listMarketing: async () => {
  return await service.get("/all-links-marketing");
},
updateMarketing: async (data, id) => {
  return await service.post(`/update-list-marketing/${id}`, data);
},
//------------NEWHIRE------------------
createLinkNewhire: async link => {
  return await service.post("/new-link-newhire", link);
},
listNewhire: async () => {
  return await service.get("/all-links-newhire");
},
updateNewhire: async (data, id) => {
  return await service.post(`/update-list-newhire/${id}`, data);
},
//--------------ACCOUNTING------------------
createLinkAccounting: async link => {
  return await service.post("/new-link-accounting", link);
},
listAccounting: async () => {
  return await service.get("/all-links-accounting");
},
updateAccounting: async (data, id) => {
  return await service.post(`/update-list-accounting/${id}`, data);
},
//---------------------IT---------------------------
createLinkIT: async link => {
  return await service.post("/new-link-it", link);
},
listIT: async () => {
  return await service.get("/all-links-it");
},
updateIT: async (data, id) => {
  return await service.post(`/update-list-it/${id}`, data);
},
//--------------------ELLEN_WILLE------------------
createLinkEllen: async link => {
  return await service.post("/new-link-ellen", link);
},
listEllen: async () => {
  return await service.get("/all-links-ellen");
},
updateEllen: async (data, id) => {
  return await service.post(`/update-list-ellen/${id}`, data);
},

getTrack: async id => {
  return await service.get(`/track-links/${id}`);
},
getRecent: async id => {
  return await service.get(`/recent-links/${id}`);
},
trackLiinks: async (track) => {
  return await service.post("/track", track);
},

addObj: async (link, trackId, linkId) => {
  return await service.post(`/add_newlink/${trackId}/${linkId}`, link);
},
gmail: async () => {
  return await service.get("/gmail");
},
postAnnouncment: async(announcment) =>{
  return await service.post('/new-announcment', announcment)
},
getAnnouncment : async () => {
  return await service.get("/announcment");
},
};

export default actions;
