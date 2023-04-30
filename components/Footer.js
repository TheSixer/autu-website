import React, { useCallback } from "react";
import Vcode from 'react-vcode';

const Footer = () => {
  const handleClick = useCallback((captcha) => {
    console.log('captcha:', captcha);
  }, []);
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
                      <p className="form_title">如您有疑问咨询，请留下您的联系方式，我们</p>
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
                            placeholder="*姓名"
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
                            placeholder="*电话"
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
                            placeholder="*邮箱"
                            name="email"
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
                            placeholder="*验证码"
                            name="code"
                            maxLength={4}
                            required
                          />
                          <Vcode className="verify-code" id="vcode" width={90} />
                        </div>
                      </div>
                      <div className="form_group_grid-item">
                        <div className="form_group_out">
                          <label>
                            <i className="far fa-pen-fancy" />
                            *询问事项
                          </label>
                          <textarea
                            className="form_control"
                            rows={3}
                            placeholder=""
                            name="message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form_group">
                      <button className="main-btn primary-btn">提 交</button>
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
                          <p>联系电话：</p>
                          <p></p>
                          <p></p>
                          <p>瓦努阿图：<a href="tel:+678 7575889">+678 7575889</a></p>
                          <p></p>
                          <p>澳大利亚：<a href="tel:+61 0426660218">+61 0426660218</a></p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__links-list-item">
                          <p>总部官网：</p>
                          <p>https://www.autu.finance/</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__links-list-item">
                          <p>联系邮箱：</p>
                          <p>cs@autu.finance</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__links-list-item">
                          <p>地址：</p>
                          <p>Law Partners House, Kumul Highway, Port Vila Republic of Vanuatu.</p>
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
            <p className="px-4 sm:px-0 wow fadeInDown">免责声明：</p>
            <p className="px-4 sm:px-0 wow fadeInDown">Autu Securities International Inc.（VFSC Registration No. 700682） 是一家由瓦努阿图金融服务委员会监管的金融服务公司。本网站所提供的信息仅为一般性信息且并不包含任何个人财务建议。在使用本网站信息之前，请您根据自身的目标、财务状况和需求考虑该信息的适用性。金融衍生品、保证金交易等涉及高风险，未必适合所有投资者。您可能会在交易时遇到损失超过初始入金金额的情况。我们建议您寻求专业建议，以确保您在交易之前全面了解所涉及的风险。在决定本网站上所提供的金融产品之前，请仔细阅读我们的用户条款、风险提示、隐私协议以及其他相关的披露文件。本网站提供的任何产品与服务不适用于美国地区居民。您必须至少年满18岁，然后才能访问我们的网站产品和服务。 通过访问我们的网站，您确认您符合了年龄的要求。</p>
          </div>
          <div className="container text-center">
            <div className="site-footer__bottom-links">
              <a href="/">用户条款</a>
              <a href="/">风险提示</a>
              <a href="/">AML& CTF 政策</a>
              <a href="/privacypolicy">个人隐私条例声明</a>
              <a href="/">利益冲突政策</a>
              <a href="/">执行政策</a>
            </div>
            <p className="copyright">粤ICP备2022119610号-1 @ Copyright 2023-版权所有 TradeMax Global Market</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
