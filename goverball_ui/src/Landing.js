import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Capital from './images/capital.jpg';
import Voter from './images/voter.jpg';
import Politician from './images/politician.jpg';

import Logo from './Logo.svg';

const cards = [0, 1, 2];

const cardTitle = ["See the Big Picture", "Be Heard", "Demand Results"];

const cardDesc = [
    "See all of the information about the politicians representing you in one place.",
    "Provide feedback on the decisions your lawmakers are making.",
    "Be informed so you can vote for the reps actually working for you.",
]

const imgs = [
    Capital,
    Voter,
    Politician
];

export default function Landing() {
    return (
        <>
        <main>
            {/* Hero unit */}
            <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
        >
                <Container maxWidth="sm">
                    <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    fontFamily="Teko"
                    gutterBottom
                >
                        GOVERBALL
                </Typography>
                <img className='logo' alt='Industrial Next Logo' src={ require('./Logo.svg').default } />

                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    American government is sick and it needs attention. What do you do when the thing you desparately need to give attention to is so desparately boring? Turn it into a game.
                </Typography>
                <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                    <Button variant="contained">Main call to action</Button>
                    <Button variant="outlined">Secondary action</Button>
                </Stack>
            </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                            <CardMedia
                            component="img"
                            image={imgs[card]}
                        />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        { cardTitle[card] }
                                    </Typography>
                                    <Typography>
                                        { cardDesc[card] }
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                ))}
                    </Grid>
                </Container>
            </main>
        {/* Footer
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
        >
                Something here to give the footer a purpose!
        </Typography>
    </Box> */}
        {/* End footer */}
        </>
    );
}
