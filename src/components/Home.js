import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import Progress from 'react-circle-progress-bar'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
class Home extends Component {

  constructor(props) {
    super(props);
  }
  render() {

    const styles = {
      root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 24,
      },
      pos: {
        marginBottom: 12,
      },
    };

    console.log(JSON.stringify(styles.title.fontSize));
    return (
      <div className="content">
        <h2>Home</h2>


        <div className="row space-between debugBorderFushia">
          <Card id="card" className="column info">
            <CardContent>
              <Typography style={{ fontSize: JSON.stringify(styles.title.fontSize) + 'px' }} color="primary" gutterBottom>
                <div>             Information Alert      </div>
              </Typography>
              <Typography component={'span'} className={JSON.stringify(styles.pos)} gutterBottom>
                <div className="valueable ">
                  <div className="cardRow value ">5</div>
                  <div className="cardRow central fix debugBorderFushia">
                    <div className="center">
                      <div className="title">This is a Title</div>
                      <div className="description" >Description: This is a short description</div>
                    </div>
                  </div>
                  <div className="cardRow icon">
                    <InfoIcon style={{ fontSize: 50 }} ></InfoIcon>
                  </div>
                  <div className="cardRow center">
                    <Progress progress={75} />

                  </div>

                </div>
              </Typography>

            </CardContent>

          </Card>


          <Card id="card2" className="column warn">
            <CardContent>
              <Typography style={{ fontSize: JSON.stringify(styles.title.fontSize) + 'px' }} color="primary" gutterBottom>
                Word of the Day Primary 2
        </Typography>
              <Typography className={JSON.stringify(styles.pos)} color="secondary" gutterBottom>
                Word of the Day Secondary 2
        </Typography>
              <Typography style={{ fontSize: JSON.stringify(styles.title.fontSize) + 'px' }} color="textPrimary" gutterBottom>
                Word of the Day textPrimary 2
        </Typography>
              <Typography className={JSON.stringify(styles.pos)} color="textSecondary" gutterBottom>
                Word of the Day textSecondary 2
        </Typography>
            </CardContent>

          </Card>


          <Card id="card3" className="column error">
            <CardContent>
              <Typography style={{ fontSize: JSON.stringify(styles.title.fontSize) + 'px' }} color="primary" gutterBottom>
                Word of the Day Primary 3
        </Typography>
              <Typography className={JSON.stringify(styles.pos)} color="secondary" gutterBottom>
                Word of the Day Secondary 3
        </Typography>
              <Typography style={{ fontSize: JSON.stringify(styles.title.fontSize) + 'px' }} color="textPrimary" gutterBottom>
                Word of the Day textPrimary 3
        </Typography>
              <Typography className={JSON.stringify(styles.pos)} color="textSecondary" gutterBottom>
                Word of the Day textSecondary 3
        </Typography>
            </CardContent>

          </Card>

        </div>
        <div className="row center debugBorderGreen">
          <Card className="column full">
            <CardContent>
              <Typography>
              <Progress progress={33} />
              <CircularProgressbar value={33} text={`33%`} />
              </Typography>
            </CardContent>
          </Card>
          

        </div>

      </div>
    );
  }
}

export default Home;