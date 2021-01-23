import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core"
import React from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { Card, CardActions, CardHeader, CardMedia } from "@material-ui/core"
import logo from "../images/logo.png"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tab from "@material-ui/core/Tab"
import TabContext from "@material-ui/lab/TabContext"
import TabList from "@material-ui/lab/TabList"
import TabPanel from "@material-ui/lab/TabPanel"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const About = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container>
      <CssBaseline />
      <Grid container>
        <Grid item container>
          <h1>About Us</h1>
        </Grid>

        <Grid item container>
          <Grid item xs={12} sm={6}>
            <div>
              <h2>Our History</h2>
              <p>
                Started in 2010, Ristorante con Fusion quickly established
                itself as a culinary icon par excellence in Hong Kong. With its
                unique brand of world fusion cuisine that can be found nowhere
                else, it enjoys patronage from the A-list clientele in Hong
                Kong. Featuring four of the best three-star Michelin chefs in
                the world, you never know what will arrive on your plate the
                next time you visit us.
              </p>
              <p>
                The restaurant traces its humble beginnings to{" "}
                <em>The Frying Pan</em>, a successful chain started by our CEO,
                Mr. Peter Pan, that featured for the first time the world's best
                cuisines in a pan.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container>
              <Card style={{ marginTop: "1rem" }}>
                <CardHeader
                  title="Facts at a Glance"
                  style={{
                    backgroundColor: "#C71585",
                    color: "white",
                  }}
                />

                <CardContent>
                  <Grid container>
                    <Grid item sm={5}>
                      <Typography>
                        <dt>Started</dt>
                        <dt>Major Stake Holder</dt>
                        <dt>Last Year's Turnover</dt>
                        <dt>Employees</dt>
                      </Typography>
                    </Grid>
                    <Grid item sm={6}>
                      <Typography>
                        <dd>HK Fine Foods Inc.</dd>
                        <dd>$1,250,375</dd>
                        <dd>3 Feb. 2013</dd>
                        <dd>40</dd>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Container>
          </Grid>
          <Grid item sm={12}>
            <Card>
              <CardHeader
                title="You better cut the pizza in four pieces because
                            I'm not hungry enough to eat six."
                subheader="-Yogi Berra,The Wit and Wisdom of Yogi Berra,
                P. Pepe, Diversion Books, 2014"
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container item>
          <div>
            <h2>Corporate Leadership</h2>
            <div className={classes.root}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Peter Pan <small>Chief Epicurious Officer</small>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Our CEO, Peter, credits his hardworking East Asian immigrant
                    parents who undertook the arduous journey to the shores of
                    America with the intention of giving their children the best
                    future. His mother's wizardy in the kitchen whipping up the
                    tastiest dishes with whatever is available inexpensively at
                    the supermarket, was his first inspiration to create the
                    fusion cuisines for which <em>The Frying Pan</em> became
                    well known. He brings his zeal for fusion cuisines to this
                    restaurant, pioneering cross-cultural culinary connections.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    Dhanasekaran Witherspoon <small>Chief Food Officer</small>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Our CFO, Danny, as he is affectionately referred to by his
                    colleagues, comes from a long established family tradition
                    in farming and produce. His experiences growing up on a farm
                    in the Australian outback gave him great appreciation for
                    varieties of food sources. As he puts it in his own words,{" "}
                    <em>
                      Everything that runs, wins, and everything that stays,
                      pays!
                    </em>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    Agumbe Tang <small>Chief Taste Officer</small>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Blessed with the most discerning gustatory sense, Agumbe,
                    our CTO, personally ensures that every dish that we serve
                    meets his exacting tastes. Our chefs dread the tongue
                    lashing that ensues if their dish does not meet his exacting
                    standards. He lives by his motto,{" "}
                    <em>You click only if you survive my lick.</em>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    Alberto Somayya <small>Executive Chef</small>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Award winning three-star Michelin chef with wide
                    International experience having worked closely with whos-who
                    in the culinary world, he specializes in creating
                    mouthwatering Indo-Italian fusion experiences. He says,{" "}
                    <em>
                      Put together the cuisines from the two craziest cultures,
                      and you get a winning hit! Amma Mia!
                    </em>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* <div className={classes.root}>
              <TabContext value={value}>
                <AppBar
                  position="static"
                  style={{ backgroundColor: "#C71585" }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="simple tabs example"
                  >
                    <Tab label="Peter Pan, CEO" value="1" />
                    <Tab label="Danny Witherspoon, CFO" value="2" />
                    <Tab label="Agumbe Tang, CTO" value="3" />
                    <Tab label="Alberto Somayya, Exec. Chef" value="4" />
                  </TabList>
                </AppBar>
                <TabPanel value="1">
                  <h3>
                    Peter Pan <small>Chief Epicurious Officer</small>
                  </h3>
                  <p>
                    Our CEO, Peter, credits his hardworking East Asian immigrant
                    parents who undertook the arduous journey to the shores of
                    America with the intention of giving their children the best
                    future. His mother's wizardy in the kitchen whipping up the
                    tastiest dishes with whatever is available inexpensively at
                    the supermarket, was his first inspiration to create the
                    fusion cuisines for which <em>The Frying Pan</em> became
                    well known. He brings his zeal for fusion cuisines to this
                    restaurant, pioneering cross-cultural culinary connections.
                  </p>
                </TabPanel>
                <TabPanel value="2">
                  <h3>
                    Dhanasekaran Witherspoon <small>Chief Food Officer</small>
                  </h3>
                  <p>
                    Our CFO, Danny, as he is affectionately referred to by his
                    colleagues, comes from a long established family tradition
                    in farming and produce. His experiences growing up on a farm
                    in the Australian outback gave him great appreciation for
                    varieties of food sources. As he puts it in his own words,{" "}
                    <em>
                      Everything that runs, wins, and everything that stays,
                      pays!
                    </em>
                  </p>
                </TabPanel>
                <TabPanel value="3">
                  <h3>
                    Agumbe Tang <small>Chief Taste Officer</small>
                  </h3>
                  <p>
                    Blessed with the most discerning gustatory sense, Agumbe,
                    our CTO, personally ensures that every dish that we serve
                    meets his exacting tastes. Our chefs dread the tongue
                    lashing that ensues if their dish does not meet his exacting
                    standards. He lives by his motto,{" "}
                    <em>You click only if you survive my lick.</em>
                  </p>
                </TabPanel>
                <TabPanel value="4">
                  <h3>
                    Alberto Somayya <small>Executive Chef</small>
                  </h3>
                  <p>
                    Award winning three-star Michelin chef with wide
                    International experience having worked closely with whos-who
                    in the culinary world, he specializes in creating
                    mouthwatering Indo-Italian fusion experiences. He says,{" "}
                    <em>
                      Put together the cuisines from the two craziest cultures,
                      and you get a winning hit! Amma Mia!
                    </em>
                  </p>
                </TabPanel>
              </TabContext>
            </div> */}
          </div>
        </Grid>
      </Grid>

      <TableContainer>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>&nbsp;</TableCell>
                <TableCell>2013</TableCell>
                <TableCell>2014</TableCell>
                <TableCell>2015</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Employees</TableCell>
                <TableCell>15</TableCell>
                <TableCell>30</TableCell>
                <TableCell>40</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Guests Served</TableCell>
                <TableCell>15000</TableCell>
                <TableCell>45000</TableCell>
                <TableCell>100,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Special Events</TableCell>
                <TableCell>3</TableCell>
                <TableCell>20</TableCell>
                <TableCell>45</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Annual Turnover</TableCell>
                <TableCell>$251,325</TableCell>
                <TableCell>$1,250,375</TableCell>
                <TableCell>~$3,000,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </TableContainer>
    </Container>
  )
}
export default About
