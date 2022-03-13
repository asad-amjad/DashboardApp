import DescriptionIcon from '@material-ui/icons/Description';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import GroupIcon from '@material-ui/icons/Group';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import FeedbackIcon from '@material-ui/icons/Feedback';

export const menu = [
    {
        icon: <DescriptionIcon />,
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
        icon: <PermIdentityIcon />,
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
        icon: <NotificationsIcon />,
        title: "Smart Alert",
    },
    {
        icon: <AssessmentIcon />,
        title: "Trending Diary",
    },
    {
        icon: <SwapVertIcon />,
        title: "Co-Devlopment",
        border: true
    },
    {
        icon: <HeadsetMicIcon />,
        title: "Support"
    },
    {
        icon: <FeedbackIcon />,
        title: "Feedback"
    }
];