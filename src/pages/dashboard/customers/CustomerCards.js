import React, {useEffect} from 'react';
import CustomerList from "./CustomerList";
import {Avatar, Card, CardContent, Grid, ListItemAvatar, Typography} from "@mui/material";
import {receipts} from "../receipts/Receipts";


const CustomerCards = ({setSelectedLink, link}) => {
    useEffect(() => {
        setSelectedLink(link);
    }, []);


    return (
        <div>
            <Grid style={{display: 'flex', justifyContent: 'center'}}>
                <Card sx={{minWidth: 350, mb: 3, display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography sx={{fontSize: 20}} color="text.secondary" gutterBottom>
                            Customer Card
                        </Typography>
                        <ListItemAvatar>
                            <Avatar  sx={{ size: 'lg'}}/>
                        </ListItemAvatar>
                        <Typography variant="h7" component="div">
                            Name:
                        </Typography>
                        <Typography variant="h7" component="div">
                            Total items:
                        </Typography>
                        <Typography variant="h7" component="div">
                            Total orders:
                            <hr/>
                            <Typography variant="h7" component="div">
                                Total amount:
                            </Typography>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <h3>Purchase History</h3>
            <CustomerList setSelectedLink={setSelectedLink} link={link}/>
        </div>

    );
};

export default CustomerCards;