import './footer.css'
import {useTranslation} from "react-i18next";
 
export default function Footer(){
    const {t} = useTranslation ();
    return(
        <footer>
            <div className="container-footer">
                <div className="links">
                    <div className="logo-footer">
                        <img src="./images/logowhite.png" alt="" />
                    </div>
                    <div>
                        <div>
                            <a href="tel:+375257325957">+375257325957</a>
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTGmpHcPtXtjVhLWsgsNRpwVNcljDqnbVwnQqsNQhhCxJtVBHzWPNqlzXjQfsnkCnVFLdq">dimamirankov63@gmail.com</a>
                            <a href="https://github.com/OneMight">GitHub</a>
                            <a href="https://www.facebook.com/?locale=ru_RU">Facebook</a>
                        </div>
                    </div>
                </div>
              
                <div className="footer-nav-menu">
                    <div>
                        <p i18n="grandCanyonYosemiteArches34">{t('footer.Shop')}</p>
                        <a i18n="grandCanyonYosemiteArches26" href="../Shop/shopall.html">{t('footer.Shop all')}</a>
                        <a i18n="grandCanyonYosemiteArches27" href="">{t('footer.Greeting Cards')}</a>
                        <a i18n="grandCanyonYosemiteArches28" href="">{t('footer.Assorted Cards Sets')}</a>
                        <a i18n="grandCanyonYosemiteArches29" href="" >{t('footer.Notebooks')}</a>
                    </div>
                    <div>
                        <p i18n="grandCanyonYosemiteArches35">{t('footer.About')}</p>
                        <a i18n="grandCanyonYosemiteArches30" href="" >{t('footer.Our story')}</a>
                        <a i18n="grandCanyonYosemiteArches31" href="" >{t('footer.Our Values')}</a>
                        <a i18n="grandCanyonYosemiteArches32" href="">{t('footer.Journal')}</a>
                        <a i18n="grandCanyonYosemiteArches33" href="">{t('footer.Sustainability')}</a>
                    </div>
                    <div>
                        <p i18n="grandCanyonYosemiteArches36" >{t('footer.Customer Care')}</p>
                        <a i18n="grandCanyonYosemiteArches37" href="">{t('footer.About Us')}</a>
                        <a i18n="grandCanyonYosemiteArches38" href="">{t('footer.FAQs')}</a>
                        <a i18n="grandCanyonYosemiteArches39" href="">{t('footer.Return & Exchanges')}</a>
                        <a i18n="grandCanyonYosemiteArches40" href="">{t('footer.Support')}</a>
                    </div>
                    <div>
                        <p i18n="grandCanyonYosemiteArches41">{t('footer.Wholesales')}</p>
                        <a i18n="grandCanyonYosemiteArches42" href="">{t('footer.Overview')}</a>
                        <a i18n="grandCanyonYosemiteArches43" href="">{t('footer.Register as a Wholesales')}</a>
                        <a i18n="grandCanyonYosemiteArches44" href="">{t('footer.Access the Wholesales Store')}</a>
                    </div>
                </div>
                <div className="footer-links">
                   <span i18n="grandCanyonYosemiteArches45">{t('footer.Twigs Paper')}</span>
                    <div>
                        <a i18n="grandCanyonYosemiteArches46" href="">{t('footer.Privacy Policy')}</a>
                        <a i18n="grandCanyonYosemiteArches47" href="">{t('footer.Terms & Conditions')}</a>
                    </div>
                   <span i18n="grandCanyonYosemiteArches48">{t('footer.Built by The Papestielliz')}</span>
                </div>
            </div>
        </footer>
    )
}