import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { Box } from './Box/Box';
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <Box
        pt={5}
        pb={5}
        pl={5}
        pr={5}
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        as='main'
    >
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
      <GlobalStyle />
    </Box>
  );
};

export default App;