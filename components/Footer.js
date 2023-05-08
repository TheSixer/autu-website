import React, { useState, useRef } from "react";
import Vcode from 'react-vcode';
import { FormattedMessage, useIntl } from "react-intl";
import { useThrottleFn } from 'ahooks';
import { saveConsult } from '@/services';
import { toast } from 'react-toastify';

const Footer = () => {
  const intl = useIntl();

  const nameTxt = intl.formatMessage({ id: "footer.form.name" });
  const tel = intl.formatMessage({ id: "footer.form.tel" });
  const emailTxt = intl.formatMessage({ id: "footer.form.email" });
  const recaptcha = intl.formatMessage({ id: "footer.form.recaptcha" });
  const inquiry = intl.formatMessage({ id: "footer.form.inquiry" });


  const [loading, setLoading] = useState(false);
  const [vcode, setVcode] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [code, setCode] = useState('');
  const vcodeRef = useRef(null);
  const {
    run: handleSubmit,
  } = useThrottleFn(() => {
    setLoading(true);
    if (!name || !phone || !email || !code || !content) {
      toast.warn('请填写完整信息');
      return false;
    }
    if (vcode.toLocaleLowerCase() !== code.toLocaleLowerCase()) {
      toast.warn('验证码输入有误');
      vcodeRef.current.onClick();
      return false;
    }
    saveConsult({
      name,
      phone,
      email,
      content,
    }).then(({code}) => {
      vcodeRef.current.onClick();
      setName('');
      setPhone('');
      setEmail('');
      setCode('');
      setContent('');
      toast.success('感谢您的反馈，您的问题已经提交，我们会及时联系您！');
      setLoading(false);
    });
  });

  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              
            <div className="col-lg-6">
                {/*====== Contact Form Wrapper ======*/}
                <div className="contact-form-wrapper wow fadeInLeft">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="contact-form"
                  >
                    <div className="form_group">
                      <p className="form_title">
                        <FormattedMessage id="footer.form.title" />
                      </p>
                    </div>
                    <div className="form_group_grid block sm:flex">
                      <div className="form_group_grid-item">
                        <div className="form_group">
                          <label>
                            <i className="far fa-user" />
                          </label>
                          <input
                            type="text"
                            className="form_control"
                            placeholder={nameTxt}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="name"
                            required
                          />
                        </div>
                        <div className="form_group">
                          <label>
                            <i className="far fa-phone-plus" />
                          </label>
                          <input
                            type="tel"
                            className="form_control"
                            placeholder={tel}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            name="number"
                            required
                          />
                        </div>
                        <div className="form_group">
                          <label>
                            <i className="far fa-envelope" />
                          </label>
                          <input
                            type="email"
                            className="form_control"
                            placeholder={emailTxt}
                            value={email}
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form_group" style={{ display: 'flex' }}>
                          <label>
                            <i className="far fa-map-marker-exclamation" />
                          </label>
                          <input
                            type="text"
                            className="form_control"
                            value={code}
                            placeholder={recaptcha}
                            onChange={(e) => setCode(e.target.value)}
                            name="code"
                            maxLength={4}
                            required
                          />
                          <Vcode ref={vcodeRef} className="verify-code" id="vcode" width={90} onChange={(value) => setVcode(value)} />
                        </div>
                      </div>
                      <div className="form_group_grid-item">
                        <div className="form_group_out">
                          <label>
                            <i className="far fa-pen-fancy" />
                            {inquiry}
                          </label>
                          <textarea
                            className="form_control"
                            rows={3}
                            placeholder=""
                            name="message"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form_group">
                      <button className="main-btn primary-btn" onClick={handleSubmit}>
                        <FormattedMessage id="footer.form.submit" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="footer-widget__links-wrap wow fadeInRight">
                  <div className="footer-widget mt-12">
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <div className="footer-widget__links-list-item">
                          <p><FormattedMessage id="footer.info.website" /></p>
                          <p>https://www.autu.finance/</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__links-list-item">
                          <p><FormattedMessage id="footer.info.email" /></p>
                          <p>cs@autu.finance</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__links-list-item">
                          <p><FormattedMessage id="footer.info.address" /></p>
                          <p>Law Partners House, Kumul Highway, Port Vila Republic of Vanuatu.</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__links-list-item">
                          <p><FormattedMessage id="footer.info.tel" /></p>
                          <p></p>
                          <p></p>
                          <p><FormattedMessage id="footer.info.hk" /><a href="tel:+852 56413620">+852 56413620</a></p>
                          <p></p>
                          <p><FormattedMessage id="footer.info.vanuatu" /><a href="tel:+678 7575889">+678 7575889</a></p>
                          <p></p>
                          <p><FormattedMessage id="footer.info.australia" /><a href="tel:+61 0426660218">+61 0426660218</a></p>
                        </div>
                      </li>
                      {/* <li>
                        <div className="footer-widget__links-list-item">
                          <p>澳大利亚：</p>
                          <p>Tower Three, International Towers Sydney, 300 Barangaroo Avenue, Sydney NSW 2000</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__links-list-item">
                          <p>新西兰：</p>
                          <p>Level 18, 10 Viaduct Harbour Avenue, Auckland 1010, New Zealand</p>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-contain">
              <img src="/assets/images/logo@2x.png" />
            </div>
            <p className="px-4 sm:px-0 wow fadeInDown"><FormattedMessage id="footer.info.disclaimer" /></p>
            <p className="px-4 sm:px-0 wow fadeInDown"><FormattedMessage id="footer.info.disclaimer.content" /></p>
          </div>
          <div className="container text-center">
            <div className="site-footer__bottom-links">
              <a href="/"><FormattedMessage id="footer.list.agreement" /></a>
              <a href="/"><FormattedMessage id="footer.list.risk" /></a>
              <a href="/"><FormattedMessage id="footer.list.amlAndCtf" /></a>
              <a href="/privacypolicy"><FormattedMessage id="footer.list.policy.agreement" /></a>
              <a href="/"><FormattedMessage id="footer.list.interest.conflicts.policy" /></a>
              <a href="/"><FormattedMessage id="footer.list.execution.policy" /></a>
            </div>
            <p className="copyright">粤ICP备2022119610号-1 @ Copyright 2023-版权所有 TradeMax Global Market</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
