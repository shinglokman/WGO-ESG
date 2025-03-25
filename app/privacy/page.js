import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";

const page = () => {
    return(
        <EnvensLayouts>
      <PageBanner pageName={"Privacy Policy"} />
        <div>
            <h4 style={{padding: '2% 10% 0% 10%'}}> 
                World Green Organisation (ESGXchange) takes your privacy seriously. We are committed to protecting your privacy in accordance with Hong Kong’s Personal Data (Privacy) Ordinance (“PDPO”). Please read the following to learn more about our privacy policy. This policy applies to the treatment of personal information by World Green Organisation (ESGXchange).
            </h4>
            <p style={{padding: '2% 10% 0% 10%', fontSize: '120%'}}>
            <ol>
                <li style={{padding: '2% 0% 0% 0%'}}>
                    Purposes and Manner of Collection of Data :
                    <br/>
                    From time to time, we may ask you for information that personally identifies you (“Personal Data”). In some cases, the provision of such information is mandatory before you are allowed to access our services. The primary purposes for which your Personal Data may be used by us are as follows
                    <ol type='i' style={{paddingLeft: ''}}>
                        <br/>
                        <li>processing your application and providing you with information or services requested by you from time to time, </li>
                        <li>providing you with a customized service and for statistical purposes,</li>
                        <li>credit verification, administration and debt recovery,</li>
                        <li>to the extent that you have not “opted out”, for promotion or direct marketing purposes,</li>
                        <li>to the extent that you have not “opted out”, for sharing with our business partners in order to provide enhanced services to you, and </li>
                        <li>for other legitimate purposes.</li>
                    </ol>
                    <br/>
                    If you haven’t done so already you may opt-out of paragraphs 1(iv) and 1(v) by writing to our Data Privacy Officer whose details are set out in paragraph 8.
                </li>

                <li style={{padding: '2% 0% 0% 0%'}}>
                    Transfers to Third Parties :
                    <br/>
                    Your Personal Data will be kept confidential save that we may provide such information to (i) any agent, contractor, or third party service provider who provides services to us, (ii) any other person under a duty of confidentiality to us, (iii) any person to whom we are under an obligation to make disclosure under any requirements of law, (iv) our successor and assigns, and (v) any other organizations, for the purposes set out in paragraph 1 above or any other directly related purpose.
                </li>

                <li style={{padding: '2% 0% 0% 0%'}}>
                    Transfers of Data to Outside Hong Kong :
                    <br/>
                    From time to time, in furtherance of the purposes set out in this policy, we may have to transfer your Personal Data to another jurisdiction outside Hong Kong which may not have laws protecting personal data similar to the PDPO. By submitting your Personal Data, you are deemed to have consented to such transfers.
                </li>

                <li style={{padding: '2% 0% 0% 0%'}}>
                    Cookies :
                    <br/>
                    From time to time, we may set and access our “cookies” on your computer. The primary purpose of the “cookies” is to help us to customize our services to you and for other purposes directly related to the purposes mentioned in paragraph 1 above. In certain cases, third party service providers and/or advertisers who provide services or serve advertisements via our website may also install their own “cookies” on your computer. Use of third parties’ “cookies” are subject to such third parties’ privacy policies. You may set your web-browser to reject “cookies” automatically but some of our webpages may not display properly without cookies.
                </li>

                <li style={{padding: '2% 0% 0% 0%'}}>
                    Keeping of Personal Data :
                    <br/>
                    Your Personal Data will not be kept longer than is necessary for the purposes for which it was collected.
                </li>

                <li style={{padding: '2% 0% 0% 0%'}}>
                    Security of Your Personal Data :
                    <br/>
                    Unfortunately, the internet is not a totally secure medium. However, we will strive to ensure an appropriate level of protection for your Personal Data in order to prevent unauthorized access, processing or other use of that data, commensurate with the sensitivity of the data and the harm that would be caused by unauthorized access to that data. We will review our security measures from time to time in order to keep abreast with technological changes.
                </li>

                <li style={{padding: '2% 0% 0% 0%'}}>
                    Amendments :
                    <br/>
                    We may amend this policy from time to time. Such amended policy will be displayed on this webpage. If we make any material changes to our policy, we will alert you by posting a prominent notice on our website.
                </li>

                <li style={{padding: '2% 0% 2% 0%'}}>
                    Accuracy and Duration of Retention of Data :
                    <br/>
                    We will at all times endeavour to ensure the accuracy of your Personal Data collected and processed by us. In accordance with section 18. 22 and Principle 6 of Schedule 1 to the PDPO, you may request access to, and correction of, your Personal Data being held by us. We may charge a nominal processing fee to process your data access request. To request access to your Personal Data, please contact our Administration Department at nickautong@thewgo.org with “Personal Data” in the subject line.
                </li>

            </ol> 
            </p>
        </div>
    </EnvensLayouts>
    )
}

export default page;