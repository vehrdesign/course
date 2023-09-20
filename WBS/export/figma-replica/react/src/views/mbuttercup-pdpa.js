import React from 'react'

import { Helmet } from 'react-helmet'

import './mbuttercup-pdpa.css'

const MButtercupPDPA = (props) => {
  return (
    <div className="mbuttercup-pdpa-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="mbuttercup-pdpa-mbuttercup-pdpa">
        <div className="mbuttercup-pdpa-imageand-price">
          <div className="mbuttercup-pdpa-image">
            <button className="mbuttercup-pdpa-button-favorite">
              <img
                alt="IconFavoriteI327"
                src="/external/iconfavoritei327-hrf.svg"
                className="mbuttercup-pdpa-icon-favorite"
              />
            </button>
            <img
              alt="Image13271"
              src="/external/image13271-n2gp-400w.png"
              className="mbuttercup-pdpa-image1"
            />
          </div>
          <div className="mbuttercup-pdpa-frame15135">
            <div className="mbuttercup-pdpa-frame15162">
              <span className="mbuttercup-pdpa-text">
                <span>Iris Reticulata</span>
              </span>
              <div className="mbuttercup-pdpa-frame15217">
                <button className="mbuttercup-pdpa-dbutton-dot">
                  <img
                    alt="IconSCaretI327"
                    src="/external/iconscareti327-y0u3.svg"
                    className="mbuttercup-pdpa-icon-scaret"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mbuttercup-pdpa-mprimary-nav">
          <div className="mbuttercup-pdpa-icon-hamburger">
            <img
              alt="HamburgerI327"
              src="/external/hamburgeri327-i0l.svg"
              className="mbuttercup-pdpa-hamburger"
            />
          </div>
          <img
            alt="LogoWordmarkI327"
            src="/external/logowordmarki327-6wnw.svg"
            className="mbuttercup-pdpa-logo-wordmark"
          />
          <div className="mbuttercup-pdpa-icon-basket">
            <img
              alt="UnionI327"
              src="/external/unioni327-mxg.svg"
              className="mbuttercup-pdpa-union"
            />
          </div>
        </div>
        <div className="mbuttercup-pdpa-frame15161">
          <div className="mbuttercup-pdpa-frame15218">
            <div className="mbuttercup-pdpa-mqty-stepper">
              <div className="mbuttercup-pdpa-qty-selector">
                <span className="mbuttercup-pdpa-text2 📱HandheldBodyLargeDefault">
                  1
                </span>
              </div>
              <div className="mbuttercup-pdpa-frame15160">
                <div className="mbuttercup-pdpa-qty-selector1">
                  <div className="mbuttercup-pdpa-icon-minus">
                    <img
                      alt="PlusI327"
                      src="/external/plusi327-9ix.svg"
                      className="mbuttercup-pdpa-plus"
                    />
                  </div>
                </div>
                <div className="mbuttercup-pdpa-qty-selector2">
                  <div className="mbuttercup-pdpa-icon-plus">
                    <img
                      alt="PlusI327"
                      src="/external/plusi327-qm3x.svg"
                      className="mbuttercup-pdpa-plus1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <span className="mbuttercup-pdpa-text3 📱HandheldBodyLargeBold">
              <span>$1.99/ea</span>
            </span>
          </div>
          <button className="mbuttercup-pdpa-mbutton-pill">
            <span className="mbuttercup-pdpa-text5 📱HandheldBodyLargeDefault">
              <span>Add to basket</span>
            </span>
            <div className="mbuttercup-pdpa-icon-basket1">
              <img
                alt="UnionI327"
                src="/external/unioni327-h23l.svg"
                className="mbuttercup-pdpa-union1"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MButtercupPDPA
