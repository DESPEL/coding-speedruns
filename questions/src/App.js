import React from 'react';
import logo from './logo.svg';
import './App.css';

import QuestionCard from './components/questionCard'
import { Container, FormLabel, Typography, makeStyles, ThemeProvider, CssBaseline, FormControlLabel, Switch } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const sampleQuestions = [
  {
    question: 'What is GitHub Enterprise?',
    answer: 'GitHub Enterprise is the on-premises version of GitHub.com. It makes collaborative coding possible and enjoyable for large-scale enterprise software development teams. A full list of specs and features are detailed on our data sheet.',
  },
  {
    question: 'How is GitHub Enterprise different from GitHub.com?',
    answer: `
GitHub Enterprise includes the same great set of features as GitHub.com but packaged for running on your organization's local network. All repository data is stored on machines that you control, and access is integrated with your organization's authentication system (LDAP, SAML, or CAS).

GitHub Enterprise also includes support for pre-receive hooks, a powerful tool that can help you enforce critical business rules, meet compliance requirements and help prevent other undesired changes from ever being made.

Use GitHub Enterprise when you need complete control over repository and project information.
    `,
  },
  {
    question: 'Can I evaluate GitHub Enterprise within my organization before purchasing?',
    answer: `Yes. 45-day evaluation licenses are available and may be upgraded to full licenses at any time during the trial period. To get started, try GitHub for free. We'll contact you shortly after with information on downloading the software and installing trial license keys.`,
  },
  {
    question: 'What is a Virtual Appliance?',
    answer: `
You can think of a virtual appliance as the equivalent of a network appliance that you might buy, mount in a rack, and plug into your network. The only difference is that it runs as a virtual machine inside of VMware or some other virtualization platform rather than as a physical device you mount in a rack.

This saves time (you can download the appliance and all updates immediately) and space (you just add it to your existing virtualization infrastructure). It also makes managing, backing up, and restoring the appliance easy because you can use your virtualization platform's built-in snapshotting capabilities.

You can learn more about virtual appliances here.`,
  }
]

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: ['monospace'],
    h2: {
      fontSize: '3.75rem',
      '@media (max-width:910px)': {
        fontSize: '2.75rem',
      },
      '@media (max-width:720px)': {
        fontSize: '2rem',
      },
    }
  }
})

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  }
})

const useStyle = makeStyles({
  title: {
    marginTop: '5vh',
    marginBottom: '10vh',
  },
  themeButton: {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
  }
})

function getQuestions() {
  let questionCards = []
  sampleQuestions.forEach((question, index) => {
    questionCards.push(<QuestionCard
      key={index}
      question={question.question}
      answer={question.answer}
    />)
  })
  return questionCards
}

function App() {
  const [state, setState] = React.useState({
    darkTheme: true
  })

  const switchTheme = () => {
    setState({ ...state, darkTheme: !state.darkTheme })
  }

  const classes = useStyle()
  return (
    <div className="App">
      <ThemeProvider theme={state.darkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <FormControlLabel
          className={classes.themeButton}
          control={
            <Switch
              checked={state.darkTheme}
              onChange={switchTheme}
              color="primary"
            />
          }
          label="Dark theme"
        />
        <Container>
          <Typography className={classes.title} variant="h2" component="h2">Frequently Asked Questions</Typography>
          {getQuestions()}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
