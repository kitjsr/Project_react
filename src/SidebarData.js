import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

export const SidebarData = [
    {
        title:"Home",
        icon:<AddCircleOutlinedIcon/>,
        link:"/home",
    },
    {
        title:"Profile",
        icon:<AddCircleOutlinedIcon/>,
        link:"/profile",
    },
    {
        title:"Register",
        icon:<PersonOutlineOutlinedIcon/>,
        link:"/register",
    },
    {
        title:"Additem",
        icon:<LocalMallOutlinedIcon/>,
        link:"/additem",
    },
    {
        title:"Invoice",
        icon:<DescriptionOutlined/>,
        link:"/invoice",
    },
    {
        title:"Party",
        icon:<GroupOutlinedIcon/>,
        link:"/party",
    },
    {
        title:"viewprofile",
        icon:<AddCircleOutlinedIcon/>,
        link:"/viewprofile",
    },
    {
        title:"SingleInvoice",
        icon:<AddCircleOutlinedIcon/>,
        link:"/singleInvoice",
    },
]

export default SidebarData
