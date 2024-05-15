import { v4 as uuidv4 } from "uuid";
const data = {
projectsHeading: "",
projectsDescription: "",
projects: [],
clientsHeading: "Some of the brands I worked with",
clients: [
],
aboutMe: [
],
copyrightDate: new Date().getFullYear(),
socialProfiles: [],
categories: [
  {
    id: uuidv4(),
    value: "web",
    name: "Web Application",
  },
  {
    id: uuidv4(),
    value: "mobile",
    name: "Mobile Applicaiton",
  }
],
};
export const webData = () => { return data }