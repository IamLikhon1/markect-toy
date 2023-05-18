import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TabBars = () => {
    return (
        <div className='my-14'>
            <h2 className="text-5xl font-serif text-center my-10 text-violet-500">Categories</h2>
            <Tabs>
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Truck</Tab>
          <Tab>Mini Police Car</Tab>
        </TabList>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
        </div>
    );
};

export default TabBars;