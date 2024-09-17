import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabsSubCat from '../TabsSubCat/TabsSubCat';
const Tabls = () => {

  const [tabToys, setTabToys] = useState([]);
  const [remote, setRemote] = useState(true);
  const [automatic, setAutomatic] = useState(false);
  const [racing, setRacing] = useState(false);



  useEffect(() => {
    fetch("https://play-zone-hub-server.vercel.app/toyinfo")


      .then(res => res.json())
      .then(data => setTabToys(data))

  }, [])


  const subToyData = tabToys.filter((toys) => {
    if (remote) {
      return toys.category === "Remote Control";
    }
    if (automatic) {
      return toys.category === "AutoMatic Control";
    }
    if (racing) {
      return toys.category === "Dummy Racing";
    }

  });

  const filterToyData = subToyData.slice(0, 3)
  return (
    <div>
      <Tabs className="text-center mx-2">
        <TabList className="mb-10">
          <Tab onClick={() => {
            setRemote(true);
            setAutomatic(false);
            setRacing(false)

          }}
          >Remote Control</Tab>
          <Tab
            onClick={() => {
              setRemote(false);
              setAutomatic(true);
              setRacing(false)

            }}>AutoMatic Control</Tab>
          <Tab onClick={() => {
            setRemote(false);
            setAutomatic(false);
            setRacing(true)

          }}>Dummy Racing</Tab>
        </TabList>

        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
            {
              filterToyData.map((toys) => <TabsSubCat
                key={toys._id}
                toys={toys}

              ></TabsSubCat>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid md:grid-cols-3 gap-5'>
            {
              filterToyData.map((toys) => <TabsSubCat
                key={toys._id}
                toys={toys}

              ></TabsSubCat>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid md:grid-cols-3 gap-5'>
            {
              filterToyData.map((toys) => <TabsSubCat
                key={toys._id}
                toys={toys}

              ></TabsSubCat>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tabls;