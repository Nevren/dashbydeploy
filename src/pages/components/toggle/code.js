import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Toggle";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower}/>
    </header>
    <AppContent>
      <div className="row">
        <div className="column column--full">
        <h2 className="example-header no-margin--top">Custom Toggle Switch <button className="button button--transparent button--copy-link" data-id="copyurl" id="Custom_Toggle_Switch" /></h2>
        <div className="row example-container">
          <fieldset className="column column--full">
            <label className="inline" htmlFor="switch1">Switch</label>
            <div className="switch">
              <input name="switch" type="checkbox" className="switch--checkbox" id="switch1" />
              <label className="switch--label" htmlFor="switch1">
                <span className="switch--inner"></span>
                <span className="switch--handle"></span>
              </label>
            </div>
          </fieldset>
        </div>
          <CodeToggle>
{`<!-- Custom Toggle Switch -->
<fieldset class="column column--full">
  <label class="inline" for="switch1">Switch</label>
  <div class="switch">
    <input name="switch" type="checkbox" class="switch--checkbox" id="switch1" />
    <label class="switch--label" for="switch1">
      <span class="switch--inner"></span>
      <span class="switch--handle"></span>
    </label>
  </div>
</fieldset>`}
          </CodeToggle>
          <CodeToggleSCSS>
{`//Include these variables in your theme file to change the color of your switch
$switch--on: $blue !default; //Color of switch when on
$switch--off: $gray-250 !default; //Color of switch when off
}`}
          </CodeToggleSCSS>

        </div>
      </div>
    </AppContent>
  </Layout>
)
