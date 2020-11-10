import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Logo from './logo/Logo';
import Loader from './loader/Loader';
import contactOperations from '../redux/contacts/contactOperations';
import contactsSelector from '../redux/contacts/contactsSelector';
import stylesLogo from './logo/Logo.module.css';
import stylesList from './contactList/ContactList.module.css';
import stylesFilter from './filter/Filter.module.css';

class PhoneBook extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div>
        {this.props.isLoadingContacts && <Loader />}
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={stylesLogo}
          unmountOnExit
        >
          <Logo />
        </CSSTransition>
        <ContactForm />
        <CSSTransition
          in={this.props.isContacts.length > 0}
          timeout={250}
          classNames={stylesFilter}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <CSSTransition
          in={this.props.isContacts.length > 0}
          timeout={250}
          classNames={stylesList}
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelector.getLoading(state),
  isContacts: contactsSelector.getContacts(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
