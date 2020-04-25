import React from 'react';
import LinkWrapper from './LinkWrapper';

const Header = () => {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
      });

    return (
        <nav>
            <div class="nav-wrapper indigo lighten-2">
                <LinkWrapper to="/" class="brand-logo right">HelpMaciOS</LinkWrapper>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><LinkWrapper to="/home">List of Tutorials</LinkWrapper></li>
                    <li><LinkWrapper to="/terms">Terms & Conditions</LinkWrapper></li>
                    <li><LinkWrapper to="/privacy">Privacy Policy</LinkWrapper></li>
                    <li><LinkWrapper to="/support">Support</LinkWrapper></li>
                    <li><LinkWrapper to="/about">About</LinkWrapper></li>
                </ul>


            <ul class="sidenav" id="mobile-demo">
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