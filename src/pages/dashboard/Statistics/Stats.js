import React, {useEffect} from 'react';
import {Avatar, Box, ListItem, ListItemAvatar, ListItemText, Paper, Typography} from "@mui/material";
import {EmojiPeople, Inventory2, Paid, ShoppingCart, StarRate} from "@mui/icons-material";
import {receipts} from "../receipts/Receipts";
import moment from 'moment'
import {totalRevenue} from "../receipts/TotalCount";



const Stats = ({setSelectedLink, link}) => {
        useEffect(() => {
        setSelectedLink(link);
    }, []);

    return (
        <Box
            sx={{
                display: {xs: 'flex', md: 'grid'},
                gridTemplateColumns: 'repeat(3,1fr)',
                gridAutoRows: 'minmax(100px, auto)',
                gap: 3,
                textAlign: 'center',
                flexDirection:'column'
            }}>
            <Paper elevation={3} sx={{p:3}}>
                <Typography>Total Revenue</Typography>
                <Box
                sx={{display: 'flex',
                alignItems:'center',
                justifyContent:'center'
                }}>
                    <Paid sx={{height:100, width:100, opacity:0.3, mr:1}}/>
                    <Typography variant='h4'>{totalRevenue}</Typography>
                </Box>
            </Paper>
            <Paper elevation={3} sx={{p:3}}>
                <Typography>Total orders</Typography>
                <Box
                    sx={{display: 'flex',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                    <Inventory2 sx={{height:100, width:100, opacity:0.3, mr:1}}/>
                    <Typography variant='h4'>{receipts.length}</Typography>
                </Box>
            </Paper>
            <Paper elevation={3} sx={{p:3}}>
                <Typography>Total Items sold</Typography>
                <Box
                    sx={{display: 'flex',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                    <ShoppingCart sx={{height:100, width:100, opacity:0.3, mr:1}}/>
                    <Typography variant='h4'>10008923</Typography>
                </Box>
            </Paper>
            <Paper elevation={3} sx={{p:3}}>
                <Typography>Most popular item</Typography>
                <Box
                    sx={{display: 'flex',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                    <StarRate sx={{height:100, width:100, opacity:0.3, mr:1}}/>
                    <Typography variant='h4'>Book</Typography>
                </Box>
            </Paper>
            <Paper elevation={3} sx={{p:3}}>
                <Typography>Total customers</Typography>
                <Box
                    sx={{display: 'flex',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                    <EmojiPeople sx={{height:100, width:100, opacity:0.3, mr:1}}/>
                    <Typography variant='h4'>234</Typography>
                </Box>
            </Paper>
            <Paper elevation={3} sx={{p:2, gridColumn:3, gridRow:'1/4'}}>
                <Box>
                    <Typography>Recently added receipts</Typography>
                    {receipts.map((order,i) =>
                    <Box key={order.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt={receipts.name}/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={receipts.name}
                                secondary={`Date purchased: ${moment(receipts.date).format('YYYY-MM-DD H:mm:ss')}`}
                            />
                        </ListItem>
                    </Box>)}

                    {/*{receipts.map(order => {*/}
                    {/*    <ListItemText key={order} order={order}*/}
                    {/*    primary={receipts.name}*/}
                    {/*    secondary={`Date purchased: ${moment(receipts.date).format('YYYY-MM-DD H:mm:ss')}`}/>*/}
                    {/*})}*/}

                </Box>
            </Paper>

        </Box>
    );
};

export default Stats;