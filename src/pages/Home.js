import React from 'react';
import './H.css';
import Sidebar from '../subcomponent/Sidebar/Sidebar';
import Topbar from '../subcomponent/Topbar/Topbar';
import Tabs from '../subcomponent/Tabs/Tabs';
import Form from '../subcomponent/Form/Form';


const Home = () => {
    return (
        <div className='h'>

            <Sidebar/>
          <div className='r'>
            <Topbar/>
            <div className='i'>Add New Student</div>
            <Tabs/>
            <Form/>
          </div>
          
           
        </div>
    );
}

export default Home;