import React, {Component} from 'react';

const UserContext = React.createContext({firstValue:"default1",
                                                    secondValue:"default2"})

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}