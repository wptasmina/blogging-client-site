import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Blogs from './Blogs';

export default function TabCatagory() {
  return (
    <div className='w-11/12 mx-auto pb-10'>
    <Tabs>
    <div className='md:w-11/12 mx-auto p-0'>
    <h1 className='text-3xl text-black font-extrabold text-center'>blog</h1>
    <p className='text-md text-gray-600 font-bold py-6 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae similique atque ipsa est, labore nobis laborum veritatis ea at velit quo esse omnis fugiat nemo voluptatibus unde soluta facere asperiores?</p>
    <div  className='flex justify-center items-center'>
    <TabList className="font-bold border-b">
      <Tab>Technology</Tab>
      <Tab>News</Tab>
      <Tab>Travel</Tab>
      <Tab>LifeStyle</Tab>
      <Tab>Business</Tab>
    </TabList>
    </div>
    </div>

    <TabPanel className="pt-10">
        <Blogs/>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 5</h2>
    </TabPanel>
  </Tabs>
    </div>
  )
}
