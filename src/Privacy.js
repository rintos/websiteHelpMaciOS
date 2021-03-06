import React, {Fragment} from 'react';
import Header from './Header';
import LinkWrapper from './LinkWrapper';

const Privacy = () => {

    return (
        <Fragment>
            <Header />
        <div className="container">
            <h4>Privacy Policy</h4>
                <a>
                    Victor Soares de Almeida built the HelpMaciOS app as a Free app. This SERVICE is provided by Victor Soares de Almeida at no cost and is intended for use as is.
                    This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
                    If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
                    The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at HelpMaciOS unless otherwise defined in this Privacy Policy.
                </a>

            <h5>Information Collection and Use</h5>
                <a>
                    For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.
                    The app does use third party services that may collect information used to identify you.
                    Link to privacy policy of third party service providers used by the app
                </a>
            <LinkWrapper to="https://firebase.google.com/terms/analytics">Google Analytics for Firebase</LinkWrapper>
            <LinkWrapper to="https://firebase.google.com/terms/crashlytics">Firebase Crashlytics</LinkWrapper>

            <h5>Technical basics</h5>
                <a>
                The application generates the possibility of local storage of information that comes from the online service without the need to create a user account. Shares downloaded images to other applications. You need internet access for information.
                </a>
            <h5>Log Data</h5>
                <a>
                    I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.
                </a>

            <h5>Cookies</h5>
                <a>
                    Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                    This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                </a>

            <h5>Service Providers</h5>
                <a>I may employ third-party companies and individuals due to the following reasons:
                To facilitate our Service;
                To provide the Service on our behalf;
                To perform Service-related services; or
                To assist us in analyzing how our Service is used.
                I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                 </a>

            <h5>Security</h5>
                <a>
                    I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
                </a>

            <h5>Links to Other Sites</h5>
                <a>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</a>
           
            <h5>Children’s Privacy</h5>
                <a>These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.</a>
            
            <h5>Changes to This Terms and Conditions</h5>
                <a>I may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Terms and Conditions on this page.
                    These terms and conditions are effective as of 2020-04-25</a>
            
            <h5>Contact Us</h5>
                <a>If you have any questions or suggestions about my Terms and Conditions, do not hesitate to contact me at victor.santoryu@gmail.com.
            </a>
        </div>

        </Fragment>
    );
}

export default Privacy;