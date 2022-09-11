import React from 'react'
import MUIDataTable from "mui-datatables";
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
// import { LoadingButton } from '@mui/lab';

// tab import
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';


//  tab function

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const Friends = () => {

    const Navigate = useNavigate();

    const ViewLocation = () => {
        Navigate('/friendprofile')
    }

    // tab further work
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    //

    const columns1 = [
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "state",
            label: "action",
            options: {
                customBodyRender: (value, row) => {
                    return (
                        <>
                            <LoadingButton type="button" variant="outlined" onClick={ViewLocation}> View Profile </LoadingButton>
                            <LoadingButton type="button" variant="outlined" onClick={ViewLocation}> Remove as Frinend </LoadingButton>
                        </>

                    );

                }
            }
        },

    ];

    const columns2 = [
        {
            name: "name",
            label: "Alias",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "state",
            label: "action",
            options: {
                customBodyRender: (value, row) => {
                    return (
                        <>
                            <LoadingButton type="button" variant="outlined" onClick={ViewLocation}> Add as Frinend </LoadingButton>
                        </>

                    );

                }
            }
        },

    ];

    const data1 = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        // ["Bob Herm", "Test Corp", "Tampa", "FL"],
        // ["James Houston", "Test Corp", "Dallas", "TX"],
    ];
    const data2 = [
        ["Mario", "Colin", "Erica"],
        // ["John Walsh", "Test Corp", "Hartford", "CT"],
        // ["Bob Herm", "Test Corp", "Tampa", "FL"],
        // ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const options = {
        filterType: 'checkbox',
    };

    return (
        <>
            <Header />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}  >
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="Friends List Table" {...a11yProps(0)} />
                        <Tab label="UnFriends List Table" {...a11yProps(1)} />
                        {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Friends List
                </TabPanel>
                <TabPanel value={value} index={1}>
                    UnFriends List
                </TabPanel>

            </Box>

            {/* <h5>hello friends</h5> */}
            <TabPanel value={value} index={0}>
                <div className='conatiner' >
                    <div className='row mt-5' >
                        <div className='col-md-1  ' >
                        </div>


                        <div className='col-md-10 mt-20 ' >
                            {/* style={{display: 'table', tableLayout:'fixed', width:'100%'}} */}
                            <MUIDataTable
                                // title={"Friends List"}
                                data={data1}
                                columns={columns1}
                                options={options}
                            />
                        </div>
                        <div className='col-md-1 ' >
                        </div>

                    </div>
                </div>
            </TabPanel>
            {/* unfriend list table */}
            <TabPanel value={value} index={1}>
                <div className='conatiner' >
                    <div className='row mt-5' >
                        <div className='col-md-1  ' >
                        </div>


                        <div className='col-md-10 mt-20 ' >
                            {/* style={{display: 'table', tableLayout:'fixed', width:'100%'}} */}
                            <MUIDataTable
                                // title={"UnFriend List"}
                                data={data2}
                                columns={columns2}
                                options={options}
                            />
                        </div>
                        <div className='col-md-1 ' >
                        </div>

                    </div>
                </div>
            </TabPanel>
            {/* 
            <div >

            </div> */}



        </>
    )
}

export default Friends