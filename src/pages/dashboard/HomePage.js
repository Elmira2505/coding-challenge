import NavBar from "../../components/NavBar";
import {Box, Card, CardContent, Container, Grid, ListItemIcon, Paper, Typography} from "@mui/material";
import {AttachMoney, LibraryBooks, QueryStats} from "@mui/icons-material";
import React from "react";
import {styled} from '@mui/material/styles';

const Div = styled('div')(({theme}) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));

function Home() {
    return (
        <div className="App">
            <NavBar/>
            <Container sx={{mt: 10, mb: 3, justifyContent: 'center'}}>
                <Typography sx={{textAlign: "center"}}
                            variant={'h3'}>
                    Strider general store</Typography>
            </Container>
            <Grid container spacing={24} sx={{justifyContent: 'center'}}>
                <Grid item md={3}>
                    <Card sx={{minWidth: 300, minHeight: 200, m: 1}}>
                        <CardContent>
                            <ListItemIcon sx={{fontSize: 'large'}}>
                                <QueryStats/>
                            </ListItemIcon>
                            <Typography gutterBottom variant="h4" component="div">
                                Sales Analytics
                            </Typography>
                            <Typography>
                                Sales analysis is an important aspect of running a successful business.
                                Through sales analytics, you can decide which products to focus on, where to sell and
                                how best to reach customers.
                                Many sales analysis tools exist to help small businesses improve and grow their
                                businesses.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3}>
                    <Card sx={{minWidth: 300, minHeight: 200, m: 1}}>
                        <CardContent>
                            <ListItemIcon>
                                <AttachMoney sx={{fontSize: 'large'}}/>
                            </ListItemIcon>
                            <Typography gutterBottom variant="h4" component="div">
                                Finance
                            </Typography>
                            <Typography>
                                Finance window guides banks towards creating sales and marketing strategies that
                                anticipate the needs of their customers.
                                Banking organisations can track all customer interactions,
                                learn from the data, and adopt a more personalised approach to future conversations and
                                sales opportunities.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3}>
                    <Card sx={{minWidth: 300, minHeight: 200, m: 1}}>
                        <CardContent>
                            <ListItemIcon>
                                <LibraryBooks sx={{fontSize: 'large'}}/>
                            </ListItemIcon>
                            <Typography gutterBottom variant="h4" component="div">
                                Documents
                            </Typography>
                            <Typography>
                                A good document management system can help organize all of your files and data in one
                                place,
                                keep track of all of your critical documents, speed up your workflow,
                                improve accuracy and provide around-the-clock access to documents from any part of the
                                world.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </div>
    );
}

export default Home;
