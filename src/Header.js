import React from 'react';
import LinkWrapper from './LinkWrapper';

const Header = () => {

    return (
        <nav>
            <div class="nav-wrapper indigo lighten-2">
                <a class="brand-logo">HelpMaciOS</a>
                <ul id="nav-mobile" class="right">
                    <li><LinkWrapper to="/home">List of Tutorials</LinkWrapper></li>
                    <li><LinkWrapper to="/terms">Terms & Conditions</LinkWrapper></li>
                    <li><LinkWrapper to="/privacy">Privacy Policy</LinkWrapper></li>
                    <li><LinkWrapper to="/support">Support</LinkWrapper></li>
                    <li><LinkWrapper to="/about">About</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;