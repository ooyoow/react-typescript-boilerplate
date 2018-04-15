"use strict";
import * as React from 'react';
import * as styles from './style.css';
const Error = () => (React.createElement("div", { className: styles.centered },
    React.createElement("div", { className: styles.emoji }, "\uD83D\uDE2D"),
    React.createElement("p", { className: styles.title }, "Ooooops!"),
    React.createElement("p", null, "This page doesn't exist anymore.")));
export default Error;
//# sourceMappingURL=index.js.map