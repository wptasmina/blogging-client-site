// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import Blogs from './Blogs';

// export default function TabCatagory() {
//   return (
//     <div className='w-11/12 mx-auto pb-10'>
//     <Tabs>
//     <div className='md:w-11/12 mx-auto p-0'>
//     <h1 className='text-3xl text-black font-extrabold text-center mb-6'>Tech Trends to Watch in {new Date().getFullYear()}</h1>
//     <div  className='flex justify-center items-center'>
//     <TabList className="font-bold border-b">
//       <Tab>Web Development</Tab>
//       <Tab>Technology</Tab>
//       <Tab>News</Tab>
//       <Tab>Travel</Tab>
//       <Tab>LifeStyle</Tab>
//       <Tab>Business</Tab>
//     </TabList>
//     </div>
//     </div>
//     <TabPanel className="pt-10">
//         <Blogs/>
//     </TabPanel>
//     <TabPanel>
//       <h2>Any content 2</h2>
//     </TabPanel>
//     <TabPanel>
//       <h2>Any content 3</h2>
//     </TabPanel>
//     <TabPanel>
//       <h2>Any content 4</h2>
//     </TabPanel>
//     <TabPanel>
//       <h2>Any content 5</h2>
//     </TabPanel>
//   </Tabs>
//     </div>
//   )
// }



import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const tabs = ["Web Development", "News", "Technology", "Travel", "LifeStyle", "Business"]

const tabPanels = [
  "Web Development for Tab 1",
  "News for Tab 2",
  "Technology for Tab 3",
  "Travel for Tab 4",
  "LifeStyle for Tab 5",
  "Business for Tab 6",
];

export default function TabCatagory() {
  return (
   <div className="w-11/12 mx-auto py-10">
    <h1 className='text-3xl text-black font-extrabold text-center mb-6'>Tech Trends to Watch in {new Date().getFullYear()}</h1>
     <Tabs>
      <div className="flex justify-center items-center">
      <TabList >
        {tabs.map((tab, index) => (
          <Tab key={index}>{tab}</Tab>
        ))}
      </TabList>
      </div>
      {tabPanels.map((panel, index) => (
        <TabPanel key={index}>{panel}</TabPanel>
      ))}
    </Tabs>
   </div>
  );
  
}

