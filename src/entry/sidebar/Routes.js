import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FeedbackIcon from '@mui/icons-material/Feedback';
import React from "react";

export const menu = [
    {
        icon: <ArticleIcon />,
        title: "Downloads",
        items: [{
            title: "Download",
            items: []
        }]
    },
    {
        icon: <GroupIcon />,
        title: "Shared links",
        items: []
    },
    {
        icon: <PersonIcon />,
        title: "Personal links",
        items: []
    },

    {
        icon: <AssessmentIcon />,
        title: "Admin groups",
        items: [
            {
                title: "Group-1",
                items: []
            }
        ]
    },
    {
        icon: <HomeOutlinedIcon />,
        title: "Smart Alert",
    },
    {
        icon: <HomeOutlinedIcon />,
        title: "Trending Diary",
    },
    {
        icon: <HomeOutlinedIcon />,
        title: "Co-Devlopment",
        border: true
    },
    {
        icon: <SupportAgentIcon />,
        title: "Support"
    },
    {
        icon: <FeedbackIcon />,
        title: "Feedback"
    }
];